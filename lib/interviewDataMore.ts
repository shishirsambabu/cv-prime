import type { InterviewData } from '@/lib/interviewData';

// Role-specific interview Q&A for high-search-volume roles that previously
// fell back to a generic stub shared by ~40 pages (duplicate content).
export const interviewDataMore: Record<string, InterviewData> = {
  'python-developer': {
    slug: 'python-developer',
    displayTitle: 'Python Developer',
    questions: [
      { type: 'technical', q: 'What is the Global Interpreter Lock (GIL) and how does it affect multithreading in Python?', answer: 'The GIL is a mutex in CPython that lets only one thread execute Python bytecode at a time. CPU-bound threads therefore do not run in parallel, while I/O-bound threads still benefit because the lock is released during blocking I/O. For CPU-bound work use multiprocessing, native extensions (NumPy), or a process pool; for I/O-bound work use threading or asyncio.' },
      { type: 'technical', q: 'Explain the difference between a list, tuple, set and dict, and when you would use each.', answer: 'A list is an ordered, mutable sequence. A tuple is ordered and immutable, so it is hashable if its items are and suits fixed records. A set is an unordered collection of unique hashable items with O(1) average membership tests. A dict maps hashable keys to values with O(1) average lookup and preserves insertion order since Python 3.7.' },
      { type: 'technical', q: 'What are decorators and generators? Give a practical use for each.', answer: 'A decorator is a callable that wraps another function to add behaviour without changing its code, for example @functools.lru_cache, request logging, or auth checks in Flask/FastAPI. A generator uses yield to produce values lazily, keeping memory flat when you stream a large CSV or paginated API instead of loading everything into a list.' },
      { type: 'technical', q: 'How do you manage dependencies and virtual environments in a production Python project?', answer: 'Isolate each project in a virtual environment (venv, Poetry or uv), pin exact versions in a lock file (poetry.lock or requirements.txt with hashes), and build the same lock into the Docker image so dev, CI and production match. Add pip-audit or Dependabot for vulnerability scanning and avoid installing into the system Python.' },
      { type: 'situational', q: 'An API endpoint you wrote is slow under load. How do you find and fix the bottleneck?', answer: 'Measure first: add tracing or use cProfile/py-spy to see whether time is in the database, external calls or Python code. Typical fixes are adding indexes or removing N+1 queries (select_related/joinedload), caching with Redis, moving slow work to a Celery queue, using async I/O for outbound calls, and adding pagination. Re-run a load test (Locust or k6) to confirm the improvement.' },
    ],
    tips: [
      'Be ready to live-code with lists, dicts and string manipulation - Indian service-company rounds still start with these',
      'Know one web framework well (Django, Flask or FastAPI) including ORM, auth and middleware',
      'Product companies ask about concurrency (GIL, asyncio) and testing with pytest; mention fixtures and mocking',
      'Bring one project with measurable results, such as latency cut or records processed per minute',
    ],
  },
  'java-developer': {
    slug: 'java-developer',
    displayTitle: 'Java Developer',
    questions: [
      { type: 'technical', q: 'Explain how HashMap works internally and how it differs from ConcurrentHashMap.', answer: 'HashMap stores entries in an array of buckets chosen by hash(key); collisions form a linked list that converts to a red-black tree when a bucket exceeds 8 entries (Java 8+). It is not thread-safe. ConcurrentHashMap allows concurrent reads and fine-grained locking or CAS on writes, and disallows null keys and values.' },
      { type: 'technical', q: 'What is the difference between an abstract class and an interface in modern Java?', answer: 'An abstract class can hold state, constructors and partial implementations, and a class can extend only one. An interface defines a contract, supports default and static methods since Java 8, and a class can implement many. Use an interface for capabilities and an abstract class when subclasses share state or base behaviour.' },
      { type: 'technical', q: 'How does Spring Boot dependency injection work, and what are the bean scopes?', answer: 'Spring creates and wires beans from the ApplicationContext, injecting dependencies through constructors (preferred), setters or fields, using annotations such as @Component, @Service and @Autowired. Default scope is singleton; others are prototype, request, session and application. Constructor injection keeps beans immutable and easy to unit test.' },
      { type: 'technical', q: 'Explain Java memory management and garbage collection.', answer: 'The heap is split into young (Eden and survivor spaces) and old generations; metaspace holds class metadata. New objects start in Eden and are promoted if they survive minor GCs. Collectors include G1 (default since Java 9), ZGC and Shenandoah for low pause times. Tune with -Xms/-Xmx and diagnose leaks with heap dumps and tools like VisualVM or Eclipse MAT.' },
      { type: 'situational', q: 'Production shows OutOfMemoryError every few days. What is your approach?', answer: 'Enable -XX:+HeapDumpOnOutOfMemoryError, capture the dump and analyse dominator trees in MAT to find the retaining objects, commonly unbounded caches, static collections or unclosed resources. Fix the leak, add bounds and eviction, set sensible heap limits, and add GC and heap metrics to your dashboards so regressions alert early.' },
    ],
    tips: [
      'Collections, multithreading, Java 8 streams and Spring Boot cover most rounds for 2-6 years of experience',
      'Service companies (TCS, Infosys, Cognizant) ask many OOP and core Java questions; product firms add system design',
      'Know the JVM basics and be able to read a thread dump',
      'Mention Spring Boot with microservices, Kafka or JPA in your projects if you used them',
    ],
  },
  'frontend-developer': {
    slug: 'frontend-developer',
    displayTitle: 'Frontend Developer',
    questions: [
      { type: 'technical', q: 'Explain the JavaScript event loop, microtasks and macrotasks.', answer: 'JavaScript runs on a single thread with a call stack. Async callbacks wait in queues: after the stack empties the loop drains all microtasks (Promise.then, queueMicrotask) before taking the next macrotask (setTimeout, I/O, UI events). That is why a resolved promise callback runs before a setTimeout of 0.' },
      { type: 'technical', q: 'How does React rendering work and how do you prevent unnecessary re-renders?', answer: 'A state or prop change makes React re-run the component and diff the new virtual tree against the old one before committing DOM updates. Reduce wasted work by colocating state, using React.memo, useMemo and useCallback where profiling shows a benefit, stable keys in lists, and splitting large contexts. Always confirm with the React Profiler first.' },
      { type: 'technical', q: 'What are Core Web Vitals and how would you improve LCP and CLS?', answer: 'Core Web Vitals are LCP (loading, target under 2.5s), INP (responsiveness, under 200ms) and CLS (visual stability, under 0.1). Improve LCP by optimising the hero image (modern formats, correct sizing, priority hints), cutting render-blocking CSS and JS, and using a CDN. Improve CLS by reserving width and height for images, ads and embeds and avoiding late-injected content above the fold.' },
      { type: 'technical', q: 'How do you make a web page accessible?', answer: 'Use semantic HTML, label every form control, ensure keyboard focus order and visible focus states, keep colour contrast at WCAG AA (4.5:1 for body text), provide alt text, and use ARIA only when native elements cannot do the job. Test with a screen reader, axe or Lighthouse, and keyboard-only navigation.' },
      { type: 'situational', q: 'Design a reusable search-as-you-type component. What do you consider?', answer: 'Debounce input, cancel stale requests with AbortController so older responses never overwrite newer ones, handle loading, empty and error states, support keyboard navigation and ARIA combobox roles, cache recent queries, and highlight matches. Keep the component presentational and inject the data-fetching function so it is easy to test.' },
    ],
    tips: [
      'Expect a machine-coding round: build a small UI (todo, autocomplete, star rating) in 60-90 minutes',
      'Know vanilla JS deeply - closures, this, promises - not just a framework',
      'Product companies ask about performance, accessibility and browser rendering',
      'Keep a live portfolio or GitHub link with real deployed projects',
    ],
  },
  'backend-developer': {
    slug: 'backend-developer',
    displayTitle: 'Backend Developer',
    questions: [
      { type: 'technical', q: 'How do you design a REST API that is versioned, paginated and idempotent?', answer: 'Use resource-oriented URLs, proper verbs and status codes, version via path or header (/v1), paginate with cursors for large or changing datasets, and make PUT and DELETE idempotent. For POST that creates payments or orders accept an Idempotency-Key header and store the result so retries do not duplicate work.' },
      { type: 'technical', q: 'What are database indexes and when can they hurt performance?', answer: 'An index (usually a B-tree) lets the database find rows without scanning the table. Indexes speed up reads on filtered, joined and sorted columns but slow writes and consume storage because every insert and update maintains them. Avoid indexing low-cardinality columns and verify usage with EXPLAIN ANALYZE.' },
      { type: 'technical', q: 'Explain caching strategies and cache invalidation.', answer: 'Common patterns are cache-aside (app reads cache, falls back to the DB and populates it), write-through and write-behind. Set TTLs, invalidate or update on writes, and guard against stampedes with request coalescing or jittered expiry. State clearly which data may be stale and for how long.' },
      { type: 'technical', q: 'What is the difference between optimistic and pessimistic locking?', answer: 'Pessimistic locking takes a lock (SELECT ... FOR UPDATE) so others wait, which is safe under high contention but reduces throughput. Optimistic locking uses a version column and fails the update if the version changed, which suits low-contention workloads and requires a retry path.' },
      { type: 'situational', q: 'A downstream service is intermittently failing and dragging your API down. What do you do?', answer: 'Set tight timeouts, retry only idempotent calls with exponential backoff and jitter, add a circuit breaker so failures fail fast, serve a fallback or cached response where acceptable, and isolate with bulkheads or queues. Add metrics and alerts on error rate and latency percentiles.' },
    ],
    tips: [
      'Be ready for SQL queries, indexing and transactions - nearly every backend round includes them',
      'Practise a basic system design: URL shortener, rate limiter, notification service',
      'Know authentication: sessions vs JWT, OAuth 2.0 flow, password hashing with bcrypt or argon2',
      'Quote numbers from your projects: requests per second, p95 latency, records handled',
    ],
  },
  'full-stack-developer': {
    slug: 'full-stack-developer',
    displayTitle: 'Full Stack Developer',
    questions: [
      { type: 'technical', q: 'Walk me through what happens from typing a URL to seeing a rendered page.', answer: 'DNS resolves the domain, the browser opens a TCP connection and TLS handshake, sends an HTTP request (possibly through a CDN), the server responds with HTML, the browser parses it, fetches CSS, JS and images, builds the DOM and CSSOM, runs layout and paint, and executes JavaScript which may hydrate or fetch more data.' },
      { type: 'technical', q: 'How do you secure a web application against XSS, CSRF and SQL injection?', answer: 'For XSS escape output, use a strict Content-Security-Policy and avoid dangerouslySetInnerHTML. For CSRF use SameSite cookies and anti-CSRF tokens on state-changing requests. For SQL injection always use parameterised queries or an ORM. Add input validation (for example zod), HTTPS, and least-privilege database users.' },
      { type: 'technical', q: 'When would you choose server-side rendering over client-side rendering?', answer: 'Choose SSR or static generation when SEO, first-load speed or social previews matter, such as marketing pages and product listings. Choose client rendering for highly interactive, authenticated dashboards. Frameworks like Next.js let you mix both per route.' },
      { type: 'technical', q: 'How would you design the data model and API for a job-application tracker?', answer: 'Tables for users, jobs, applications and status history; applications reference user and job with a status enum and timestamps. Index on user_id and status. Expose REST or GraphQL endpoints with pagination, row-level authorisation so users only access their rows, and an audit trail for status changes.' },
      { type: 'situational', q: 'You are blocked because the backend API is not ready. How do you keep the frontend moving?', answer: 'Agree an API contract first (OpenAPI), then mock it with MSW or a stub server, build against the contract, and write contract tests so the swap to the real API is low risk. Keep the backend owner informed and flag contract changes early.' },
    ],
    tips: [
      'Be strong in one side and competent in the other - interviewers probe your depth in your primary stack',
      'Have 2 deployed full-stack projects with a live URL, auth and a database',
      'Know Git workflows, Docker basics and one CI/CD pipeline',
      'Expect a take-home or machine-coding task at startups; focus on clean structure and tests',
    ],
  },
  'devops-engineer': {
    slug: 'devops-engineer',
    displayTitle: 'DevOps Engineer',
    questions: [
      { type: 'technical', q: 'Describe a CI/CD pipeline you would build for a containerised microservice.', answer: 'On every pull request run lint, unit tests and security scans; on merge build a versioned Docker image, push to a registry, deploy to staging with automated smoke tests, then promote to production with a rolling or canary strategy and automatic rollback on failed health checks. Tools: GitHub Actions or Jenkins, Argo CD for GitOps, Trivy for image scanning.' },
      { type: 'technical', q: 'Explain how Kubernetes handles a pod crash and a node failure.', answer: 'A Deployment and ReplicaSet keep the desired replica count, so a crashed pod is recreated and restarted per its restart policy. If a node fails, the control plane marks it NotReady and reschedules its pods onto healthy nodes. Readiness and liveness probes and PodDisruptionBudgets keep traffic away from unhealthy pods and limit simultaneous disruption.' },
      { type: 'technical', q: 'What is Infrastructure as Code and how do you manage Terraform state safely?', answer: 'IaC defines infrastructure in versioned code so environments are reproducible and reviewable. Store Terraform state in a remote backend (S3 with DynamoDB locking, or Terraform Cloud), encrypt it, restrict access, split state per environment or component, and run plan in CI with approval before apply.' },
      { type: 'technical', q: 'How do you monitor a production system, and what is the difference between metrics, logs and traces?', answer: 'Metrics are numeric time series (CPU, request rate, error rate) for alerting; logs are detailed event records for debugging; traces follow a request across services to find latency. Use Prometheus and Grafana, a log stack (ELK or Loki) and OpenTelemetry. Alert on SLO symptoms such as error rate and latency, not only CPU.' },
      { type: 'situational', q: 'A deployment at peak hours causes errors. What do you do in the first 15 minutes?', answer: 'Stop the bleeding first: roll back or shift traffic to the previous version, then communicate in the incident channel. After service is stable, collect logs and metrics, identify the root cause, and write a blameless post-mortem with action items such as canary releases, better tests or feature flags.' },
    ],
    tips: [
      'Know Linux troubleshooting commands cold: top, netstat/ss, journalctl, df, strace',
      'Get hands-on with Docker, Kubernetes, Terraform and one cloud (AWS is most asked in India)',
      'Prepare an incident story with timeline, root cause and prevention',
      'Certifications such as CKA or AWS Solutions Architect Associate help shortlisting at Indian service and product firms',
    ],
  },
  'data-scientist': {
    slug: 'data-scientist',
    displayTitle: 'Data Scientist',
    questions: [
      { type: 'technical', q: 'Explain the bias-variance tradeoff and how you diagnose it.', answer: 'High bias means the model is too simple and underfits; high variance means it is too flexible and overfits. Compare training and validation error: both high suggests bias, a large gap suggests variance. Fix bias with more features or a richer model; fix variance with regularisation, more data, simpler models or ensembling.' },
      { type: 'technical', q: 'How do you handle class imbalance in a fraud-detection dataset?', answer: 'Use appropriate metrics (precision-recall AUC, F1, recall at fixed precision, not accuracy), stratified splits, class weights or resampling (SMOTE with care, only inside training folds), threshold tuning, and anomaly detection when labels are scarce. Evaluate the business cost of false positives versus false negatives.' },
      { type: 'technical', q: 'What is the difference between L1 and L2 regularisation?', answer: 'L1 (Lasso) adds the sum of absolute weights and drives some coefficients to exactly zero, which gives feature selection. L2 (Ridge) adds the sum of squared weights and shrinks coefficients smoothly without eliminating them, which helps with multicollinearity. Elastic Net combines both.' },
      { type: 'technical', q: 'How would you design and analyse an A/B test for a new feature?', answer: 'Define one primary metric and guardrail metrics, randomise at the right unit, compute sample size from baseline rate, minimum detectable effect, power (80%) and alpha (5%), run for full weekly cycles, and avoid peeking. Analyse with a suitable test and report confidence intervals and practical significance, not only p-values.' },
      { type: 'situational', q: 'Your model has 94% accuracy in testing but performs poorly in production. What do you check?', answer: 'Look for data leakage, train-serving skew in feature computation, distribution drift between training and live data, label delay, and an unrepresentative test split. Add monitoring for input and prediction drift and retrain on a schedule or trigger.' },
    ],
    tips: [
      'Brush up statistics: hypothesis testing, confidence intervals, probability - they appear in most rounds',
      'Expect SQL plus a Python/pandas exercise; practise window functions',
      'Explain models in business terms: what decision does this change and by how much?',
      'Bring a project with a real metric improvement and how you validated it',
    ],
  },
  'machine-learning-engineer': {
    slug: 'machine-learning-engineer',
    displayTitle: 'Machine Learning Engineer',
    questions: [
      { type: 'technical', q: 'How do you take a model from a notebook to production?', answer: 'Refactor into tested modules, version data and models (DVC, MLflow), package in a container, serve through a REST or gRPC service or batch job, add CI/CD, monitor latency, errors and data drift, and set up retraining. Make feature computation identical in training and serving to avoid skew.' },
      { type: 'technical', q: 'Explain gradient descent and how learning rate and batch size affect training.', answer: 'Gradient descent updates parameters in the direction that reduces loss. A learning rate that is too high diverges and too low trains slowly; schedules and optimisers like Adam help. Small batches add noise that can aid generalisation but are slower per epoch; large batches are stable and fast on GPUs but may need learning-rate scaling.' },
      { type: 'technical', q: 'What techniques reduce overfitting in a neural network?', answer: 'Get more or augmented data, add dropout and weight decay, use early stopping on a validation set, simplify the architecture, apply batch normalisation, and use transfer learning from a pretrained model.' },
      { type: 'technical', q: 'How would you reduce inference latency and cost of a model serving 500 requests per second?', answer: 'Quantise or distil the model, export to ONNX or TensorRT, batch requests dynamically, cache frequent predictions, choose the right hardware, autoscale on queue depth, and profile to find whether preprocessing or the model dominates.' },
      { type: 'situational', q: 'Product wants an LLM feature next sprint, but evaluation data does not exist. What do you do?', answer: 'Build a small gold dataset of 50-200 real examples with the product team, define pass/fail criteria, set up an automated eval harness (including LLM-as-judge with spot checks), compare prompt and retrieval variants, and ship behind a flag with logging so real usage grows the eval set.' },
    ],
    tips: [
      'Know ML fundamentals and one deep-learning framework (PyTorch most asked) well enough to code a training loop',
      'MLOps matters: be ready to discuss experiment tracking, model registry and monitoring',
      'For GenAI roles, prepare RAG, evaluation and hallucination mitigation answers',
      'Show end-to-end ownership: data, training, deployment and measured impact',
    ],
  },
  'qa-engineer': {
    slug: 'qa-engineer',
    displayTitle: 'QA Engineer',
    questions: [
      { type: 'technical', q: 'What is the difference between smoke, sanity, regression and exploratory testing?', answer: 'Smoke testing is a quick check that critical functions work in a new build. Sanity testing verifies a specific fix or change. Regression testing re-runs existing tests to confirm nothing else broke. Exploratory testing is unscripted investigation guided by tester experience to find unexpected issues.' },
      { type: 'technical', q: 'How do you decide what to automate and what to leave manual?', answer: 'Automate stable, repetitive, high-value and data-driven tests such as regression, smoke and API checks. Keep manual testing for usability, exploratory work and flows that change frequently. Follow the test pyramid: many unit and API tests, fewer UI tests, and track flakiness and maintenance cost.' },
      { type: 'technical', q: 'Write test cases for a login page.', answer: 'Cover valid login, wrong password, unregistered email, empty fields, password masking, lockout after repeated failures, SQL injection and XSS inputs, session expiry, remember me, forgot-password flow, keyboard navigation, accessibility, different browsers and devices, and response time under load.' },
      { type: 'technical', q: 'How do you test REST APIs?', answer: 'Verify status codes, response schema, headers and data correctness for valid and invalid inputs, check auth and authorisation, boundary values, idempotency and error handling. Use Postman or REST Assured, automate in CI, and add contract tests and basic performance checks.' },
      { type: 'situational', q: 'A developer rejects your bug as "not reproducible". What do you do?', answer: 'Share exact steps, environment, build version, test data, logs, screenshots or a screen recording, and try to reproduce together. If it is intermittent, capture conditions and frequency and add logging. Stay factual and collaborative rather than adversarial.' },
    ],
    tips: [
      'Prepare a bug you found that mattered: severity, root cause and how you prevented recurrence',
      'Know Selenium or Playwright plus one language (Java or Python) for automation roles',
      'Understand SDLC, STLC, Agile ceremonies and bug life cycle thoroughly',
      'Learn basic SQL and API testing - both are asked even for manual roles',
    ],
  },
  'digital-marketing-executive': {
    slug: 'digital-marketing-executive',
    displayTitle: 'Digital Marketing Executive',
    questions: [
      { type: 'technical', q: 'How would you plan a digital campaign with a budget of Rs 1 lakh to generate leads?', answer: 'Define the goal and target CPL, segment the audience, split budget across channels by intent (for example 50% Google Search, 30% Meta lead ads, 10% retargeting, 10% testing), build landing pages with a single CTA, set up conversion tracking, run creative and audience A/B tests, and optimise weekly on CPL and lead quality rather than clicks.' },
      { type: 'technical', q: 'Explain the difference between CPC, CPM, CTR, CPL and ROAS.', answer: 'CPC is cost per click; CPM is cost per thousand impressions; CTR is clicks divided by impressions; CPL is cost per lead; ROAS is revenue divided by ad spend. Choose the metric closest to the business goal - awareness campaigns track CPM and reach, performance campaigns track CPL and ROAS.' },
      { type: 'technical', q: 'What are the key on-page and off-page SEO factors?', answer: 'On-page: keyword-intent match, title and meta tags, header structure, content depth, internal links, page speed, mobile usability and schema. Off-page: quality backlinks, brand mentions and digital PR. Technical SEO covers crawlability, indexation, sitemaps and canonicals.' },
      { type: 'technical', q: 'A campaign has a high CTR but few conversions. What do you check?', answer: 'Check message match between ad and landing page, page speed, form friction, audience quality and traffic source, tracking accuracy, and offer clarity. Review GA4 funnel drop-offs and heatmaps, then test headline, CTA and form length.' },
      { type: 'situational', q: 'Your cost per lead doubled this week. How do you respond?', answer: 'Compare against the previous period by campaign, ad set, creative and device, look for ad fatigue, bid or audience changes, seasonality and tracking issues. Pause underperformers, refresh creatives, tighten targeting, and communicate findings and the fix plan to your manager.' },
    ],
    tips: [
      'Get Google Ads and GA4 certifications - they are free and widely recognised',
      'Bring numbers: leads, CPL, ROAS, organic traffic growth from campaigns you ran',
      'Be ready for a practical task such as writing ad copy or auditing a landing page',
      'Know basic Excel/Sheets reporting and one email or marketing automation tool',
    ],
  },
  'hr-manager': {
    slug: 'hr-manager',
    displayTitle: 'HR Manager',
    questions: [
      { type: 'technical', q: 'What are the key labour laws an HR manager in India must be familiar with?', answer: 'Core areas include the four Labour Codes (Wages, Industrial Relations, Social Security, Occupational Safety), Payment of Gratuity, EPF and ESI provisions, Maternity Benefit Act, POSH Act 2013 and state Shops and Establishments Acts. Confirm current applicability and state rules with legal counsel before acting.' },
      { type: 'technical', q: 'How do you reduce attrition in a team with 25% annual turnover?', answer: 'Diagnose first with exit interviews, stay interviews and cohort analysis (tenure, manager, role). Then act on the root causes: pay benchmarking, manager capability, career paths, onboarding quality and workload. Set a target, track regretted attrition and eNPS, and review quarterly.' },
      { type: 'technical', q: 'Walk through your end-to-end recruitment process and key metrics.', answer: 'Workforce plan and job scorecard, sourcing, screening, structured interviews, assessment, reference and background check, offer and onboarding. Track time-to-fill, offer acceptance rate, quality of hire, source effectiveness and cost per hire.' },
      { type: 'behavioural', q: 'Describe a time you handled a sensitive employee grievance.', answer: 'Use STAR. Show confidentiality, listening without prejudgement, following the documented policy and due process, gathering facts from all sides, a fair and timely resolution, and follow-up to prevent retaliation and recurrence.' },
      { type: 'situational', q: 'The business wants to terminate a low performer immediately. What do you do?', answer: 'Review documentation of performance expectations, feedback and any improvement plan, check legal and contractual requirements, offer a performance improvement plan where appropriate, and ensure the process is fair, consistent and documented before any exit.' },
    ],
    tips: [
      'Know labour-law basics and be careful to say you would verify the latest rules with legal',
      'Quantify HR impact: attrition reduced, time-to-fill improved, engagement score change',
      'Be ready with a performance management and compensation structure framework',
      'Show business partnering - explain HR decisions in terms of business outcomes',
    ],
  },
  'project-manager': {
    slug: 'project-manager',
    displayTitle: 'Project Manager',
    questions: [
      { type: 'technical', q: 'Explain the difference between Agile and Waterfall and when you would choose each.', answer: 'Waterfall runs sequential phases and suits fixed scope, regulated or hardware-dependent work. Agile delivers in short iterations with continuous feedback and suits evolving requirements. Many teams use a hybrid: fixed milestones with agile delivery inside them.' },
      { type: 'technical', q: 'How do you create and manage a project plan, scope and schedule?', answer: 'Define scope and deliverables with stakeholders, break work into a WBS, estimate with the team, identify dependencies and the critical path, assign owners, baseline the schedule and budget, and track with earned value or burn-up charts. Control change through a formal change-request process.' },
      { type: 'technical', q: 'How do you identify and manage project risks?', answer: 'Run a risk workshop early, record each risk with probability, impact, owner and response (avoid, mitigate, transfer, accept), review the register weekly, and keep contingency in schedule and budget. Escalate risks that exceed your authority quickly.' },
      { type: 'behavioural', q: 'Tell me about a project that was running late. What did you do?', answer: 'Use STAR. Explain how you detected the slip, analysed causes, evaluated options (reduce scope, add resources, re-sequence, extend), negotiated with the sponsor with data, and what changed afterwards to prevent repeats.' },
      { type: 'situational', q: 'A stakeholder keeps adding requirements mid-sprint. How do you handle it?', answer: 'Acknowledge the need, assess impact on scope, time and cost, route it through change control or the backlog with prioritisation, and let the stakeholder decide what to trade off. Agree a clear intake cadence so urgent changes are rare.' },
    ],
    tips: [
      'PMP, PRINCE2 or CSM certifications help in Indian IT services and consulting shortlists',
      'Prepare numbers: budget size, team size, on-time delivery rate and stakeholders managed',
      'Have a story for conflict, a failed project and a difficult client',
      'Know Jira, MS Project or similar tools and be able to explain a status report you produced',
    ],
  },
};
