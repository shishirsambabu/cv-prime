import type { InterviewData } from '@/lib/interviewData';

/**
 * Role-specific interview Q&A for high-search-volume roles that previously fell
 * back to the generic stub in lib/interviewData.ts. Every entry here must be
 * genuinely role-specific — generic "tell me about yourself" content belongs in
 * the stub, not here. Roles without an entry are rendered noindex (see
 * hasDetailedInterviewData) until real content is written.
 */
export const interviewDataMore: Record<string, InterviewData> = {
  'business-analyst': {
    slug: 'business-analyst',
    displayTitle: 'Business Analyst',
    questions: [
      {
        type: 'technical',
        q: 'How do you gather and document requirements for a new system?',
        answer:
          'Start with a stakeholder map so you know whose requirements matter and who signs off. Use a mix of techniques: one-to-one interviews for depth, workshops for alignment, observation or process walkthroughs for how work is really done, and document analysis for existing rules. Capture business requirements (why), functional requirements (what the system must do) and non-functional requirements (performance, security, availability). Document them as a BRD/FRD in waterfall settings or as user stories with acceptance criteria in Agile teams. Finish by getting each requirement traced to a business objective and formally signed off.',
      },
      {
        type: 'technical',
        q: 'What is the difference between a BRD, an FRD and a user story?',
        answer:
          'A Business Requirements Document describes the business problem, objectives, scope and high-level needs — it is written for business sponsors. A Functional Requirements Document translates those needs into specific system behaviour — inputs, outputs, rules and validations — for the delivery team. A user story is the Agile equivalent of a small functional requirement written from the user\'s view ("As a ___, I want ___ so that ___") with acceptance criteria. Many Indian IT services projects still use BRD/FRD for client sign-off and then break the FRD into user stories for sprint delivery.',
      },
      {
        type: 'technical',
        q: 'Walk me through how you would perform a gap analysis.',
        answer:
          'Define the current state (as-is process, systems, metrics), define the desired future state (to-be process and target KPIs), then list the gaps between them — in process, people, technology and data. For each gap, describe the impact, the root cause and the options to close it, and estimate effort. Present the result as a gap matrix with priorities. Process maps in BPMN or simple swimlane diagrams make the as-is and to-be visible to non-technical stakeholders.',
      },
      {
        type: 'technical',
        q: 'Which SQL queries would you expect a business analyst to write?',
        answer:
          'A BA should be comfortable with SELECT with WHERE filters, GROUP BY with aggregates (COUNT, SUM, AVG), JOINs across two or three tables, and CASE statements for simple bucketing. Window functions such as ROW_NUMBER are a strong bonus. In the interview, explain why you would query the data — for example, validating a requirement assumption ("how many orders are actually cancelled after dispatch?") before writing it into a BRD. Data-backed requirements are what separate strong BAs from note-takers.',
      },
      {
        type: 'situational',
        q: 'Two senior stakeholders give you conflicting requirements. What do you do?',
        answer:
          'Do not pick a side yourself. Document both requirements clearly, then trace each one back to the business objective it serves and estimate its impact and cost. Bring both stakeholders together with that analysis and facilitate a decision; if they still disagree, escalate to the project sponsor who owns prioritisation. Record the decision and its rationale in the requirements log so it is not reopened later. Interviewers want to see facilitation and traceability, not diplomacy alone.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a time a requirement you documented turned out to be wrong.',
        answer:
          'Use STAR. Describe the requirement, how the error was discovered (UAT, production defect, stakeholder review), and your immediate action — usually a change request and impact assessment. The most important part is what you changed in your process afterwards: adding a prototype or wireframe review, writing clearer acceptance criteria, or validating assumptions with data. Owning the mistake and showing a process fix scores far higher than blaming the stakeholder.',
      },
    ],
    tips: [
      'Expect a case question: you will be given a business problem and asked how you would elicit requirements and define success metrics',
      'Be ready to draw a process flow or use-case diagram on a whiteboard — practise BPMN basics',
      'For IT services firms (TCS, Infosys, Accenture), know the full SDLC and change-request process; for product companies, expect more on user stories, prioritisation and metrics',
      'Basic SQL and Excel (pivot tables, VLOOKUP/XLOOKUP) are tested in many BA interviews — practise them',
      'Certifications such as ECBA/CCBA (IIBA) or CSPO are worth mentioning if you hold them, but interviewers weigh real project examples more',
    ],
  },
  'data-scientist': {
    slug: 'data-scientist',
    displayTitle: 'Data Scientist',
    questions: [
      {
        type: 'technical',
        q: 'Explain the bias–variance trade-off.',
        answer:
          'Bias is error from overly simple assumptions — a high-bias model underfits and performs poorly on both training and test data. Variance is error from sensitivity to the training data — a high-variance model overfits, performing well on training data but poorly on unseen data. Increasing model complexity usually lowers bias and raises variance. You manage the trade-off with cross-validation, regularisation (L1/L2), more training data, ensembling (bagging reduces variance, boosting reduces bias) and by choosing model complexity based on validation performance.',
      },
      {
        type: 'technical',
        q: 'How do you handle a heavily imbalanced classification dataset, such as fraud detection?',
        answer:
          'First, pick the right metric — accuracy is misleading when 99% of cases are negative, so use precision, recall, F1, PR-AUC, or a cost-based metric tied to the business loss. Then consider: class weights in the loss function; resampling (undersampling the majority class, or oversampling with SMOTE — only on the training fold); threshold tuning on the predicted probabilities; and anomaly-detection approaches if positives are extremely rare. Always validate with stratified splits and, for fraud, with time-based splits to avoid leakage.',
      },
      {
        type: 'technical',
        q: 'What is the difference between bagging and boosting?',
        answer:
          'Bagging trains many models independently on bootstrap samples and averages their predictions — it mainly reduces variance. Random Forest is the classic example. Boosting trains models sequentially, each one focusing on the errors of the previous ones — it mainly reduces bias. Gradient Boosting, XGBoost, LightGBM and CatBoost are common examples. Boosting usually wins on tabular data but is more sensitive to noisy labels and needs careful tuning of learning rate and tree depth.',
      },
      {
        type: 'technical',
        q: 'How would you design an A/B test to measure a new recommendation model?',
        answer:
          'Define one primary metric (for example, click-through rate or revenue per user) plus guardrail metrics (latency, unsubscribes). Calculate the sample size from the minimum detectable effect, baseline rate, significance level and power. Randomise at the user level, not the session level, to avoid contamination. Run the test for full weekly cycles to cover day-of-week effects, avoid peeking at results early, and check for sample-ratio mismatch before reading the result. Report the effect with a confidence interval, not just a p-value.',
      },
      {
        type: 'technical',
        q: 'What is data leakage and how do you prevent it?',
        answer:
          'Leakage happens when information that would not be available at prediction time gets into training — for example, a feature computed using future data, or scaling the full dataset before splitting. It produces excellent offline scores that collapse in production. Prevent it by splitting data before any preprocessing, fitting scalers and encoders inside a pipeline on the training fold only, using time-based splits for temporal data, and asking for every feature: "would I know this value at the moment the prediction is made?"',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a model you built that did not make it to production. Why?',
        answer:
          'This question tests honesty and business judgement. Use STAR: describe the problem, the model and its offline metrics, then the real reason it stopped — the gain was too small to justify engineering cost, the data was not available in real time, stakeholders could not act on the output, or it failed a fairness or explainability review. Close with what you learned, such as agreeing on deployment constraints and a business metric before modelling starts.',
      },
    ],
    tips: [
      'Most Indian data science interviews include a take-home or live case — practise explaining your notebook end-to-end in 10 minutes',
      'Revise statistics fundamentals: hypothesis testing, p-values, confidence intervals and distributions are asked more often than deep learning theory',
      'Be ready to write pandas and SQL by hand — many rounds test data manipulation before modelling',
      'For product companies (Flipkart, Swiggy, PhonePe), expect product-metric and experimentation questions; for analytics firms (Mu Sigma, Fractal, Tiger Analytics), expect more business case solving',
      'Know at least one deployment story: how a model was served, monitored for drift, and retrained',
    ],
  },
  'frontend-developer': {
    slug: 'frontend-developer',
    displayTitle: 'Frontend Developer',
    questions: [
      {
        type: 'technical',
        q: 'Explain the JavaScript event loop.',
        answer:
          "JavaScript runs on a single thread with a call stack. Asynchronous work (timers, network requests, DOM events) is handed to browser APIs, and their callbacks are queued when ready. The event loop moves callbacks onto the stack only when the stack is empty. There are two main queues: the microtask queue (Promise callbacks, queueMicrotask, MutationObserver) and the macrotask queue (setTimeout, setInterval, I/O). After each macrotask, all pending microtasks run before the next macrotask or render. That is why a resolved Promise's .then runs before a setTimeout(fn, 0).",
      },
      {
        type: 'technical',
        q: 'What causes unnecessary re-renders in React, and how do you prevent them?',
        answer:
          'A component re-renders when its state changes, its parent re-renders, or a context it consumes changes. Common causes of wasted renders are creating new object/array/function props on every render, putting fast-changing values in a widely used context, and lifting state higher than needed. Fixes: keep state close to where it is used, split contexts, use React.memo for expensive pure children together with useMemo/useCallback for stable props, and virtualise long lists. Always measure with the React DevTools Profiler before optimising.',
      },
      {
        type: 'technical',
        q: 'What are Core Web Vitals and how would you improve LCP on a slow page?',
        answer:
          "Core Web Vitals are Google's user-experience metrics: Largest Contentful Paint (loading, target ≤ 2.5s), Interaction to Next Paint (responsiveness, target ≤ 200ms) and Cumulative Layout Shift (visual stability, target ≤ 0.1). To improve LCP: identify the LCP element, serve it fast (preload the hero image, use modern formats like WebP/AVIF, correct sizing, CDN), remove render-blocking CSS/JS, use server-side rendering or static generation so content is in the initial HTML, and reduce server response time. Test on a throttled mid-range Android device, since that reflects many Indian users.",
      },
      {
        type: 'technical',
        q: 'What is the difference between CSR, SSR, SSG and ISR?',
        answer:
          'Client-side rendering ships a mostly empty HTML page and renders in the browser — simple to host but slower first paint and weaker for SEO. Server-side rendering builds HTML on each request — fresh data and good SEO, at the cost of server work. Static site generation builds HTML at build time — fastest delivery, but data is only as fresh as the last build. Incremental static regeneration (Next.js) serves static pages and rebuilds them in the background after a revalidation interval. Choose per page based on how often data changes and whether it needs to be indexed.',
      },
      {
        type: 'technical',
        q: 'How do you make a web application accessible?',
        answer:
          'Use semantic HTML first (button, nav, main, label) so assistive technology understands the page without extra ARIA. Ensure everything works with a keyboard and has a visible focus state, provide text alternatives for images, maintain colour contrast of at least 4.5:1 for body text (WCAG AA), associate labels with form fields and announce errors, and manage focus in modals and route changes. Use ARIA only to fill gaps semantic HTML cannot cover. Test with axe or Lighthouse plus a real screen reader such as NVDA or VoiceOver.',
      },
      {
        type: 'situational',
        q: 'A designer hands you a design that will be very slow on low-end phones. What do you do?',
        answer:
          'Raise it early with evidence, not opinion: build a quick prototype or measure the heavy part (large animations, autoplay video, huge images) on a throttled device and share the numbers. Propose alternatives that keep the design intent — a lighter animation, a poster image instead of video on mobile, lazy loading below the fold. Agree on a performance budget with the designer and product manager so future designs are checked against it. Interviewers want collaboration backed by data.',
      },
    ],
    tips: [
      'Expect a live coding round in vanilla JavaScript — practise debounce, throttle, Promise.all, deep clone and array polyfills',
      'Machine-coding rounds are common at Indian product companies (Flipkart, Swiggy, Razorpay): build a small UI like a todo list, autocomplete or star rating in 60–90 minutes',
      'Know React hooks deeply, including the dependency array of useEffect and when cleanups run',
      'Be ready to discuss frontend system design: component architecture, state management, caching and performance budgets',
      'Keep a live portfolio or GitHub link on your CV — interviewers often open it before the call',
    ],
  },
  'backend-developer': {
    slug: 'backend-developer',
    displayTitle: 'Backend Developer',
    questions: [
      {
        type: 'technical',
        q: 'How do you design a REST API that is safe to retry?',
        answer:
          'GET, PUT and DELETE are idempotent by definition when implemented correctly — repeating them gives the same result. POST is not, so for operations like payments or order creation, accept an idempotency key from the client, store it with the result, and return the stored result on a retry instead of executing again. Use correct status codes, return a consistent error shape, version the API, and paginate list endpoints. Idempotency is especially important with UPI and payment-gateway integrations, where network timeouts and retries are common.',
      },
      {
        type: 'technical',
        q: 'What are database indexes and when can they hurt performance?',
        answer:
          'An index (usually a B-tree) lets the database find rows without scanning the whole table, turning lookups from O(n) into roughly O(log n). Composite indexes follow the leftmost-prefix rule, so column order matters. Indexes hurt when a table is write-heavy (every insert/update must update each index), when they are on low-selectivity columns, or when there are so many that they consume memory needed for data. Use EXPLAIN/EXPLAIN ANALYZE to confirm a query actually uses the index you expect.',
      },
      {
        type: 'technical',
        q: 'Explain the ACID properties and transaction isolation levels.',
        answer:
          "Atomicity: a transaction fully happens or not at all. Consistency: it moves the database from one valid state to another. Isolation: concurrent transactions do not see each other's partial work. Durability: committed data survives crashes. Isolation levels trade correctness for concurrency: Read Uncommitted (allows dirty reads), Read Committed (PostgreSQL default — no dirty reads), Repeatable Read (MySQL InnoDB default — no non-repeatable reads), and Serializable (behaves as if transactions ran one at a time). Pick the lowest level that prevents the anomalies your business logic cannot tolerate.",
      },
      {
        type: 'technical',
        q: 'How would you implement caching for a read-heavy API?',
        answer:
          'Use the cache-aside pattern: read from Redis first, on a miss read from the database and populate the cache with a TTL. Decide how to invalidate — delete the key on write, or accept short staleness with a TTL. Guard against cache stampede (many requests missing at once) with request coalescing, locks, or early refresh, and against cache penetration (repeated lookups for missing keys) by caching negative results briefly. Measure hit rate and latency; a cache that is rarely hit only adds complexity.',
      },
      {
        type: 'technical',
        q: 'When would you use a message queue such as Kafka or RabbitMQ?',
        answer:
          'Use a queue to decouple services and absorb load spikes: sending emails and notifications, processing uploads, updating search indexes, or fanning out events to several consumers. RabbitMQ suits task queues with routing and per-message acknowledgement. Kafka suits high-throughput event streams where consumers replay from an offset. Design consumers to be idempotent because most systems give at-least-once delivery, add retries with backoff and a dead-letter queue, and monitor consumer lag.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a production performance problem you diagnosed.',
        answer:
          'Use STAR and be specific about the investigation: what symptom you saw (p99 latency, timeouts, CPU), what tools you used (APM traces, slow-query logs, profilers, EXPLAIN plans), and the root cause — a missing index, an N+1 query, a lock, a memory leak. Give the fix and the measured result ("p99 dropped from 1.8s to 220ms"), then the prevention step: an alert, a load test, or a code-review checklist item.',
      },
    ],
    tips: [
      'Low-level design rounds are standard at Indian product companies — practise designing a parking lot, rate limiter or splitwise-style app with clean classes',
      'Expect at least one system design question from SDE-2 level upwards: URL shortener, notification service or rate limiter',
      'Know one backend stack deeply (Java/Spring Boot, Node.js, Go or Python/Django) rather than many superficially',
      'Revise SQL joins, indexing and transactions — they are asked even for NoSQL-heavy roles',
      'Quantify backend impact on your CV: latency, throughput, uptime and cost savings',
    ],
  },
  'full-stack-developer': {
    slug: 'full-stack-developer',
    displayTitle: 'Full Stack Developer',
    questions: [
      {
        type: 'technical',
        q: 'Walk me through what happens when a user submits a login form in your stack.',
        answer:
          'The browser validates the form and sends credentials over HTTPS to an API endpoint. The server validates input, looks up the user, and compares the password with a slow hash such as bcrypt or Argon2. On success it issues a session — either an HttpOnly, Secure, SameSite cookie holding a session ID, or a short-lived access token plus a refresh token. The frontend updates auth state and redirects. Mention rate limiting on login, generic error messages to avoid user enumeration, and CSRF protection if you use cookies.',
      },
      {
        type: 'technical',
        q: 'Where should data fetching and state live in a modern React/Next.js app?',
        answer:
          'Server state (data from APIs) is best handled by the server or a data-fetching library — Server Components or getServerSideProps in Next.js, or React Query/SWR on the client for caching, deduplication and revalidation. UI state (open modals, form inputs) stays local in components. Global client state (auth user, theme, a complex editor) goes into Context or a small store such as Zustand or Redux Toolkit. Mixing server data into a global store by hand is a common source of stale-data bugs.',
      },
      {
        type: 'technical',
        q: 'How do you choose between SQL and NoSQL for a new feature?',
        answer:
          'Start from access patterns and consistency needs. Relational databases (PostgreSQL, MySQL) fit structured data with relationships, joins, and transactions — orders, payments, users. Document stores (MongoDB) fit flexible, nested data read as a whole, such as a CV or a product catalogue entry with variable attributes. Many production apps use both. For most new products, PostgreSQL with a JSONB column for flexible fields is a strong default.',
      },
      {
        type: 'technical',
        q: 'How do you protect a web app against XSS and CSRF?',
        answer:
          'XSS: never insert untrusted input as raw HTML — React escapes by default, so treat dangerouslySetInnerHTML as a red flag and sanitise with a library like DOMPurify when you must. Add a Content Security Policy and set auth cookies as HttpOnly so scripts cannot read them. CSRF: use SameSite=Lax or Strict cookies, require CSRF tokens for state-changing requests when using cookie sessions, and do not perform state changes on GET. Also validate every input on the server — client validation is only for UX.',
      },
      {
        type: 'technical',
        q: 'How do you deploy a full stack application with zero downtime?',
        answer:
          'Containerise the app, build an immutable image in CI after tests pass, and deploy with a rolling, blue-green or canary strategy behind a load balancer with health checks. Database migrations must be backward-compatible — use the expand-and-contract pattern: add new columns first, deploy code that writes both, backfill, then remove old columns in a later release. Keep a one-command rollback path and watch error rates and latency during each rollout.',
      },
      {
        type: 'situational',
        q: 'You have a week to ship a feature that touches frontend, API and database. How do you plan it?',
        answer:
          'Start by agreeing the API contract and data model, since both sides depend on them. Build a thin vertical slice end-to-end on day one or two — a basic UI calling a real endpoint that writes to the database — so integration risk shows up early. Then add validation, edge cases, tests and polish in priority order, using a feature flag so unfinished work can ship safely. Communicate scope trade-offs on day two, not day five.',
      },
    ],
    tips: [
      'Expect to explain one project end-to-end: architecture diagram, database schema, auth, deployment and what you would change',
      'MERN and Next.js stacks dominate Indian startup job posts — know Node.js, Express, MongoDB and PostgreSQL basics',
      'Prepare for a take-home assignment: clean folder structure, README, tests and a deployed demo link make a big difference',
      'Know basic DevOps: Docker, environment variables, CI pipelines and one cloud platform (AWS, GCP or Vercel)',
      'Show breadth without bluffing — say clearly which side of the stack is your strength',
    ],
  },
  'devops-engineer': {
    slug: 'devops-engineer',
    displayTitle: 'DevOps Engineer',
    questions: [
      {
        type: 'technical',
        q: 'Explain the difference between a Docker container and a virtual machine.',
        answer:
          'A virtual machine virtualises hardware and runs a full guest operating system on a hypervisor, so it is heavier (GBs, slower boot) but strongly isolated. A container shares the host kernel and isolates processes using Linux namespaces and cgroups, so it is lightweight (MBs, starts in seconds) but isolation is weaker. In practice, containers usually run inside VMs in the cloud — the VM gives tenant isolation, containers give dense, consistent packaging of applications.',
      },
      {
        type: 'technical',
        q: 'How does a Kubernetes Deployment perform a rolling update, and how do you roll back?',
        answer:
          'A Deployment manages ReplicaSets. When you change the pod template (for example, a new image tag), Kubernetes creates a new ReplicaSet and gradually scales it up while scaling the old one down, controlled by maxSurge and maxUnavailable. Readiness probes stop traffic reaching new pods until they are healthy. If something breaks, kubectl rollout undo deployment/<name> scales the previous ReplicaSet back up. In GitOps setups (Argo CD, Flux), you roll back by reverting the commit in Git.',
      },
      {
        type: 'technical',
        q: 'Why does Terraform keep a state file and how should a team manage it?',
        answer:
          'The state file maps resources in your configuration to real infrastructure, so Terraform can calculate what to create, change or destroy. For teams, store state remotely (an S3 bucket with DynamoDB locking, GCS, or Terraform Cloud) so it is shared and locked during applies, encrypt it because it can contain secrets, and never edit it by hand. Split state by environment and component so one apply cannot damage everything, and run plan in CI so changes are reviewed before apply.',
      },
      {
        type: 'technical',
        q: 'Design a CI/CD pipeline for a microservice.',
        answer:
          'On every pull request: lint, unit tests, build, static analysis (SonarQube), dependency and container image scanning (Trivy or Snyk). On merge to main: build an immutable image tagged with the commit SHA, push to a registry, deploy automatically to staging, run integration or smoke tests, then promote to production with a manual approval or automated canary analysis. Keep secrets in a vault or the cloud secret manager, not in pipeline variables in plain text, and make rollback a single action.',
      },
      {
        type: 'technical',
        q: 'What is the difference between monitoring and observability? Which signals do you collect?',
        answer:
          'Monitoring tells you when known things go wrong, using predefined metrics and alerts. Observability is the ability to ask new questions about a system from its outputs, so you can debug failures you did not predict. The three main signals are metrics (Prometheus, CloudWatch), logs (ELK, Loki) and traces (Jaeger, OpenTelemetry). Alert on user-facing symptoms — the four golden signals of latency, traffic, errors and saturation — and define SLOs so alerts reflect real impact.',
      },
      {
        type: 'situational',
        q: 'Production is down at 2 a.m. and you are on call. Walk me through your response.',
        answer:
          'Acknowledge the alert and open an incident channel so others know someone is on it. Assess impact and scope quickly from dashboards. Mitigate first, diagnose second: roll back the most recent deployment, fail over, or scale up — restoring service matters more than finding the root cause at that moment. Communicate status updates at regular intervals. Once stable, write a blameless post-mortem with timeline, root cause and action items so it does not recur.',
      },
    ],
    tips: [
      'Expect hands-on Linux questions: process management, permissions, networking commands (ss, curl, dig) and troubleshooting a full disk',
      'Know one cloud deeply — AWS is most common in Indian job posts, followed by Azure for enterprise and GCP for startups',
      'Be ready to write a Dockerfile, a Kubernetes manifest or a simple pipeline YAML live',
      'Quantify your impact on your CV: deployment frequency, lead time, MTTR and cloud cost savings',
      'Certifications such as AWS Solutions Architect, CKA or Terraform Associate help with shortlisting in India, but practical depth decides the interview',
    ],
  },
  'hr-manager': {
    slug: 'hr-manager',
    displayTitle: 'HR Manager',
    questions: [
      {
        type: 'technical',
        q: 'How would you reduce employee attrition in a team where it has doubled this year?',
        answer:
          'Start with data, not assumptions: segment attrition by team, manager, tenure, performance rating and role, and separate regretted from non-regretted exits. Use exit interviews, stay interviews and engagement survey comments to find root causes — commonly manager quality, pay versus market, career growth or workload. Then act on the top causes: manager coaching, a compensation correction for critical roles, clear career paths and internal mobility. Track monthly attrition and early-tenure exits to see whether the actions work.',
      },
      {
        type: 'technical',
        q: 'Which labour laws and statutory compliances must an HR manager in India track?',
        answer:
          "Core areas include Provident Fund (EPF Act), Employees' State Insurance (ESI), Payment of Gratuity, Payment of Bonus, Minimum Wages, Maternity Benefit Act (26 weeks for eligible employees), the POSH Act (Internal Committee and annual reporting), professional tax and state Shops and Establishments Acts. The four new Labour Codes consolidate many of these laws, so an HR manager should know how they change wage definitions, gratuity and compliance filings, and work with legal or payroll partners on implementation. Mention that you maintain a compliance calendar for filings and returns.",
      },
      {
        type: 'technical',
        q: 'How do you design a fair performance appraisal process?',
        answer:
          'Set clear goals at the start of the cycle (OKRs or KPIs) linked to team objectives, and collect evidence through the year with regular check-ins rather than one annual conversation. Use a calibration meeting across managers to reduce rating bias and inconsistency, separate the development conversation from the compensation decision where possible, and give employees a way to raise concerns. Track rating distribution by gender, team and manager to spot bias. Communicate the process before the cycle starts, not after.',
      },
      {
        type: 'situational',
        q: 'An employee raises a sexual harassment complaint against a senior manager. What do you do?',
        answer:
          'Follow the POSH Act process. Acknowledge the complaint promptly, maintain confidentiality, and refer it to the Internal Committee, which must include an external member. Take interim measures if requested and appropriate — such as changing reporting lines or granting leave — and protect the complainant from retaliation. The IC conducts the inquiry, hears both sides and gives its recommendations within the statutory timelines. Seniority of the respondent does not change the process. Document every step.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a time you implemented an HR policy that employees initially resisted.',
        answer:
          'Use STAR. Explain the policy and why it was needed (cost, compliance, fairness), what the resistance was and where it came from, and how you handled it — consulting employees or managers before rollout, explaining the reasoning, piloting with one team, or adjusting details based on feedback. Close with the measurable result: adoption, fewer grievances or a compliance outcome. Interviewers look for change management, not just enforcement.',
      },
      {
        type: 'technical',
        q: 'Which HR metrics do you report to leadership?',
        answer:
          'Report a small set tied to business outcomes: attrition (overall, voluntary and regretted), time-to-hire and cost-per-hire, offer-acceptance rate, early-tenure attrition (within 90 days or 1 year), engagement score, absenteeism, training hours or completion, and diversity ratios. Show trends and the actions you are taking, not just numbers. Tools like Darwinbox, Keka, SAP SuccessFactors or Workday make this reporting easier — name the ones you have used.',
      },
    ],
    tips: [
      'Prepare examples across the full HR cycle: hiring, onboarding, performance, engagement, compliance and exits',
      'Be ready for a case question on attrition, salary benchmarking or restructuring',
      'Know the HRMS tools you have used (Darwinbox, Keka, Zoho People, SuccessFactors, Workday) and quantify what you improved with them',
      "For HRBP roles, show business understanding — know the company's revenue model and talent challenges before the interview",
      'Quantify HR impact on your CV: attrition reduced, time-to-hire cut, engagement score improved',
    ],
  },
  'digital-marketing-executive': {
    slug: 'digital-marketing-executive',
    displayTitle: 'Digital Marketing Executive',
    questions: [
      {
        type: 'technical',
        q: 'What is the difference between SEO, SEM and SMM?',
        answer:
          'SEO (Search Engine Optimisation) improves organic rankings through content, technical fixes and backlinks — it is slower but compounds over time. SEM (Search Engine Marketing) usually means paid search ads, such as Google Ads, where you bid on keywords and pay per click — results are immediate but stop when spending stops. SMM (Social Media Marketing) uses platforms like Instagram, LinkedIn, Facebook and YouTube, both organically and with paid ads, to build reach and engagement. A good plan uses all three for different stages of the funnel.',
      },
      {
        type: 'technical',
        q: 'How do you calculate and improve ROAS for a Google Ads campaign?',
        answer:
          'ROAS = revenue from ads ÷ ad spend. A ROAS of 4 means ₹4 of revenue for every ₹1 spent. To improve it: tighten keyword match types and add negative keywords to stop wasted spend, improve Quality Score with relevant ads and landing pages, use conversion tracking so Smart Bidding optimises for real outcomes, test ad copy and extensions, and improve landing page conversion rate. Always compare ROAS with gross margin — a ROAS that looks good can still lose money on low-margin products.',
      },
      {
        type: 'technical',
        q: 'Which metrics would you track in Google Analytics 4 for an e-commerce website?',
        answer:
          'Track sessions and users by channel, engagement rate, conversion rate, add-to-cart rate, checkout abandonment, average order value, revenue by source/medium and campaign, and new versus returning users. Set up key events (purchases, sign-ups, add-to-cart) and use funnel exploration to see where users drop off. Use UTM parameters on every campaign link so attribution is clean, and link GA4 to Google Ads and Search Console.',
      },
      {
        type: 'technical',
        q: 'How would you do keyword research for a new blog?',
        answer:
          'Start with the audience\'s problems and seed topics. Expand them with tools such as Google Keyword Planner, Ahrefs, Semrush or Ubersuggest, plus Google\'s "People also ask" and autocomplete. Evaluate each keyword on search intent (informational, commercial, transactional), volume, difficulty and business relevance. Group keywords into topic clusters with one pillar page and supporting articles that link to each other. Prioritise long-tail keywords with clear intent first, because new sites rank for them faster.',
      },
      {
        type: 'situational',
        q: "A paid campaign's cost per lead has suddenly doubled. How do you investigate?",
        answer:
          'Check whether the cause is the ad platform or the website. In the ad account, look at changes to CPC, CTR, impressions and audience — new competitors, ad fatigue, a broken audience or a budget change. On the site, check conversion rate — a broken form, a slow landing page or a tracking error can make it look like leads dropped. Compare by date, device and location to find where the change happened, fix the cause, and annotate the change so the team learns from it.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a campaign you ran that underperformed. What did you learn?',
        answer:
          'Use STAR. Describe the goal, budget, channels and target metric, then be honest about the result. The strongest answers explain the diagnosis — wrong audience, weak creative, mismatch between ad and landing page, or unrealistic targets — and the change you made next time, with the improved result if you have it. Showing that you test, measure and iterate matters more than claiming every campaign succeeded.',
      },
    ],
    tips: [
      'Bring a portfolio: campaign screenshots, a blog you ranked, or a social account you grew — with numbers',
      'Google Ads, GA4 and HubSpot certifications are free and commonly expected for entry-level digital marketing roles in India',
      "Expect a practical task: write ad copy, plan a social calendar or audit a website's SEO",
      'Know Indian platform context — regional language content, WhatsApp marketing and YouTube Shorts are big growth channels',
      'Quantify everything on your CV: CTR, CPL, ROAS, organic traffic growth and follower growth',
    ],
  },
  'chartered-accountant': {
    slug: 'chartered-accountant',
    displayTitle: 'Chartered Accountant (CA)',
    questions: [
      {
        type: 'technical',
        q: 'Explain the main differences between Ind AS and Indian GAAP (AS).',
        answer:
          "Ind AS are converged with IFRS and apply to listed companies and companies above specified net-worth thresholds; the older Accounting Standards (Indian GAAP) apply to other entities. Key differences: Ind AS emphasises fair-value measurement and substance over form; revenue is recognised under Ind AS 115's five-step model; leases are brought on the balance sheet under Ind AS 116 (right-of-use asset and lease liability); financial instruments follow Ind AS 109 with expected-credit-loss provisioning; and Other Comprehensive Income is presented separately. First-time adoption is governed by Ind AS 101.",
      },
      {
        type: 'technical',
        q: 'How does input tax credit (ITC) work under GST, and when is it blocked?',
        answer:
          'A registered business can set off GST paid on purchases used for business against its output GST liability. To claim ITC you need a valid tax invoice, receipt of goods or services, the supplier must have filed their return and the credit must appear in GSTR-2B, and you must have paid the supplier within 180 days. Section 17(5) blocks credit on items such as motor vehicles (with exceptions), food and beverages, membership of clubs, personal consumption, and works contracts for immovable property. Reconciling purchase records with GSTR-2B every month is essential.',
      },
      {
        type: 'technical',
        q: 'What is deferred tax and why does it arise?',
        answer:
          'Deferred tax arises from temporary differences between the carrying amount of assets and liabilities in the books and their tax base. For example, if tax depreciation is faster than book depreciation, taxable profit is lower now and higher later, creating a deferred tax liability. Expenses allowed for tax only on payment (such as some provisions) create deferred tax assets. Deferred tax assets are recognised only when it is probable that future taxable profit will be available. Under Ind AS 12, the balance-sheet approach is used.',
      },
      {
        type: 'technical',
        q: 'How do you plan a statutory audit of a manufacturing company?',
        answer:
          'Understand the business, its processes and its internal controls, and set materiality. Identify significant risks — revenue recognition, inventory valuation and existence, related-party transactions and management override are common in manufacturing. Plan procedures: attend the physical inventory count, test cut-off around year-end, confirm receivables and payables, review fixed-asset additions and capitalisation, and test key controls. Cover CARO 2020 reporting requirements and document everything in line with the Standards on Auditing.',
      },
      {
        type: 'situational',
        q: 'During an audit you find revenue booked in March for goods dispatched in April. What do you do?',
        answer:
          'This is a cut-off error that overstates current-year revenue and profit. Quantify the amount and check whether it is isolated or part of a pattern, by extending cut-off testing to more transactions. Discuss it with management and ask for the entry to be corrected. If it is material and management refuses, consider the impact on your audit opinion and communicate it to those charged with governance. If it looks intentional, treat it as a fraud risk and consider the reporting requirements under the Companies Act.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a time you improved a finance process.',
        answer:
          'Use STAR with a concrete example: closing the books faster, automating bank or GST reconciliation, setting up a vendor-payment approval workflow, or building an MIS dashboard. Explain what was slow or error-prone, what you changed (Excel automation, Tally/SAP configuration, a checklist, a new control), and the measured result, such as month-end close reduced from 10 days to 5. Interviewers for industry roles want to see that you go beyond compliance.',
      },
    ],
    tips: [
      'Big 4 interviews focus on audit standards, Ind AS and articleship experience; industry roles focus more on MIS, FP&A, GST and month-end close',
      'Be ready to discuss your articleship in detail: clients, industries, areas audited and what you owned',
      'Revise recent changes in GST, TDS and the Income-tax Act — interviewers often ask about them',
      'Know your tools: Tally, SAP FICO, Zoho Books and advanced Excel (pivot tables, XLOOKUP, Power Query)',
      'State your CA attempts honestly if asked — first-attempt clearance is valued, but practical depth matters more',
    ],
  },
  'java-developer': {
    slug: 'java-developer',
    displayTitle: 'Java Developer',
    questions: [
      {
        type: 'technical',
        q: 'What is the difference between HashMap, ConcurrentHashMap and Hashtable?',
        answer:
          'HashMap is not thread-safe and allows one null key and null values. Hashtable is a legacy class that synchronises every method on the whole table, so it is thread-safe but slow, and it does not allow nulls. ConcurrentHashMap is thread-safe with much better concurrency — since Java 8 it uses CAS operations and locks only individual bins during writes, so reads are mostly lock-free. It does not allow null keys or values. Use HashMap for single-threaded code and ConcurrentHashMap for shared access.',
      },
      {
        type: 'technical',
        q: 'Explain how garbage collection works in the JVM.',
        answer:
          'The JVM automatically reclaims memory from objects that are no longer reachable from GC roots (thread stacks, static fields, JNI references). The heap is divided into generations: most objects die young, so the young generation is collected frequently and cheaply, while long-lived objects are promoted to the old generation. G1 is the default collector since Java 9, dividing the heap into regions and targeting pause-time goals. ZGC and Shenandoah offer very low pause times for large heaps. Memory leaks still happen when references are held unintentionally, for example in static collections or caches.',
      },
      {
        type: 'technical',
        q: 'What are the key features introduced in Java 8 and later versions?',
        answer:
          'Java 8 introduced lambdas, functional interfaces, the Stream API, Optional, default methods in interfaces and the java.time API. Java 11 (LTS) added the var keyword for lambda parameters, the HTTP Client and new String methods. Java 17 (LTS) brought records, sealed classes, pattern matching for instanceof and text blocks. Java 21 (LTS) added virtual threads, record patterns and pattern matching for switch. Most Indian enterprises run Java 11 or 17, with newer projects moving to 21.',
      },
      {
        type: 'technical',
        q: 'How does dependency injection work in Spring Boot?',
        answer:
          "Spring's IoC container creates and manages beans — objects annotated with @Component, @Service, @Repository or defined with @Bean — and injects their dependencies instead of classes creating them. Constructor injection is preferred because it makes dependencies explicit, supports immutability and makes testing easy. Spring Boot's auto-configuration creates sensible default beans based on the classpath and properties. Beans are singletons by default; know the other scopes (prototype, request, session) and how @Transactional works through proxies.",
      },
      {
        type: 'technical',
        q: 'How do you design a microservice to handle failures in its dependencies?',
        answer:
          'Set timeouts on every remote call, retry only idempotent operations with exponential backoff and jitter, and use a circuit breaker (Resilience4j) to stop calling a failing service and fail fast. Provide fallbacks where possible, such as cached data or a default response. Use bulkheads to isolate thread pools so one slow dependency does not exhaust all resources. For workflows across services, use asynchronous messaging and the saga pattern instead of distributed transactions. Add health checks and distributed tracing.',
      },
      {
        type: 'behavioural',
        q: 'Tell me about a difficult bug you fixed in a Java application.',
        answer:
          'Use STAR. Good examples are a memory leak found with heap dumps (Eclipse MAT, VisualVM), a deadlock found with thread dumps, a race condition, or a slow Hibernate N+1 query. Explain the symptom, your investigation steps and tools, the root cause, the fix, and how you prevented recurrence — a test, a monitoring alert or a code-review rule. Specific tools and evidence make the story credible.',
      },
    ],
    tips: [
      'Core Java (collections, multithreading, OOP, exceptions) is asked in almost every Java interview in India, even for senior roles',
      'Know Spring Boot, Spring Data JPA, Hibernate and REST API design well — they appear in most Java job descriptions',
      'Practise coding with Streams and lambdas — interviewers often ask you to rewrite loops using the Stream API',
      'For service companies (TCS, Infosys, Wipro), expect more theory; for product companies, expect DSA and low-level design',
      'Mention the Java version you work with — Java 17 or 21 experience signals a modern codebase',
    ],
  },
  'python-developer': {
    slug: 'python-developer',
    displayTitle: 'Python Developer',
    questions: [
      {
        type: 'technical',
        q: 'What is the GIL and how does it affect concurrency in Python?',
        answer:
          'The Global Interpreter Lock in CPython allows only one thread to execute Python bytecode at a time. That means threads do not speed up CPU-bound work, though they still help with I/O-bound work because the GIL is released while waiting on I/O. For CPU-bound tasks, use multiprocessing, C extensions such as NumPy that release the GIL, or a task queue. For high-concurrency I/O, asyncio is usually the most efficient. Python 3.13 introduced an experimental free-threaded build without the GIL, but it is not yet the default.',
      },
      {
        type: 'technical',
        q: 'What is the difference between a list, a tuple, a set and a dictionary?',
        answer:
          'A list is ordered and mutable, allows duplicates, and is good for sequences you modify. A tuple is ordered and immutable, so it can be used as a dictionary key and signals data that should not change. A set is unordered, mutable, holds unique elements and gives average O(1) membership tests. A dictionary maps unique, hashable keys to values with average O(1) lookups and keeps insertion order since Python 3.7. Choosing the right structure is often the biggest performance win in Python code.',
      },
      {
        type: 'technical',
        q: 'Explain decorators and give a practical example.',
        answer:
          'A decorator is a function that takes another function and returns a new function that adds behaviour around it, without changing the original code. It works because functions are first-class objects. Practical examples: logging calls, timing execution, caching results (functools.lru_cache), checking authentication in a web route, or retrying failed network calls. Use functools.wraps inside your decorator so the wrapped function keeps its name and docstring.',
      },
      {
        type: 'technical',
        q: 'Django or FastAPI — how do you choose?',
        answer:
          'Django is a batteries-included framework with an ORM, admin panel, authentication, migrations and templating — ideal for full web applications and content-heavy or admin-heavy products. FastAPI is a lightweight, async-first framework for building APIs, with automatic validation and OpenAPI docs from type hints via Pydantic — ideal for microservices, ML model serving and high-concurrency APIs. Flask sits in between as a minimal framework. Choose based on whether you need the full web stack or a fast, typed API.',
      },
      {
        type: 'technical',
        q: 'How do generators work and when should you use them?',
        answer:
          'A generator is a function that uses yield to produce values lazily, one at a time, pausing its state between calls. It uses constant memory regardless of how many items it produces, so it is ideal for reading large files line by line, streaming database results or building data pipelines. Generator expressions (x for x in items) are the inline form. The trade-off is that a generator can be iterated only once and does not support indexing.',
      },
      {
        type: 'situational',
        q: 'A Python API endpoint is slow in production. How do you find the cause?',
        answer:
          'Measure before changing code. Check APM traces or logs to see whether time is spent in the database, external calls or Python itself. For database issues, look for N+1 queries (use select_related/prefetch_related in Django) and missing indexes. For CPU time, profile with cProfile or py-spy. For external calls, add timeouts, caching or async calls. Fix the largest cost first and confirm the improvement with before-and-after metrics.',
      },
    ],
    tips: [
      'Expect live coding in Python — practise list comprehensions, dictionary manipulation and string problems',
      'Know one web framework deeply (Django, FastAPI or Flask) and be ready to explain your project architecture',
      'Python roles in India often blend in data work — basic pandas and SQL knowledge helps',
      'Know testing with pytest, virtual environments, and packaging tools such as pip, Poetry or uv',
      'Link your GitHub on your CV — clean, documented repositories help Python candidates stand out',
    ],
  },
  'ui-ux-designer': {
    slug: 'ui-ux-designer',
    displayTitle: 'UI/UX Designer',
    questions: [
      {
        type: 'technical',
        q: 'Walk me through your design process using a project from your portfolio.',
        answer:
          'Structure it as a case study: the problem and business goal, your role and constraints, the research you did (user interviews, analytics, competitor review), the key insights, how you explored solutions (sketches, user flows, wireframes), how you tested (usability tests, A/B tests), the final design, and the measured outcome. Show the decisions you rejected and why. Interviewers care more about your reasoning and impact than polished final screens.',
      },
      {
        type: 'technical',
        q: 'What is the difference between UX and UI design?',
        answer:
          'UX (user experience) design is about how a product works and feels to use — research, information architecture, user flows, interaction design and usability. UI (user interface) design is the visual layer — layout, typography, colour, components and visual consistency. UX answers "can users accomplish their goal easily?" while UI answers "is it clear, consistent and pleasant to look at?" Most roles in India expect designers to do both, with a stronger lean depending on the company.',
      },
      {
        type: 'technical',
        q: 'How do you run a usability test?',
        answer:
          'Define what you want to learn and write realistic tasks, not leading questions. Recruit 5–8 participants who match the target users — about five users usually reveal most major usability problems in a round. Use a prototype or the live product, ask participants to think aloud, and observe without helping. Record task success, time and where people struggle. Synthesise findings into prioritised issues with evidence, and test again after changes.',
      },
      {
        type: 'technical',
        q: 'How do you build and maintain a design system?',
        answer:
          'Start with an audit of existing UI to find inconsistencies. Define foundations as design tokens (colour, typography, spacing, radius, elevation), then build components with variants and states (default, hover, focus, disabled, error) in Figma using auto layout and component properties. Document usage guidelines and accessibility rules for each component. Work with developers so Figma components match code components, and set up a contribution and versioning process so the system evolves without breaking.',
      },
      {
        type: 'technical',
        q: 'How do you design for accessibility?',
        answer:
          'Follow WCAG 2.1 AA: colour contrast of at least 4.5:1 for body text and 3:1 for large text and UI elements, never use colour alone to convey meaning, make touch targets large enough (at least 44×44 points is a common guideline), design visible focus states, write clear labels and error messages, and support text resizing. Annotate headings, reading order and alt text in your handoff. In India, also consider regional languages, low-bandwidth networks and small low-cost screens.',
      },
      {
        type: 'situational',
        q: 'A product manager wants a feature that your research shows users do not need. What do you do?',
        answer:
          'Share the research evidence clearly and ask about the business goal behind the request — there may be a reason you have not seen. Look for a solution that serves both the business goal and the user, then propose a low-cost way to test the idea, such as a prototype test or a fake-door experiment, so data decides rather than opinion. If the decision still goes ahead, document the risk and agree on metrics to review after launch.',
      },
    ],
    tips: [
      'Your portfolio decides the interview — show 2–3 deep case studies with process and outcomes rather than many screenshots',
      'Expect a design challenge: a take-home task or a 60-minute whiteboard exercise to redesign a flow',
      'Figma is the standard tool in Indian product companies — know auto layout, components, variants and prototyping',
      'Be ready to explain design decisions in business terms: conversion, retention, support tickets reduced',
      'Show awareness of Indian users: vernacular language support, low-end Android devices and UPI payment flows',
    ],
  },
};
