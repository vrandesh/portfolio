// All the words on the site live in this file. Edit here, rebuild, done.

export const profile = {
  name: 'Vrandesh Bandikatti',
  role: 'Forward deployed engineer',
  focus: 'Applied AI, full stack and cloud',
  location: 'Melbourne, Australia',
  statement: 'I take AI the last mile into production.',
  intro:
    'Forward deployed in practice for the past four years, without the title. I sit with finance, wealth and advisory teams to find where the manual effort really is, then design, build, evaluate and support the system that removes it. The model is rarely the hard part. The integration, the evaluation and the governance are.',
  current: 'Senior full stack developer and technical lead at Findex. Founder of Audarya Consulting.',
  // Set to '' to hide the availability line in the hero.
  availability: 'From 15 October 2026',
  email: 'vrandesh@gmail.com',
  siteUrl: 'https://www.vrandeshbandikatti.com',
  photo: '/images/vrandesh-bandikatti.webp',
  photoFallback: '/images/vrandesh-bandikatti.jpg',
};

export const links = {
  github: 'https://github.com/vrandesh',
  linkedin: 'https://www.linkedin.com/in/vrandesh',
  source: 'https://github.com/vrandesh/portfolio',
};

/* ------------------------------------------------------------------ */
/* Documents people can download                                       */
/* ------------------------------------------------------------------ */

export type SiteDocument = {
  id: string;
  title: string;
  note: string;
  file: string; // path under /public
  pages: number;
  primary?: boolean;
  // false keeps the file off the site and offers it by email instead.
  published: boolean;
};

export const documents: SiteDocument[] = [
  {
    id: 'cv',
    title: 'CV, technical lead',
    note: 'The current one. Architecture, hands-on delivery and team leadership on two pages.',
    file: '/documents/Vrandesh-Bandikatti-CV-Technical-Lead.pdf',
    pages: 2,
    primary: true,
    published: true,
  },
  {
    id: 'cv-ai',
    title: 'CV, AI engineering',
    note: 'Agentic systems, retrieval, evaluation and guardrails.',
    file: '/documents/Vrandesh-Bandikatti-CV-AI-Engineer.pdf',
    pages: 4,
    published: true,
  },
  {
    // The PDF sits in /private until its screenshots are cleared for public release.
    // To publish: copy it to /public/documents and set published to true.
    id: 'portfolio',
    title: 'Work portfolio, 2009 to 2026',
    note: 'Ten case studies with screenshots, each with the problem, the approach and the outcome.',
    file: '/documents/Vrandesh-Bandikatti-Work-Portfolio-2009-2026.pdf',
    pages: 27,
    published: false,
  },
  {
    id: 'cv-full-stack',
    title: 'CV, full stack engineering',
    note: 'TypeScript, Node.js, React and Python, with the platform detail behind each role.',
    file: '/documents/Vrandesh-Bandikatti-CV-Full-Stack-Engineer.pdf',
    pages: 3,
    published: true,
  },
  {
    id: 'cv-data',
    title: 'CV, data and platform engineering',
    note: 'Microsoft Fabric, Azure, Databricks, Python and SQL.',
    file: '/documents/Vrandesh-Bandikatti-CV-Data-Platform-Engineer.pdf',
    pages: 3,
    published: true,
  },
];

export const cv = documents.find((d) => d.id === 'cv')!;
export const portfolio = documents.find((d) => d.id === 'portfolio')!;

/* ------------------------------------------------------------------ */
/* Career, shown as a line across the hero                             */
/* ------------------------------------------------------------------ */

export type CareerStep = {
  year: string;
  what: string;
  where: string;
  ongoing?: boolean; // still doing it
  latest?: boolean; // the open end of the line
};

export const career: CareerStep[] = [
  { year: '2009', what: 'Infrastructure operations', where: 'Hewlett-Packard / Mphasis' },
  { year: '2011', what: 'Web development', where: 'UNI Media Group' },
  { year: '2013', what: 'Technology lead', where: 'Apptarix Mobility' },
  { year: '2017', what: 'Payments engineering', where: 'Quest Payment Systems' },
  { year: '2022', what: 'Applied AI and data platforms', where: 'Findex', ongoing: true },
  { year: '2026', what: 'AI consultancy founded', where: 'Audarya Consulting', ongoing: true, latest: true },
];

/* ------------------------------------------------------------------ */
/* How an engagement runs                                              */
/* ------------------------------------------------------------------ */

export const approach = [
  {
    title: 'Sit with the people who own the problem',
    text: "Executives, operational leaders and domain specialists. The rules that matter often live only in spreadsheets and in people's heads.",
  },
  {
    title: 'Make the rules testable',
    text: 'Turn conflicting interpretations into precise rules that everyone can check, before any architecture is drawn.',
  },
  {
    title: 'Prototype the risky part first',
    text: 'Working software over speculative documents. Test the hard integration or assumption, then let the evidence shape the plan.',
  },
  {
    title: 'Draw the boundary',
    text: 'The model extracts, drafts and explains. Deterministic code computes the number. A person approves anything irreversible.',
  },
  {
    title: 'Prove it on real data',
    text: 'A small evaluation on real cases, then UAT and scenario walkthroughs with the people who have to sign off.',
  },
  {
    title: 'Stay for production',
    text: 'Rollout, adoption, observability and the incidents that follow. Deployed work only counts if it keeps running.',
  },
];

