'use client';

import { useState, type ReactNode } from 'react';
import {
  DndContext,
  PointerSensor,
  useDraggable,
  useDroppable,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { useRouter } from 'next/navigation';
import { BriefcaseBusiness, CalendarDays, LinkIcon, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

type JobStatus = 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
type Plan = 'free' | 'pro';

export interface JobTrackerItem {
  id: string;
  company: string;
  role: string;
  status: JobStatus;
  applied_date: string | null;
  notes: string | null;
  job_url: string | null;
}

interface JobTrackerBoardProps {
  initialJobs: JobTrackerItem[];
  plan: Plan;
}

const columns: Array<{
  id: JobStatus;
  label: string;
  hint: string;
  accentClassName: string;
}> = [
  {
    id: 'saved',
    label: 'Saved',
    hint: 'Worth applying',
    accentClassName: 'bg-slate-400',
  },
  {
    id: 'applied',
    label: 'Applied',
    hint: 'Application sent',
    accentClassName: 'bg-cyan-500',
  },
  {
    id: 'interview',
    label: 'Interview',
    hint: 'Active process',
    accentClassName: 'bg-amber-500',
  },
  {
    id: 'offer',
    label: 'Offer',
    hint: 'Good news',
    accentClassName: 'bg-emerald-500',
  },
  {
    id: 'rejected',
    label: 'Rejected',
    hint: 'Closed loop',
    accentClassName: 'bg-rose-500',
  },
];

interface CreateJobResponse {
  job?: JobTrackerItem;
  error?: string;
  message?: string;
}

function DroppableColumn({
  id,
  children,
}: {
  id: JobStatus;
  children: ReactNode;
}): JSX.Element {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[220px] rounded-[1.5rem] border p-3 transition ${
        isOver ? 'border-cyan-300 bg-cyan-50' : 'border-slate-200 bg-slate-50'
      }`}
    >
      {children}
    </div>
  );
}

function JobCard({
  job,
  onDelete,
}: {
  job: JobTrackerItem;
  onDelete(jobId: string): void;
}): JSX.Element {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: job.id,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <article
      ref={setNodeRef}
      style={style}
      className={`rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm transition ${
        isDragging ? 'opacity-70 shadow-xl' : ''
      }`}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-base font-bold text-slate-950">{job.role}</h3>
          <p className="mt-1 text-sm font-semibold text-slate-500">{job.company}</p>
        </div>
        <button
          type="button"
          className="rounded-full p-1 text-slate-400 transition hover:bg-rose-50 hover:text-rose-600"
          onClick={(event) => {
            event.stopPropagation();
            onDelete(job.id);
          }}
          aria-label={`Delete ${job.role} at ${job.company}`}
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
      {job.applied_date ? (
        <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <CalendarDays className="h-3.5 w-3.5" />
          {job.applied_date}
        </p>
      ) : null}
      {job.job_url ? (
        <a
          href={job.job_url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center gap-2 text-xs font-bold text-cyan-700"
          onClick={(event) => event.stopPropagation()}
        >
          <LinkIcon className="h-3.5 w-3.5" />
          Job post
        </a>
      ) : null}
      {job.notes ? (
        <p className="mt-3 rounded-xl bg-slate-50 p-3 text-xs leading-5 text-slate-500">
          {job.notes}
        </p>
      ) : null}
    </article>
  );
}

export function JobTrackerBoard({ initialJobs, plan }: JobTrackerBoardProps): JSX.Element {
  const router = useRouter();
  const [jobs, setJobs] = useState(initialJobs);
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [appliedDate, setAppliedDate] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
  const freeLimitReached = plan === 'free' && jobs.length >= 3;

  async function handleCreate(): Promise<void> {
    setError(null);
    setCreating(true);
    const response = await fetch('/api/job-applications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        company,
        role,
        jobUrl,
        appliedDate,
        notes,
      }),
    });
    const payload = (await response.json().catch(() => ({}))) as CreateJobResponse;
    setCreating(false);

    if (!response.ok || !payload.job) {
      setError(
        payload.error === 'PLAN_GATE'
          ? 'Free plan users can track up to 3 jobs.'
          : payload.message ?? 'Could not add this job.'
      );
      return;
    }

    setJobs((current) => [payload.job as JobTrackerItem, ...current]);
    setCompany('');
    setRole('');
    setJobUrl('');
    setAppliedDate('');
    setNotes('');
    router.refresh();
  }

  async function handleDragEnd(event: DragEndEvent): Promise<void> {
    const jobId = String(event.active.id);
    const nextStatus = event.over?.id as JobStatus | undefined;
    const existingJob = jobs.find((job) => job.id === jobId);

    if (!nextStatus || !existingJob || existingJob.status === nextStatus) {
      return;
    }

    setJobs((current) =>
      current.map((job) => (job.id === jobId ? { ...job, status: nextStatus } : job))
    );

    const response = await fetch(`/api/job-applications/${jobId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: nextStatus }),
    });

    if (!response.ok) {
      setJobs((current) =>
        current.map((job) => (job.id === jobId ? { ...job, status: existingJob.status } : job))
      );
      setError('Could not move this job. Try again.');
    }
  }

  async function handleDelete(jobId: string): Promise<void> {
    const confirmed = window.confirm('Delete this tracked job?');
    if (!confirmed) {
      return;
    }

    const previous = jobs;
    setJobs((current) => current.filter((job) => job.id !== jobId));
    const response = await fetch(`/api/job-applications/${jobId}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      setJobs(previous);
      setError('Could not delete this job.');
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-cyan-700">
              Add job
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-[-0.03em]">
              Track the role before the process gets messy.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Free users can track 3 jobs. Pro users get unlimited tracking.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-600">
            {plan === 'free' ? `${jobs.length}/3 jobs used` : 'Unlimited jobs'}
          </div>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_160px]">
          <div>
            <Label htmlFor="company">Company</Label>
            <Input
              id="company"
              className="mt-2"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Acme"
            />
          </div>
          <div>
            <Label htmlFor="role">Role</Label>
            <Input
              id="role"
              className="mt-2"
              value={role}
              onChange={(event) => setRole(event.target.value)}
              placeholder="Product manager"
            />
          </div>
          <div>
            <Label htmlFor="job-url">Job URL</Label>
            <Input
              id="job-url"
              className="mt-2"
              value={jobUrl}
              onChange={(event) => setJobUrl(event.target.value)}
              placeholder="https://..."
            />
          </div>
          <div>
            <Label htmlFor="applied-date">Date</Label>
            <Input
              id="applied-date"
              type="date"
              className="mt-2"
              value={appliedDate}
              onChange={(event) => setAppliedDate(event.target.value)}
            />
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              className="mt-2 min-h-[96px]"
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Recruiter name, follow-up date, interview prep notes..."
            />
          </div>
          <Button
            type="button"
            onClick={handleCreate}
            disabled={creating || freeLimitReached || !company.trim() || !role.trim()}
          >
            <Plus className="mr-2 h-4 w-4" />
            {creating ? 'Adding...' : 'Add job'}
          </Button>
        </div>
        {freeLimitReached ? (
          <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-semibold text-amber-800">
            You have reached the free tracker limit. Upgrade to track more roles.
          </p>
        ) : null}
        {error ? (
          <p className="mt-3 rounded-2xl border border-rose-200 bg-rose-50 p-3 text-sm font-semibold text-rose-700">
            {error}
          </p>
        ) : null}
      </section>

      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <section className="grid gap-4 xl:grid-cols-5">
          {columns.map((column) => {
            const columnJobs = jobs.filter((job) => job.status === column.id);

            return (
              <div key={column.id} className="space-y-3">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="font-display text-xl font-bold text-slate-950">
                        {column.label}
                      </h2>
                      <p className="mt-1 text-xs font-semibold text-slate-500">{column.hint}</p>
                    </div>
                    <span className={`h-3 w-3 rounded-full ${column.accentClassName}`} />
                  </div>
                </div>
                <DroppableColumn id={column.id}>
                  <div className="space-y-3">
                    {columnJobs.length > 0 ? (
                      columnJobs.map((job) => (
                        <JobCard key={job.id} job={job} onDelete={handleDelete} />
                      ))
                    ) : (
                      <div className="flex min-h-[120px] flex-col items-center justify-center rounded-[1.25rem] border border-dashed border-slate-300 bg-white/70 p-4 text-center">
                        <BriefcaseBusiness className="h-6 w-6 text-slate-300" />
                        <p className="mt-2 text-xs font-semibold text-slate-400">
                          Drop jobs here
                        </p>
                      </div>
                    )}
                  </div>
                </DroppableColumn>
              </div>
            );
          })}
        </section>
      </DndContext>
    </div>
  );
}
