import { roleSlugs } from '@/lib/roleData';

export interface InterviewData {
  slug: string;
  displayTitle: string;
  questions: Array<{
    q: string;
    answer: string;
    type: 'behavioural' | 'technical' | 'situational';
  }>;
  tips: string[];
}

export const interviewData: Record<string, InterviewData> = {
  'software-engineer': {
    slug: 'software-engineer',
    displayTitle: 'Software Engineer',
    questions: [
      { type: 'technical', q: 'Explain the difference between a process and a thread.', answer: 'A process is an independent program with its own memory space. A thread is a lightweight unit of execution within a process that shares the process\'s memory. Multiple threads within a process can run concurrently and share data, but context switching between threads is faster than between processes. In Java, threads are managed via the Thread class or Runnable interface; in Python, the GIL limits true CPU parallelism for threads.' },
      { type: 'technical', q: 'What is the time complexity of binary search, and when should you use it?', answer: 'Binary search is O(log n) time and O(1) space. Use it on sorted arrays or sorted data structures when you need to find an element quickly. It halves the search space on each comparison. Prefer linear search for unsorted or very small arrays where sorting overhead isn\'t worth it.' },
      { type: 'technical', q: 'How does a HashMap work internally in Java?', answer: 'A HashMap uses an array of buckets. When you call put(key, value), it computes the hash of the key, maps it to a bucket index (hash % array_size), and stores the entry. Hash collisions are handled via chaining (linked list in Java 7, balanced tree in Java 8+ when chain length > 8). Retrieval is O(1) average, O(n) worst case with poor hash distribution. Load factor (default 0.75) triggers resizing.' },
      { type: 'technical', q: 'What is the CAP theorem?', answer: 'CAP states that a distributed system can only guarantee two of three properties simultaneously: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition Tolerance (system works despite network partitions). Since partitions are unavoidable in practice, you choose between CP (consistent but may be unavailable under partition — e.g., HBase, ZooKeeper) and AP (available but eventually consistent — e.g., Cassandra, DynamoDB).' },
      { type: 'technical', q: 'Walk me through how you would design a URL shortener like bit.ly.', answer: 'Key components: (1) Hash function to generate a 6-8 character short code from the long URL — use base62 encoding of a counter or MD5 truncated; (2) Database to store short→long mapping — Redis for cache, PostgreSQL for persistence; (3) 301 vs 302 redirect — 301 is permanent (browser caches, reduces server load), 302 is temporary (better for analytics); (4) Scale with CDN, read replicas, and horizontal scaling of the redirect service. Address collisions with retry logic on hash generation.' },
      { type: 'behavioural', q: 'Tell me about a time you had a major production incident. What did you do?', answer: 'Structure your answer using STAR: Situation (describe the incident and its impact), Task (your role — were you on-call, lead, contributor?), Action (how you diagnosed — logs, metrics, distributed tracing; what you did to mitigate — rollback, feature flag, hotfix), Result (how quickly you restored service, and what post-mortem actions prevented recurrence). Recruiters want to see calmness under pressure, clear communication, and a bias toward mitigation first, root cause second.' },
      { type: 'technical', q: 'What is the difference between SQL and NoSQL databases? When would you choose each?', answer: 'SQL databases (PostgreSQL, MySQL) are relational, schema-defined, ACID-compliant, and excel at complex joins and transactions. NoSQL (MongoDB, Cassandra, Redis) are schema-flexible, horizontally scalable, and optimised for specific access patterns. Choose SQL for financial transactions, complex reporting, and structured data with relationships. Choose NoSQL for high-write-throughput, flexible/evolving schemas, time-series data, or when you need horizontal scale beyond what a single SQL instance handles.' },
      { type: 'situational', q: 'Your team is debating between two technical approaches. You strongly prefer one. How do you handle it?', answer: 'Acknowledge both approaches have merits. Present your preference with data: performance benchmarks, maintainability trade-offs, team familiarity, and long-term cost. Use an RFC (Request for Comments) document for significant decisions. If the team disagrees after full discussion, support the majority decision and commit fully — unless the disagreement is about correctness or security, in which case escalate appropriately.' },
    ],
    tips: [
      'Prepare to whiteboard: data structures, sorting algorithms, and system design are all fair game',
      'For Indian product companies (Razorpay, CRED, Swiggy), expect system design from SDE-2 level',
      'For IT services (TCS, Infosys), expect more Java/framework-specific questions',
      'Always clarify constraints before coding — interviewers want to see your thought process',
      'Practice on LeetCode with Indian company-specific question lists (available on Glassdoor India)',
    ],
  },
  'data-analyst': {
    slug: 'data-analyst',
    displayTitle: 'Data Analyst',
    questions: [
      { type: 'technical', q: 'Write a SQL query to find the second highest salary in a table.', answer: 'SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees). Alternative with DENSE_RANK: SELECT salary FROM (SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) AS rnk FROM employees) t WHERE rnk = 2. The window function approach handles ties correctly — if two employees share the highest salary, DENSE_RANK still returns a meaningful second.' },
      { type: 'technical', q: 'Explain the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN.', answer: 'INNER JOIN returns rows where the join condition matches in BOTH tables. LEFT JOIN returns ALL rows from the left table and matching rows from the right (NULLs where no match). FULL OUTER JOIN returns all rows from both tables, with NULLs where no match on either side. Most analytical queries use LEFT JOINs to preserve all records from the primary dataset while enriching with dimension data.' },
      { type: 'technical', q: 'What is the difference between a measure and a dimension in a data model?', answer: 'A dimension is a qualitative attribute used to slice/filter data — e.g., product category, geography, customer segment. A measure is a quantitative value that can be aggregated — e.g., revenue, units sold, session count. In a star schema, dimension tables surround the central fact table which contains measures and foreign keys to dimensions. This distinction drives dashboard design in Tableau and Power BI.' },
      { type: 'behavioural', q: 'Describe a time your analysis led to a business decision. What was the impact?', answer: 'Use STAR with these elements: What data you had access to, what question the business had, what analytical technique you used (cohort analysis, funnel analysis, regression, A/B test), what you found, how you communicated it (chart, dashboard, executive summary), and what decision was made. Quantify the outcome: "Led to a ₹40L cost reduction" or "Increased conversion by 12%".' },
      { type: 'technical', q: 'How would you handle missing data in a dataset?', answer: 'First understand WHY data is missing: Missing Completely at Random (MCAR), Missing at Random (MAR), or Missing Not at Random (MNAR). Options: (1) Drop rows if <5% missing and MCAR; (2) Mean/median imputation for numerical, mode for categorical; (3) Forward/backward fill for time-series; (4) Model-based imputation (KNN, MICE) for complex patterns; (5) Flag as a separate category for categorical. Never impute blindly — understand business context first.' },
      { type: 'situational', q: 'A stakeholder disputes your analysis findings. How do you respond?', answer: 'Never dismiss pushback — a stakeholder disputing data often knows something about the business context you don\'t. First, listen to their specific objection. Then: (1) Show your methodology transparently — data source, cleaning steps, aggregation logic; (2) Check if their counter-example reveals a data quality issue; (3) Run the analysis from their perspective and compare; (4) If the dispute is about interpretation not data, involve a neutral third party or senior stakeholder.' },
    ],
    tips: [
      'Expect an SQL test for almost every data analyst role — practice window functions, CTEs, and aggregations',
      'Know your Python or R basics: pandas, matplotlib, and basic statistical functions',
      'Prepare 2-3 stories about business impact from your analyses — not just the methodology',
      'For BFSI roles, expect questions on financial metrics: NPA, CAR, CASA ratio',
      'Dashboard tool questions are common: "How would you design this dashboard in Tableau/Power BI?"',
    ],
  },
  'product-manager': {
    slug: 'product-manager',
    displayTitle: 'Product Manager',
    questions: [
      { type: 'technical', q: 'How would you prioritise a backlog of 50 features with limited engineering bandwidth?', answer: 'Use a structured framework: (1) Map each feature to a business goal and quantify expected impact (revenue, retention, acquisition); (2) Estimate engineering effort in story points or weeks; (3) Calculate ICE score (Impact × Confidence ÷ Effort) or RICE (Reach × Impact × Confidence ÷ Effort); (4) Group into must-have (strategic/committed), should-have, and nice-to-have; (5) Validate top 10 with engineering and stakeholders for feasibility. Communicate rationale transparently to avoid "HiPPO" (Highest Paid Person\'s Opinion) prioritisation.' },
      { type: 'situational', q: 'Tell me about a product you think is poorly designed. How would you improve it?', answer: 'Pick a real product — preferably one your interviewer uses. Diagnose the problem with user empathy: who is the user, what are they trying to do, where does the product fail them? Propose improvements with a user story and success metric. Show that you understand constraints (business model, technical, regulatory) and that your solution is practical, not just aesthetic.' },
      { type: 'behavioural', q: 'Describe a time you had to ship a product with compromises you didn\'t agree with. What did you do?', answer: 'Interviewers want to see: you advocated for your position with data, you understood the business constraint that drove the compromise, you committed fully to the decision once made, and you tracked the impact to validate or disprove the concern. Avoid: blaming stakeholders, pretending you had no concerns, or describing a situation where you overrode the decision unilaterally.' },
      { type: 'technical', q: 'How do you measure the success of a feature after launch?', answer: 'Define success metrics BEFORE launch (not after, to avoid p-hacking). Use a metrics hierarchy: (1) North Star metric — what ultimately matters; (2) Feature-level metric — direct usage signal; (3) Guardrail metrics — things that must not degrade (latency, error rate, other feature engagement). Measure with A/B test where possible. Give it enough time to see statistically significant results. Then do a post-launch review: did the feature solve the user problem, did metrics move, what did we learn?' },
      { type: 'situational', q: 'Engineering says a feature will take 3 months. Business wants it in 4 weeks. What do you do?', answer: 'First clarify: is the 4-week deadline a genuine business constraint (contract, competitive threat, regulatory) or a preference? Then explore: what is the MVP that delivers the core value in 4 weeks? Negotiate scope — not timeline. Work with engineering to identify what can be cut. If 4 weeks is truly impossible for a safe launch, communicate clearly with data on risk, not just "engineering said no". Propose a phased release: limited rollout in 4 weeks, full feature in 3 months.' },
      { type: 'technical', q: 'What is your approach to user research when you have no time or budget?', answer: 'You always have some option: (1) 5 user interviews — 5 well-selected users reveal 80% of usability issues; (2) Analyse existing data — support tickets, NPS verbatims, session recordings (Hotjar/FullStory), search queries; (3) Competitive analysis — what have others validated so you don\'t repeat their experiments; (4) Smoke tests — put up a landing page for an unbuilt feature and measure click-through; (5) Dog-fooding — use the product yourself in the user context. The question tests whether you give up or improvise.' },
    ],
    tips: [
      'Prepare a structured answer for "design a product for X" using Jobs-to-be-Done and user persona frameworks',
      'Know basic SQL — PMs at Indian product companies (Zomato, CRED, Razorpay) are expected to query data themselves',
      'Study the company\'s product deeply before the interview — use it, read their engineering blog, understand their business model',
      'For APM (Associate PM) roles, leadership potential matters as much as product knowledge',
      'Metric-setting questions are almost universal — practice setting North Star + supporting metrics for common product types',
    ],
  },
};