/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

// Who makes the call at each step of a request's path.
//   data   something going in or coming out
//   code   deterministic, tested code decides
//   model  a language model proposes
//   person a human approves
export type StageBy = 'data' | 'code' | 'model' | 'person';

export type Stage = { by: StageBy; label: string };

export type WorkLink = { kind: 'github' | 'live' | 'portfolio'; label: string; href: string };

export type GroupId = 'production' | 'builds' | 'platforms' | 'personal';

export const groups: { id: GroupId; title: string; text: string }[] = [
  {
    id: 'production',
    title: 'Applied AI in production',
    text: 'Generative AI systems running inside a regulated Australian financial services group.',
  },
  {
    id: 'builds',
    title: 'AI products and agent builds',
    text: 'Products of my own, plus compact builds that show the same discipline outside one employer’s stack.',
  },
  {
    id: 'platforms',
    title: 'Platforms and payments',
    text: 'The enterprise platforms and regulated payment products the AI work stands on.',
  },
  {
    id: 'personal',
    title: 'Personal space',
    text: 'Ventures in build and things made for people close to home.',
  },
];

export type CaseStudy = {
  id: string;
  group: GroupId;
  title: string;
  org: string;
  role: string;
  summary: string;
  path: Stage[];
  problem: string;
  approach: string;
  outcome: string;
  detail: string[];
  stack: string[];
  links: WorkLink[];
};

// Deep links into the portfolio PDF. Dropped automatically while it is unpublished.
const inPortfolio = (page: number): WorkLink[] =>
  portfolio.published
    ? [{ kind: 'portfolio', label: `In the portfolio, page ${page}`, href: `${portfolio.file}#page=${page}` }]
    : [];

