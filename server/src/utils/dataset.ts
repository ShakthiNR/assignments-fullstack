/**
 * @description Question Bank
 * @author Shakthi NR
 * Sample dataset for interview questions and answers.
 * This dataset includes various technical and non-technical questions,
 * along with sample answers and scoring criteria.
 * MERN stack, machine learning, and project management topics are covered.
 */
export const questions = [
  {
    question:
      "How would you design a RESTful API to handle user authentication and authorization in a microservices architecture?",
    difficulty: "medium",
    category: "API Design",
    skillAreas: [
      "Authentication",
      "Authorization",
      "Microservices Communication",
    ],
    practicalApplicationContext:
      "Securing APIs in a distributed service-based backend",
    evaluationCriteria: {
      answerHighlights: [
        "Use of token-based authentication (e.g., JWT or OAuth2)",
        "Service-to-service authentication mechanism",
        "Role-based or scope-based access control",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Storing user credentials in plain text",
        "Not addressing inter-service auth or access scoping",
      ],
    },

    answer:
      "Use token-based authentication like JWT or OAuth2, where a centralized identity service issues tokens that are validated by individual microservices or a gateway. Role-based access controls should be enforced at each service, and security logic should be delegated to middleware for maintainability. Use short-lived tokens with refresh and revocation strategies, and protect all communication with HTTPS.",
  },
  {
    question:
      "A report generation endpoint is slowing down significantly as the user base grows. How would you identify and fix performance issues in the backend?",
    difficulty: "hard",
    category: "Performance Optimization",
    skillAreas: ["Database Indexing", "Profiling", "Caching"],
    practicalApplicationContext: "Scaling backend endpoints under load",
    evaluationCriteria: {
      answerHighlights: [
        "Use of profiling tools (e.g., APMs, DB query analysis)",
        "Understanding of query optimization/indexing",
        "Use of caching or background processing",
      ],
      knowledgeLevel: "advanced",
      warningSigns: [
        "Blindly adding indexes without understanding query plans",
        "Solving everything at the application layer without measuring",
      ],
    },

    answer:
      "Begin by profiling the endpoint to find performance bottlenecks using APM tools or slow query logs. Optimize database queries using EXPLAIN plans and add appropriate indexes. Introduce caching for frequently accessed data and offload heavy tasks to background workers. Avoid premature optimizations and ensure your caching and indexing strategies are aligned with access patterns.",
  },
  {
    question:
      "How would you implement a feature flag system to control rollout of new features in production?",
    difficulty: "medium",
    category: "Feature Management",
    skillAreas: [
      "Feature Flags",
      "Progressive Deployment",
      "Configuration Management",
    ],
    practicalApplicationContext:
      "Controlling risk during deployments and A/B testing",
    evaluationCriteria: {
      answerHighlights: [
        "Use of feature flag libraries or services",
        "Separation of config from code",
        "Toggle features by environment, user cohort, or % rollout",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Feature toggles hardcoded in logic",
        "No cleanup strategy for stale flags",
      ],
    },

    answer:
      "Use a dedicated feature flag service to toggle features without needing code redeploys. Evaluate flags based on user cohorts, environments, or rollout percentages. Tag each flag with an owner, support kill switches, and clean up unused flags to avoid tech debt. Avoid hardcoding logic and ensure the config is decoupled from the application logic.",
  },

  {
    question:
      "How would you implement rate limiting for an API to prevent abuse while ensuring legitimate users aren’t blocked?",
    difficulty: "medium",
    category: "Security",
    skillAreas: ["Rate Limiting", "API Gateway", "Abuse Prevention"],
    practicalApplicationContext: "Protecting APIs from spamming and DDoS",
    evaluationCriteria: {
      answerHighlights: [
        "Use of rate limit per IP or user ID",
        "Token bucket or leaky bucket algorithm",
        "Consideration for whitelisting, backoff headers",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Single global limit for all users",
        "No handling for bursts or retries",
      ],
    },
    answer:
      "Implement rate limiting using algorithms like token bucket or sliding window. Apply limits per user or IP address, using Redis or a rate-limiting middleware like `express-rate-limit`. Return HTTP 429 with proper headers like `Retry-After`. Consider allowing bursts and whitelisting trusted services. Handle edge cases like shared IPs or retry storms gracefully.",
  },
  {
    question:
      "You need to return nested relational data (e.g., users and their orders and order items) via a REST API. How would you model and query this efficiently?",
    difficulty: "medium",
    category: "API Design",
    skillAreas: ["Data Modeling", "Query Optimization", "REST"],
    practicalApplicationContext:
      "Designing endpoints that return complex, nested data efficiently",
    evaluationCriteria: {
      answerHighlights: [
        "Use of JOINs or aggregation for nesting",
        "Pagination and selective inclusion of nested resources",
        "Avoiding N+1 queries",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Multiple queries per row (N+1 problem)",
        "Returning massive payloads without pagination",
      ],
    },
    answer:
      "Use JOINs (SQL) or aggregation (NoSQL) to return nested data in a single efficient query. Apply pagination and projections to avoid large payloads. Prevent N+1 query issues by preloading nested data or using batch loaders. Keep the response shape manageable by limiting depth and ensuring performance scales with user data.",
  },
  {
    question:
      "How would you implement Role-Based Access Control (RBAC) in a backend system with multiple user roles and permissions?",
    difficulty: "medium",
    category: "Security",
    skillAreas: ["RBAC", "Authorization", "Middleware"],
    practicalApplicationContext: "Enforcing access control in an API",
    evaluationCriteria: {
      answerHighlights: [
        "Clear separation of roles and permissions",
        "Middleware checks or policy enforcement",
        "Dynamic evaluation (e.g., role X can do Y on Z)",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Hardcoded access logic scattered across code",
        "Only checking roles, not actions/resources",
      ],
    },
    answer:
      "Define roles and map them to specific permissions (actions on resources). Store and manage them centrally, and use middleware to enforce authorization checks. Avoid hardcoding logic and support dynamic policy evaluation. Use declarative policies to simplify management and handle edge cases like changing roles mid-session.",
  },
  {
    question:
      "What are effective ways to prevent SQL Injection and ensure secure database queries?",
    difficulty: "easy",
    category: "Security",
    skillAreas: ["SQL Injection", "Parameterized Queries", "ORMs"],
    practicalApplicationContext:
      "Securing user input in web applications with SQL databases",
    evaluationCriteria: {
      answerHighlights: [
        "Use of parameterized queries or ORM",
        "Avoid string concatenation in queries",
        "Input validation and escaping",
      ],
      knowledgeLevel: "beginner",
      warningSigns: [
        "Dynamic string construction with user input",
        "Trusting user-supplied SQL fragments",
      ],
    },
    answer:
      "Use parameterized queries or ORM libraries to ensure user input is treated as data, not executable code. Avoid string concatenation in SQL queries. Validate all input, escape special characters, and use a database user with minimal privileges.",
  },
  {
    question:
      "You’re building an endpoint that accepts large JSON payloads (e.g., analytics logs). How do you ensure stability and protect against abuse?",
    difficulty: "medium",
    category: "API Design",
    skillAreas: ["Rate Limiting", "Payload Validation", "DoS Protection"],
    practicalApplicationContext:
      "Handling telemetry or batch upload APIs securely and efficiently",
    evaluationCriteria: {
      answerHighlights: [
        "Set max request size",
        "Validate shape and type of data",
        "Use streaming or batching where appropriate",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Accepting arbitrary size payloads",
        "Assuming JSON parsing is always safe",
      ],
    },
    answer:
      "Limit the maximum payload size using middleware, and validate the payload structure using a schema validator like Joi. Reject malformed or oversized requests. Use batching and compression where applicable, and apply rate limiting and authentication to prevent abuse and ensure stability.",
  },
  {
    question:
      "What are best practices for pagination in a REST API that returns frequently updated data?",
    difficulty: "medium",
    category: "API Design",
    skillAreas: ["Pagination", "Performance", "RESTful Principles"],
    practicalApplicationContext:
      "Returning user feeds, logs, or real-time data snapshots",
    evaluationCriteria: {
      answerHighlights: [
        "Use of cursor-based pagination over offset",
        "Consistent sorting and filtering",
        "Pagination metadata in response",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Offset-based pagination with mutable data",
        "No metadata or next/prev links",
      ],
    },
    answer:
      "Use cursor-based pagination with a stable field like `createdAt` to ensure consistent results with frequently changing data. Avoid offset pagination for mutable data sets. Include pagination metadata like `nextCursor` in the response to support navigation. Always sort results consistently and use indexed fields for performance.",
  },
  {
    question:
      "How would you structure a scalable folder architecture for a large MERN stack application?",
    difficulty: "medium",
    category: "Architecture",
    skillAreas: ["MERN", "Project Structure", "Scalability"],
    practicalApplicationContext:
      "Building a maintainable and scalable full-stack codebase",
    evaluationCriteria: {
      answerHighlights: [
        "Separation of concerns (routes, controllers, models, views)",
        "Modular structure by feature or domain",
        "Shared utilities, centralized configs",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Monolithic folders (e.g., single `components` or `routes` dir)",
        "Tight coupling between frontend and backend logic",
      ],
    },
    answer:
      "Organize backend and frontend into separate directories. Backend should include folders like `routes`, `controllers`, `models`, `middleware`, and `services`. Frontend should have `components`, `pages`, `hooks`, and `contexts`. Use a feature-based structure to group related logic together for scalability. Centralize configuration and keep utilities reusable.",
  },
  {
    question:
      "How do you manage state in a large React frontend within a MERN application, and when would you choose Context API vs Redux?",
    difficulty: "medium",
    category: "Frontend",
    skillAreas: ["React", "State Management", "Context API", "Redux"],
    practicalApplicationContext:
      "Building interactive UIs with complex shared state",
    evaluationCriteria: {
      answerHighlights: [
        "Context API for lightweight, non-frequent updates",
        "Redux for large-scale, predictable state management",
        "Separation of concerns using reducers or slices",
      ],
      knowledgeLevel: "intermediate",
      warningSigns: [
        "Using Context for high-frequency updates causing re-renders",
        "Global state overuse",
      ],
    },
    answer:
      "Use Context API for lightweight, low-frequency shared state like themes or auth. Use Redux (or Zustand/Recoil) when the app grows and needs predictable, centralized state management. For Redux, structure state by domain and use middleware for async logic (e.g., Redux Thunk or Redux Saga). Avoid prop drilling and excessive global state.",
  },

  {
    question:
      "How would you implement real-time updates (e.g., chat or live notifications) in a MERN stack application?",
    difficulty: "hard",
    category: "Full Stack",
    skillAreas: ["WebSockets", "MongoDB", "React", "Node.js"],
    practicalApplicationContext:
      "Building interactive real-time features like messaging, dashboards, or alerts",
    evaluationCriteria: {
      answerHighlights: [
        "Use of WebSocket libraries like Socket.IO",
        "Efficient event handling and room/channel concepts",
        "Frontend subscription and UI updates",
      ],
      knowledgeLevel: "advanced",
      warningSigns: [
        "Polling the backend instead of real-time communication",
        "No handling for disconnections or reconnections",
      ],
    },
    answer:
      "Use Socket.IO on the backend to handle WebSocket connections and broadcast events to users. On the frontend, connect with Socket.IO client and listen for updates (e.g., new messages). Use rooms for scoped messaging and emit events from API or DB triggers. Handle reconnections and fallbacks for reliability.",
  },

  {
    question:
      "What are best practices for handling asynchronous operations and avoiding callback hell in Node.js?",
    difficulty: "easy",
    category: "Node.js",
    skillAreas: ["Async/Await", "Promises", "Error Handling"],
    practicalApplicationContext:
      "Writing clean and maintainable asynchronous code in Node.js",
    evaluationCriteria: {
      answerHighlights: [
        "Using async/await instead of nested callbacks",
        "Centralized error handling with try/catch",
        "Using Promise.all for parallel async tasks",
      ],
      knowledgeLevel: "beginner",
      warningSigns: [
        "Nested callbacks (callback hell)",
        "No proper error handling for rejected promises",
      ],
    },
    answer:
      "Use Promises and async/await to write clean and readable asynchronous code. Avoid nested callbacks by returning Promises. Wrap async calls in try/catch for error handling. Use `Promise.all` for parallel execution when appropriate, and always handle rejections to avoid unhandled promise errors.",
  }
];
