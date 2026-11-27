import { isSafeJobUrl, jobUrlSchema, normalizeJobUrl } from '@/lib/jobUrl';

// The job tracker's link box took a pasted link through `z.string().url()`:
// "www.linkedin.com/jobs/view/1" was refused with a generic "Could not add
// this job.", while "javascript:alert(1)" was accepted and rendered as a link.
describe('normalizeJobUrl', () => {
  it('keeps an empty value empty: the link is optional', () => {
    expect(normalizeJobUrl('')).toBe('');
    expect(normalizeJobUrl('   ')).toBe('');
  });

  it.each([
    ['www.linkedin.com/jobs/view/1', 'https://www.linkedin.com/jobs/view/1'],
    ['acme.com/careers', 'https://acme.com/careers'],
    ['  naukri.com/job-listings-123  ', 'https://naukri.com/job-listings-123'],
    ['jobs.example.com:8443/role', 'https://jobs.example.com:8443/role'],
  ])('adds https:// to a link pasted without a scheme (%s)', (input, expected) => {
    expect(normalizeJobUrl(input)).toBe(expected);
  });

  it('leaves a full http(s) link as typed', () => {
    expect(normalizeJobUrl('https://acme.com/jobs?id=1')).toBe('https://acme.com/jobs?id=1');
    expect(normalizeJobUrl('http://acme.com')).toBe('http://acme.com');
  });

  it.each(['javascript:alert(1)', 'data:text/html,<script>1</script>', 'file:///etc/passwd', 'mailto:hr@acme.com'])(
    'refuses a non-web scheme (%s)',
    (input) => {
      expect(normalizeJobUrl(input)).toBeNull();
    }
  );

  it('refuses text that is not a link', () => {
    expect(normalizeJobUrl('applied via referral')).toBeNull();
    expect(normalizeJobUrl('google')).toBeNull();
  });
});

describe('jobUrlSchema', () => {
  it('normalises on the server too, so the API cannot be used to store an unsafe link', () => {
    expect(jobUrlSchema.parse('acme.com/careers')).toBe('https://acme.com/careers');
    expect(jobUrlSchema.parse('')).toBe('');
    expect(jobUrlSchema.parse(undefined)).toBeUndefined();
    expect(jobUrlSchema.safeParse('javascript:alert(1)').success).toBe(false);
  });
});

describe('isSafeJobUrl', () => {
  it('only lets http(s) rows be rendered as links', () => {
    expect(isSafeJobUrl('https://acme.com')).toBe(true);
    expect(isSafeJobUrl('javascript:alert(1)')).toBe(false);
    expect(isSafeJobUrl(null)).toBe(false);
  });
});