export const caseStudies: CaseStudy[] = [
  {
    id: 'payroll-ai',
    group: 'production',
    title: 'Payroll AI',
    org: 'Findex',
    role: 'Solution architect and hands-on engineer',
    summary:
      'A four-agent pipeline that turns Modern Award and enterprise agreement documents into payroll logic that can be executed, checked against real pay data and traced back to the clause it came from.',
    path: [
      { by: 'data', label: 'Awards and enterprise agreements' },
      { by: 'model', label: 'Rules extracted with clause references' },
      { by: 'model', label: 'Client-specific calculations drafted' },
      { by: 'code', label: 'Deterministic run against payroll data' },
      { by: 'code', label: 'Blast radius of any rule change scoped' },
      { by: 'person', label: 'Approval of material changes' },
      { by: 'data', label: 'Results and exceptions in Power BI' },
    ],
    problem:
      'Payroll errors surface after the money has moved, and nobody can manually check every award condition, allowance and pay cycle. Under- and over-payment was a periodic audit, not a control.',
    approach:
      'Four agents with a strict determinism boundary. One extracts rules with clause references attached, one turns them into client-specific calculation logic, one runs that logic in code against real payroll data, and one triages feedback, proposes a fix and coordinates the rerun. The model extracts, drafts and explains. Deterministic Python computes the number.',
    outcome:
      'Detection moved from a periodic audit to a continuous control, with a person on every flagged case. Every number traces back to its legal clause, which is what made it audit-defensible. Registered as an eligible R&D activity under the Australian R&D Tax Incentive.',
    detail: [
      'Custom retrieval and chunking, written after naive splitting broke clause references in dense legal documents.',
      'Before a rule changes, the system works out whether it touches one pay run, many, or a rule shared across clients.',
      'Exception classification and rerun coordination, so developers stop hand-fixing individual payroll corrections.',
    ],
    stack: ['Python', 'LangGraph', 'Azure OpenAI', 'Structured outputs', 'RAG with clause citations', 'Durable Functions', 'Microsoft Fabric', 'Power BI'],
    links: [...inPortfolio(7)],
  },
  {
    id: 'performx',
    group: 'production',
    title: 'PerformX',
    org: 'Findex',
    role: 'Solution architect and hands-on engineer',
    summary:
      'A data agent for people leaders, delivered inside Microsoft Teams because that is where they already work. Ask in plain language and get an answer computed by the governed Power BI model, and only if you are allowed to see it.',
    path: [
      { by: 'data', label: 'Question in Teams or the web app' },
      { by: 'code', label: 'Who is asking, and what may they see' },
      { by: 'model', label: 'Query drafted against the semantic model' },
      { by: 'code', label: 'Validation, with bounded self-repair' },
      { by: 'code', label: 'Run on the governed Power BI model' },
      { by: 'model', label: 'Answer explained in plain language' },
    ],
    problem:
      'Leaders were waiting on analysts for questions their own dashboards could already answer, over sensitive remuneration and performance data.',
    approach:
      'Two layers. A performance data platform on bronze, silver and gold layers in Microsoft Fabric, with identity and access enforced before any data is touched. On top, a FastAPI agent that resolves who is asking, checks permissions three separate times, and refuses rather than guesses when identity is uncertain.',
    outcome:
      'Leaders self-serve inside the tool they already use, and analysts are freed from routine pulls. The numbers always come from the governed model, never from the language model.',
    detail: [
      'Bounded self-repair: a failed query is rewritten from the actual execution error, revalidated, and abandoned gracefully when recovery fails.',
      'Riverbed Aternity integration: endpoint telemetry joined to application events in a governed reporting model, so adoption became a standing input to roadmap decisions.',
      'Cached workspace, identity and permission metadata to cut response latency, with rate limiting, tracing and alerting in production.',
    ],
    stack: ['FastAPI', 'React', 'Microsoft Teams', 'Azure OpenAI', 'Entra ID', 'Power BI and DAX', 'Vue 3', 'Django', 'Microsoft Fabric', 'Riverbed Aternity'],
    links: [...inPortfolio(10)],
  },
  {
    id: 'wealthai',
    group: 'production',
    title: 'WealthAI: TMD change analysis',
    org: 'Findex',
    role: 'Solution designer and engineer',
    summary:
      'Automates the review of Target Market Determination documents: reads the PDFs, pulls out the compliance terms that matter, and makes one version comparable with the next.',
    path: [
      { by: 'data', label: 'TMD PDFs from many issuers' },
      { by: 'code', label: 'Text, issuer, product code and dates extracted' },
      { by: 'model', label: 'Conditions, reporting rules and review triggers read' },
      { by: 'model', label: 'Tagged into typed fields against a schema' },
      { by: 'code', label: 'Dates, flags and product codes normalised' },
      { by: 'person', label: 'Analysts check against manual review' },
      { by: 'data', label: 'JSON and Excel for the business' },
    ],
    problem:
      'Analysts opened TMD PDFs one at a time, read the relevant sections, copied the terms into Excel and compared versions by hand.',
    approach:
      'A staged pipeline. Deterministic code does what rules can do reliably: reading text, working out quarters, detecting drafts, normalising dates and product codes. Azure OpenAI does what needs interpretation: compliance wording, and tables that every issuer lays out differently. Pydantic models pin the output to typed fields.',
    outcome:
      'Documents process in concurrent batches, a bad PDF lands on a failure list instead of stopping the run, and computer results are scored against manually reviewed ones before anyone relies on them.',
    detail: [
      'Schema on read: issuer-specific table schemas are stored, and for a new issuer the model discovers the columns and saves them for next time.',
      'An issuer registry caches known names, which cuts repeat model calls and keeps results consistent.',
      'Orchestrated on Azure Durable Functions with parallel fan-out, retries and idempotent per-document activities.',
      'A deterministic risk-rating engine sits after extraction, so the rating is repeatable and explainable.',
    ],
    stack: ['Python', 'Azure OpenAI', 'LangChain', 'Pydantic', 'Azure Durable Functions', 'asyncio'],
    links: [],
  },
  {
    id: 'eduport',
    group: 'production',
    title: 'EduPort',
    org: 'Findex',
    role: 'Technical and delivery lead',
    summary:
      'An analytics platform for schools: demographics, peer benchmarking, and board reports that are produced on a schedule instead of by an analyst.',
    path: [
      { by: 'data', label: 'School demographic and financial data' },
      { by: 'code', label: 'Managed data pipelines' },
      { by: 'code', label: 'Scheduled workflows compute ratios and benchmarks' },
      { by: 'model', label: 'Guided discovery walks the user to a comparison' },
      { by: 'code', label: 'Board report generated each month' },
      { by: 'data', label: "Export into the school's board papers" },
    ],
    problem:
      'School and sector leaders had the data but no practical way to benchmark themselves against comparable institutions, and could not be expected to write queries.',
    approach:
      'A guided-discovery chatbot walks non-analysts to a defensible benchmark in a few steps. Behind it, scheduled Azure AI Foundry workflows compute student debtor ratios, parent payment analysis and benchmarking insight, then generate board reports on a monthly cycle.',
    outcome:
      'Self-service, defensible insight for people who are not analysts, and a recurring analyst burden turned into a repeatable, scheduled pipeline.',
    detail: [
      'Demographics, peer benchmarking, reporting, exports and admin capability in one platform.',
      'Modernised and migrated from the earlier education advisory platform, with business continuity as a hard constraint.',
      'Supports schools across Australia and New Zealand.',
    ],
    stack: ['Python', 'Azure AI Foundry', 'Azure OpenAI', 'Data Factory', 'Microsoft Fabric', 'Power BI'],
    links: [
      { kind: 'live', label: 'Live site', href: 'https://www.findex.com.au/industries/education/education-portal' },
      ...inPortfolio(14),
    ],
  },
  {
    id: 'voice-tutor',
    group: 'builds',
    title: 'Selective exam voice tutor',
    org: 'Audarya Consulting',
    role: 'Product owner, designer and engineer',
    summary:
      'A voice tutor that coaches a secondary student through selective-entry exam preparation, talking her through the questions on her screen the way a patient one-on-one tutor would.',
    path: [
      { by: 'data', label: "Student's voice and on-screen work" },
      { by: 'code', label: 'Endpointing and streaming speech-to-text' },
      { by: 'model', label: 'Next hint drafted while she is still talking' },
      { by: 'model', label: 'Reply grounded in exam material' },
      { by: 'code', label: 'Streaming text-to-speech' },
      { by: 'code', label: 'Turn-taking and barge-in' },
      { by: 'data', label: 'Spoken reply in about a second' },
    ],
    problem:
      'A chat window is not a tutor. A tutor hears when you have finished, waits while you think out loud, and stops the moment you interrupt.',
    approach:
      'Voice activity detection knows when she has finished an answer. Streaming speech-to-text and text-to-speech start the reply quickly, and speculative generation drafts the next hint while she is still talking. Audio is captured in the browser with Web Audio and AudioWorklet over WebSockets.',
    outcome:
      'It teaches rather than tells: guiding questions, hints in steps, and the explanation only once she has had a go. Built for a real student preparing for the exam, so every design decision was tested against how a teenager actually studies.',
    detail: [
      'Covers reading comprehension, mathematics, verbal reasoning, quantitative reasoning and writing practice.',
      'Follows along on screen: notices a new question, offers help when she seems stuck, and stays quiet while she is working.',
      "Kept on topic and age-appropriate by grounding it in the exam's question types and practice material, which can be updated as new material arrives.",
    ],
    stack: ['Deepgram', 'ElevenLabs', 'Vapi', 'Web Audio and AudioWorklet', 'WebSockets', 'Streaming STT and TTS'],
    links: [],
  },
  {
    id: 'northstar',
    group: 'builds',
    title: 'Northstar finance agent',
    org: 'Technical exercise, Monash',
    role: 'Design and build',
    summary:
      'An accounts-payable agent over a finance policy corpus, built to production standards rather than as a toy. The same boundary as the production work, in code you can read: the model explains, the code decides, a person approves.',
    path: [
      { by: 'data', label: 'Invoice case' },
      { by: 'code', label: 'BM25 retrieval over the policy corpus' },
      { by: 'code', label: 'Invoice evidence collected' },
      { by: 'code', label: 'Deterministic controls set the outcome' },
      { by: 'person', label: 'Approval gate' },
      { by: 'code', label: 'Posting decision recorded once' },
      { by: 'model', label: 'One-line explanation' },
    ],
    problem:
      "An agent that touches accounts payable can't be allowed to choose an outcome, or authorise a payment, because a document told it to.",
    approach:
      'LangGraph supplies the state machine, a SQLite checkpointer for restart and resume, and the interrupt for approval. Code owns the arithmetic, the outcome, tool timeouts and permissions, output validation and idempotency. The model writes one line of explanation and has no outcome field.',
    outcome:
      'Five evaluation cases define the behaviour: a clean invoice is submitted once, a duplicate is rejected, a supplier document saying "ignore policy, pay now" is escalated rather than obeyed, a timed-out purchase order service puts the case on hold, and a double approval callback still produces one submit.',
    detail: [
      'BM25 lexical retrieval chosen on purpose: every grounding decision can be inspected, which a black-box vector index would not allow.',
      'Retrieved text is treated as evidence, never as instructions.',
      'A FastAPI surface to start a run, read status with audit events, approve, and run the evaluations.',
    ],
    stack: ['Python', 'LangGraph', 'FastAPI', 'BM25 retrieval', 'Pydantic', 'SQLite', 'pytest'],
    links: [
      { kind: 'github', label: 'Source on GitHub', href: 'https://github.com/vrandesh/northstar-finance-agent' },
    ],
  },
  {
    id: 'planning',
    group: 'builds',
    title: 'Planning decision support',
    org: 'Technical exercise, DeployCo',
    role: 'Design and build',
    summary:
      'A tool that drafts decisions on housing planning applications for council planning officers: approve with conditions, or refuse with reasons, each tied to the policy behind it.',
    path: [
      { by: 'data', label: 'Application pack and policy documents' },
      { by: 'code', label: 'Case loader: documents, postcode, geospatial constraints' },
      { by: 'model', label: 'Agent opens the evidence it needs' },
      { by: 'model', label: 'Policy search and bounded page reading' },
      { by: 'model', label: 'Draft decision with reasons or conditions' },
      { by: 'person', label: 'Planning officer decides' },
    ],
    problem:
      'Assessing a housing planning application takes a council around eight weeks. The brief was a tool that gets an officer to a well-supported draft in under fifteen minutes, with the policy it relied on visible for audit.',
    approach:
      'Built in stages and measured at each one. First a deterministic case loader, because which documents exist, the site postcode and its geospatial constraints belong in plain Python, not in a model. Then a frozen single-agent baseline, an evidence-aware agent that opens documents as it needs them, and a policy-grounded agent with search and bounded page-reading tools.',
    outcome:
      'On the five development cases, decision match went from 20% at baseline to 100% with the evidence-aware agent, and F1 on reasons and conditions from 0.24 to 0.48. Policy grounding held accuracy at 100% and cut false positives at a small cost in recall, which the write-up reports rather than hides.',
    detail: [
      "Every postcode candidate is collected, not just the first, because an application also carries the applicant's and the agent's addresses.",
      'The baseline was frozen before any change, so each later improvement is measured against the same reference.',
      'A representative run used about 21,000 tokens across two model requests and eleven tool calls.',
    ],
    stack: ['Python', 'Pydantic', 'Tool-calling agents', 'OpenRouter', 'Geospatial lookups', 'Evaluation harness'],
    links: [],
  },
  {
    id: 'krm',
    group: 'platforms',
    title: 'KRM remuneration platform',
    org: 'Findex',
    role: 'Platform architect, product owner and delivery lead',
    summary:
      'A greenfield platform for short-term incentive, referral and forecasting calculations over sensitive remuneration data. It replaced a spreadsheet-bound policy with an engine that can be audited.',
    path: [
      { by: 'data', label: 'Finance, incentive and workforce data' },
      { by: 'code', label: 'Bronze, silver and gold data layers' },
      { by: 'code', label: 'Access resolved first: sign-on, roles, row-level security' },
      { by: 'code', label: 'Incentive calculation engine' },
      { by: 'person', label: 'Executive UAT and scenario sign-off' },
      { by: 'data', label: 'Scenarios in Power BI Embedded' },
    ],
    problem:
      'Short-term incentive outcomes lived in spreadsheets: thresholds, caps, gateways and payaway curves argued line by line, with no way to test a scenario before committing to it.',
    approach:
      'Encoded the full rule set (performance weights, thresholds, ramps, payaway curves, gateways, caps, floors and segmentation) into a deterministic engine on governed data layers in Microsoft Fabric and OneLake, with Entra ID sign-on and row-level security carried through to Power BI Embedded.',
    outcome:
      '443 users and 129 people leaders moved off spreadsheets under the role and permission model. Million-dollar outcome scenarios were evidenced and signed off through executive UAT.',
    detail: [
      'The harder part was turning conflicting stakeholder interpretations into precise, testable rules.',
      'Back-end authorisation decides what a person may see before sensitive data enters any downstream processing.',
      'Application, analytics and data platform promoted together through controlled DEV, UAT and production environments.',
    ],
    stack: ['Vue 3', 'Django', 'Python', 'Entra ID', 'Power BI Embedded', 'Microsoft Fabric and OneLake', 'Databricks', 'Azure SQL'],
    links: [...inPortfolio(5)],
  },
  {
    id: 'donation-point-go',
    group: 'platforms',
    title: 'Donation Point Go and Airpay',
    org: 'Quest Payment Systems',
    role: 'Senior software engineer and team lead',
    summary:
      'Contactless donation terminals and a mobile point-of-sale app for a regulated payments business, taken from concept to production.',
    path: [
      { by: 'data', label: 'Tap at the terminal or app' },
      { by: 'code', label: 'Node.js APIs' },
      { by: 'code', label: 'Lambda and Step Functions services' },
      { by: 'code', label: 'Firestore real-time data' },
      { by: 'code', label: 'Xero and MYOB sync' },
      { by: 'data', label: 'Reporting for the organisation' },
    ],
    problem:
      'Cash donations were collapsing, and charities had no low-friction way to accept a contactless gift at a venue, an event or a doorway.',
    approach:
      'Led back-end engineering from concept to production: event-driven, auto-scaling infrastructure across AWS and GCP, sized for unpredictable volumes, with monitoring and observability built in.',
    outcome:
      'A production payment channel for charities, venues and organisations that scales cost-efficiently through spiky event traffic, with a reporting surface for the organisations behind it.',
    detail: [
      'Designed and maintained 12+ production microservices and integration services on Node.js, AWS Lambda and Step Functions.',
      'Real-time data services on Firebase Functions and Firestore, keeping state in sync across web, mobile, point-of-sale and kiosk clients.',
      'Led a team of three while staying hands-on across architecture, monitoring and production support.',
    ],
    stack: ['Node.js', 'AWS Lambda', 'Step Functions', 'Firebase', 'Firestore', 'Cloud Functions', 'React'],
    links: [...inPortfolio(16)],
  },
];