// Generate stub data for roles without full interview questions
function generateStubInterviewData(slug: string, displayTitle: string): InterviewData {
  return {
    slug,
    displayTitle,
    questions: [
      { type: 'behavioural', q: `Tell me about yourself and why you want this ${displayTitle} role.`, answer: 'Structure your answer in 3 parts: (1) Your current role and key achievements in 2 sentences; (2) What you have done that is specifically relevant to this role — pick 1-2 achievements with metrics; (3) Why this company and role excites you specifically — do your research and be genuine. Keep it under 2 minutes. End with a forward-looking statement that invites the conversation.' },
      { type: 'behavioural', q: 'What is your greatest professional achievement in the last 2 years?', answer: 'Pick an achievement that is: quantified, relevant to the role, and something you owned significantly (not just participated in). Use STAR format — be specific about your contribution vs the team\'s. If you led a team achievement, describe your specific leadership actions. Prepare to go deep — interviewers will ask follow-up questions.' },
      { type: 'situational', q: 'Describe a time you dealt with a difficult stakeholder or colleague. What did you do?', answer: 'Pick a real situation — interviewers detect fabricated stories quickly. Show that you: (1) Sought to understand their perspective before reacting; (2) Used data or structured reasoning to address disagreements; (3) Escalated appropriately when needed; (4) Maintained the professional relationship. Avoid making the other person sound completely unreasonable — that signals low emotional intelligence.' },
      { type: 'behavioural', q: 'Where do you see yourself in 3 years?', answer: 'Show ambition without being unrealistic. Align your answer with the growth trajectory this role offers. Research the company\'s career ladder and articulate how this role fits. Avoid generic answers like "I want to be a manager" — be specific about the skills, impact, and scope you want to develop. Companies want people who will stay and grow, not use the role as a 6-month stepping stone.' },
      { type: 'situational', q: 'How do you handle situations when you have multiple deadlines competing at the same time?', answer: 'Show a system: (1) List everything out to get clarity; (2) Identify true deadlines vs flexible ones by checking with stakeholders; (3) Prioritise by impact and dependency; (4) Communicate proactively if something will be delayed — never go silent; (5) Ask for help early, not at the last minute. Demonstrate that you own your workload management rather than being reactive.' },
      { type: 'behavioural', q: `Why are you leaving your current role, and why does a ${displayTitle} role at this company appeal to you?`, answer: 'Be honest but professional about why you are leaving — growth ceiling, scope limitation, relocation, or company instability are all valid. Never speak negatively about your current employer. Pair your "leaving" reason with a "joining" reason: what specific aspects of this company, team, or role draw you. Research matters here — generic answers like "I want new challenges" signal low engagement.' },
    ],
    tips: [
      `Research the company's ${displayTitle.toLowerCase()} team structure and recent product/business news before your interview`,
      'Prepare 3-4 STAR stories covering: a success, a failure/learning, stakeholder management, and working under pressure',
      'Have intelligent questions ready — asking about team culture, success metrics for the role, and growth paths signals seriousness',
      'For Indian companies, salary negotiation typically happens after offer — research market rates on Glassdoor and LinkedIn Salary',
      'Follow up with a thank-you note within 24 hours — rare in India but consistently impresses hiring managers',
    ],
  };
}

export const interviewMap: Record<string, InterviewData> = {};

// Import roleSlugs is done at module level via the export above
// We build this at module-init time using the roleSlugs list
for (const slug of roleSlugs) {
  const displayTitle = slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

  interviewMap[slug] =
    interviewData[slug] ?? generateStubInterviewData(slug, displayTitle);
}