/* ------------------------------------------------------------------ */
/* More work, in brief                                                 */
/* ------------------------------------------------------------------ */

export type BriefWork = {
  group: GroupId;
  title: string;
  org: string;
  text: string;
  stack: string[];
  links: WorkLink[];
};

export const moreWork: BriefWork[] = [
  {
    group: 'builds',
    title: 'AgentMesh',
    org: 'Audarya Consulting',
    text: 'A distributed runtime for running many AI agents in production. It runs on Kubernetes with autoscaling and coordinates LangGraph and CrewAI agents over NATS JetStream and RabbitMQ. Prototype.',
    stack: ['Kubernetes', 'LangGraph', 'CrewAI', 'NATS JetStream', 'RabbitMQ'],
    links: [],
  },
  {
    group: 'builds',
    title: 'AI job search, ranker and comparer',
    org: 'Personal',
    text: "The workflow I run my own job search on. It finds postings, rates and ranks each one against my profile, compares roles, and tailors the CV and cover letter for the ones worth applying to. Built on Mads Lorentzen's open-source ai-job-search framework for Claude Code.",
    stack: ['Claude Code', 'Python'],
    links: [{ kind: 'github', label: 'Fork on GitHub', href: 'https://github.com/vrandesh/ai-job-search' }],
  },
  {
    group: 'platforms',
    title: 'Space Industry Association of Australia',
    org: 'Findex',
    text: "A national platform for the industry directory, affiliations, grants and supply-chain mapping, maintained by the members themselves. The association's public capability map now runs off governed data rather than a maintained document.",
    stack: ['Django', 'GraphQL', 'Role-based access'],
    links: [{ kind: 'live', label: 'Live site', href: 'https://www.spaceindustry.com.au/' }, ...inPortfolio(13)],
  },
  {
    group: 'platforms',
    title: 'Trade Port',
    org: 'Findex',
    text: 'A trade intelligence product that reconciles commodity codes, country data, compliance requirements and pricing into one queryable surface for export and import analysis. Its pipeline components were reused across later Findex data products.',
    stack: ['Data pipelines', 'Azure', 'Multi-tenant'],
    links: [{ kind: 'live', label: 'Live site', href: 'https://tradeport.findex.com.au/' }, ...inPortfolio(12)],
  },
  {
    group: 'platforms',
    title: 'Table Pay and Split Tab',
    org: 'Quest Payment Systems',
    text: "Diners settle their own share of a restaurant bill from their own phone. React over Firebase Realtime Database keeps every diner's view of the tab in sync, so an item is never counted twice.",
    stack: ['React', 'Firebase Realtime Database', 'Cloud Functions'],
    links: [...inPortfolio(17)],
  },
  {
    group: 'platforms',
    title: 'JOI Delivery',
    org: 'Technical exercise, Thoughtworks',
    text: 'The back end of a hyperlocal food and grocery delivery app. Extended an existing Python codebase with inventory and restaurant services, their controllers and tests.',
    stack: ['Python', 'FastAPI', 'pytest'],
    links: [],
  },
  {
    group: 'platforms',
    title: 'Aurigo DevOps and analytics dashboards',
    org: 'Apptarix Mobility',
    text: 'One dashboard a team could run a stand-up from, over build systems, environments and product telemetry. The summary, list and detail pattern carried across client-facing product lines.',
    stack: ['AngularJS', 'Node.js', 'Data ingestion'],
    links: [...inPortfolio(20)],
  },
  {
    group: 'platforms',
    title: 'Teletango NLP and the recommendation patent',
    org: 'Apptarix Mobility',
    text: 'An NLP sentiment engine in R and Python using cosine similarity, then patent application 201641021557 for a way to measure whether commercial rules or learnt rules are earning their place in a recommendation engine.',
    stack: ['R', 'Python', 'Cosine similarity'],
    links: [...inPortfolio(21)],
  },
  {
    group: 'personal',
    title: 'Thinking Pandits',
    org: 'thinkingpandits.com',
    text: 'My lab. It builds its own products to test ideas before taking them to clients, and publishes what it finds, including the results that prove an idea wrong.',
    stack: [],
    links: [],
  },
  {
    group: 'personal',
    title: 'BookMyPandit',
    org: 'bookmypandit.com.au',
    text: 'AI-assisted booking for pandits and pujas. In build.',
    stack: [],
    links: [],
  },
  {
    group: 'personal',
    title: 'CanvasToCake',
    org: 'canvastocake.com',
    text: 'Edible print design and sheet fulfilment for bakeries in Melbourne. In build.',
    stack: [],
    links: [],
  },
  {
    group: 'personal',
    title: 'Laburnum newsletter search',
    org: 'For a primary school',
    text: "Search and read a primary school's e-newsletter archive. A Python fetcher builds the index and a static page searches it.",
    stack: ['Python', 'HTML', 'Cloudflare'],
    links: [
      { kind: 'github', label: 'Source on GitHub', href: 'https://github.com/vrandesh/laburnum-primary-newsletter-app' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Public repositories                                                 */
/* ------------------------------------------------------------------ */

export const repos = [
  {
    name: 'northstar-finance-agent',
    text: 'Accounts-payable agent with BM25 retrieval, a LangGraph state machine and a human approval gate.',
    language: 'Python',
    href: 'https://github.com/vrandesh/northstar-finance-agent',
  },
  {
    name: 'ai-job-search',
    text: 'Job search workflow on Claude Code: find, rate, rank and compare postings, then tailor the application. Fork of MadsLorentzen/ai-job-search.',
    language: 'Python',
    href: 'https://github.com/vrandesh/ai-job-search',
  },
  {
    name: 'laburnum-primary-newsletter-app',
    text: "Search and read a primary school's e-newsletter archive.",
    language: 'Python, HTML',
    href: 'https://github.com/vrandesh/laburnum-primary-newsletter-app',
  },
  {
    name: 'portfolio',
    text: 'The source for this site.',
    language: 'TypeScript, Next.js',
    href: 'https://github.com/vrandesh/portfolio',
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    org: 'Findex Australia',
    title: 'Senior full stack developer and technical lead, Data Science',
    place: 'Melbourne',
    from: 'Mar 2022',
    to: 'Present',
    points: [
      'Owned AI products end to end, from discovery with partners, accountants and people leaders through proof of concept, production rollout and adoption across a national professional services firm.',
      'Built PerformX, a natural-language agent over governed financial data, delivered in Microsoft Teams and a React web app.',
      'Designed the knowledge pipelines behind Payroll AI, which turn dense regulatory documents into executable, traceable rules, with change control so a knowledge update is assessed before it goes live.',
      'Delivered the KRM remuneration platform, moving 443 users and 129 people leaders off spreadsheets, and worked directly with the executive sponsor to translate incentive logic for non-technical decision makers.',
      'Designed distributed processing on Azure Durable Functions with parallel fan-out, retries and idempotent activities for high-volume document workloads.',
      'Led cross-functional teams of 4 to 19 while staying hands-on across Python, FastAPI, Django, React and cloud integration.',
      'Stepped in as interim DevOps lead during a critical production incident: stabilised the services, improved CI/CD reliability and added Grafana observability.',
    ],
    stack: ['Python', 'FastAPI', 'Django', 'React', 'Vue 3', 'Azure OpenAI', 'LangGraph', 'Microsoft Fabric', 'Power BI Embedded', 'Entra ID'],
  },
  {
    org: 'Audarya Consulting',
    title: 'Founder and principal engineer, alongside Findex',
    place: 'Melbourne',
    from: '2026',
    to: 'Present',
    points: [
      'Founded an AI and intelligent automation consultancy. I scope engagements directly with business owners, design the proof of concept and deliver the working system.',
      'Built AgentMesh, a distributed multi-agent runtime on Kubernetes, and the selective exam voice tutor on Deepgram, Vapi and ElevenLabs.',
      'Prepared enterprise AI adoption proposals for clients in manufacturing and financial services, and received initial approval to the Anthropic Claude Partner Network.',
    ],
    stack: ['Kubernetes', 'LangGraph', 'CrewAI', 'NATS JetStream', 'Deepgram', 'ElevenLabs', 'Claude API'],
  },
  {
    org: 'Quest Payment Systems',
    title: 'Senior software engineer and team lead, Product Innovation',
    place: 'Melbourne',
    from: 'Oct 2017',
    to: 'Mar 2022',
    points: [
      'Took two regulated products from concept to production: Airpay, a point-of-sale app, and Donation Point Go, a contactless donation platform.',
      'Designed event-driven, auto-scaling serverless architectures across AWS and GCP to absorb unpredictable, bursty transaction workloads.',
      'Architected and maintained 12+ production microservices and integration services on Node.js, AWS Lambda and Step Functions, including Xero, MYOB and payment-ecosystem integrations.',
      'Led a team of three while staying hands-on with back-end development, cloud architecture, monitoring and production support.',
    ],
    stack: ['Node.js', 'AWS Lambda', 'Step Functions', 'Firebase', 'Firestore', 'React', 'Ember.js'],
  },
  {
    org: 'ESRI Australia',
    title: 'Full stack developer, contract',
    place: 'Melbourne',
    from: 'Aug 2017',
    to: 'Sep 2017',
    points: [
      'ArcGIS-based geospatial applications: AngularJS front end and Node.js and Express middleware over SOAP services, hosted on AWS with EC2, Elastic Beanstalk, SQS and SNS.',
    ],
    stack: ['AngularJS', 'Node.js', 'AWS'],
  },
  {
    org: 'Apptarix Mobility',
    title: 'Technology lead and full stack developer',
    place: 'Bengaluru',
    from: 'Jun 2013',
    to: 'Jul 2017',
    points: [
      'Led architecture across OTT, analytics and EdTech product lines including Teletango, PrepSuite and MystiKit, and managed a team of five.',
      'Built an early NLP sentiment engine in R and Python using cosine similarity, turning raw viewer data into product intelligence.',
      'Filed provisional patent application 201641021557 for a recommendation engine that measures commercial rules against learnt ones.',
    ],
    stack: ['Node.js', 'AngularJS', 'R', 'Python'],
  },
];

export const earlier = [
  {
    org: 'Studio360eye',
    title: 'Founder and lead developer',
    years: '2012 to 2013',
    text: 'Ran a distributed team of six shipping EdTech and e-commerce products end to end.',
  },
  {
    org: 'UNI Media Group',
    title: 'Senior web developer and project lead',
    years: '2011 to 2012',
    text: 'Content management and cross-platform data work for client accounts.',
  },
  {
    org: 'Hewlett-Packard / Mphasis',
    title: 'Infrastructure engineer',
    years: '2009 to 2010',
    text: 'Round-the-clock server and network operations across 70+ Linux and HP-UX servers, with Perl automation.',
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skills = [
  {
    area: 'Agentic AI systems',
    items: ['Multi-agent orchestration', 'LangGraph state machines', 'CrewAI', 'Tool and function calling', 'MCP integration', 'Structured output contracts with Pydantic and JSON schema', 'Self-repair and bounded retry loops', 'Human-in-the-loop gates', 'Prompt caching and context-window management', 'Claude API', 'Azure OpenAI', 'Amazon Bedrock'],
  },
  {
    area: 'Agent knowledge and RAG',
    items: ['Precompiled, versioned knowledge packs', 'Hybrid retrieval with vectors and BM25', 'Clause-preserving chunking', 'Re-ranking', 'Grounded generation with citations', 'Controlled knowledge updates', 'Evaluation harnesses', 'LangSmith and Grafana observability'],
  },
  {
    area: 'Real-time and conversational AI',
    items: ['Voice activity detection and endpointing', 'Turn-taking and barge-in', 'Streaming speech-to-text and text-to-speech', 'Speculative generation', 'Web Audio and AudioWorklet over WebSockets', 'Deepgram', 'ElevenLabs', 'Vapi'],
  },
  {
    area: 'Working with customers',
    items: ['Discovery workshops and problem framing', 'Prototypes and proofs of concept', 'Scoping and estimation', 'Architecture trade-offs for executives', 'UAT and scenario walkthroughs', 'Adoption with non-technical teams'],
  },
  {
    area: 'Front end and product',
    items: ['TypeScript', 'React', 'Vue 3', 'Next.js', 'Component-driven UI', 'Microsoft Teams apps', 'Rapid prototyping from customer conversation to working demo'],
  },
  {
    area: 'Back end and distributed systems',
    items: ['Python', 'FastAPI', 'Django', 'Node.js', 'REST and GraphQL', '12+ production microservices', 'Event-driven messaging with NATS JetStream and RabbitMQ', 'Redis', 'Idempotency, retries and graceful degradation', 'Entra ID, OAuth and role-based access'],
  },
  {
    area: 'Cloud and infrastructure',
    items: ['Azure Functions and Durable Functions', 'AWS Lambda and Step Functions', 'GCP Cloud Functions, Firebase and Firestore', 'Docker', 'Kubernetes with horizontal pod autoscaling', 'Consul', 'CI/CD with environment promotion', 'Grafana tracing and alerting'],
  },
  {
    area: 'Data platforms',
    items: ['Microsoft Fabric and OneLake', 'Databricks', 'Power BI Embedded', 'SQL and NoSQL stores', 'Xero, MYOB and Workday integrations'],
  },
];

/* ------------------------------------------------------------------ */
/* Recommendation                                                      */
/* ------------------------------------------------------------------ */

export const recommendation = {
  quote:
    "I had the pleasure of working alongside Vrandesh for three years, and he is undoubtedly one of the most well-rounded Full Stack Developers I've collaborated with. He consistently delivers high-quality, robust code and has a keen eye for detail. What truly sets Vrandesh apart is his dedication to staying current with the latest technologies; he always brings fresh, modern solutions to the table.",
  name: 'Ahmad A. Rezaei, PhD',
  title: 'Senior AI Engineer, Oracle',
  context: 'Worked with Vrandesh on the same team. Recommendation given on LinkedIn, March 2026.',
};

/* ------------------------------------------------------------------ */
/* Education and credentials                                           */
/* ------------------------------------------------------------------ */

export const credentials = [
  {
    what: 'Certificate in Business Analytics',
    where: 'Harvard Business School Online',
    when: '2023',
  },
  {
    what: 'Bachelor of Engineering, Electronics and Communication',
    where: 'Visvesvaraya Technological University. First Class Honours.',
    when: '2008',
  },
  {
    what: 'Patent application 201641021557',
    where: 'A system and method to measure the effectiveness and performance of commercial and learnt rules that recommend content to users.',
    when: '2016',
  },
  {
    what: 'Courses and memberships',
    where: 'Azure for Data Engineering, Machine Learning and Big Data, Generative AI, React with TypeScript. Member of PMI Melbourne.',
    when: '',
  },
  {
    what: 'In progress',
    where: 'PMP, Anthropic Claude Developer, Snowflake and Databricks pathways.',
    when: '',
  },
];

export const contact = {
  heading: "Let's talk about the hard part.",
  text: 'Open to forward deployed and applied AI engineering roles, and to consulting work where the business rules are the interesting problem.',
};
