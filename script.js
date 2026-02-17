/* ============================================================
   WEEK DATA
============================================================ */
const baseFullstackWeeks = [
  {
    week: 1,
    title: "HTML Foundations",
    focus: "Structure & semantics",
    tag: "Frontend",
    bullets: [
      "Learn basic tags: headings, paragraphs, links, images, lists.",
      "Understand semantic tags: header, nav, main, section, footer.",
      "Build a simple multi-section page (e.g., personal bio)."
    ],
    details: "Goal: Write clean, semantic HTML and understand structure."
  },
  {
    week: 2,
    title: "CSS Basics & Layout",
    focus: "Styling & positioning",
    tag: "Frontend",
    bullets: [
      "Learn selectors, box model, margins, padding, borders.",
      "Use Flexbox for simple layouts.",
      "Recreate a basic landing page."
    ],
    details: "Goal: Control spacing, alignment, and visual hierarchy."
  },
  {
    week: 3,
    title: "Responsive Design",
    focus: "Mobile-first thinking",
    tag: "Frontend",
    bullets: [
      "Learn media queries.",
      "Use responsive units.",
      "Make your landing page responsive."
    ],
    details: "Goal: Build layouts that adapt to all screen sizes."
  },
  {
    week: 4,
    title: "JavaScript Fundamentals",
    focus: "Core language",
    tag: "Frontend",
    bullets: [
      "Variables, data types, loops, functions.",
      "Arrays and objects.",
      "Build small JS scripts."
    ],
    details: "Goal: Understand JS logic and syntax."
  },
  {
    week: 5,
    title: "DOM & Interactivity",
    focus: "Dynamic UI",
    tag: "Frontend",
    bullets: [
      "Select and manipulate DOM elements.",
      "Handle events.",
      "Build an interactive project."
    ],
    details: "Goal: Connect JS logic to UI changes."
  },
  {
    week: 6,
    title: "Modern JS & ES6",
    focus: "ES6+ features",
    tag: "Frontend",
    bullets: [
      "Arrow functions, let/const.",
      "Template literals, destructuring.",
      "Modules and clean code."
    ],
    details: "Goal: Write modern, maintainable JavaScript."
  },
  {
    week: 7,
    title: "React Basics",
    focus: "Components & state",
    tag: "Frontend",
    bullets: [
      "Understand components.",
      "Props and state.",
      "Build a small React app."
    ],
    details: "Goal: Think in components."
  },
  {
    week: 8,
    title: "Node.js & Express",
    focus: "Backend fundamentals",
    tag: "Backend",
    bullets: [
      "Set up Node project.",
      "Create Express routes.",
      "Understand APIs."
    ],
    details: "Goal: Build backend endpoints."
  },
  {
    week: 9,
    title: "Databases",
    focus: "Data persistence",
    tag: "Backend",
    bullets: [
      "Learn CRUD operations.",
      "Connect backend to DB.",
      "Build data routes."
    ],
    details: "Goal: Store and retrieve real data."
  },
  {
    week: 10,
    title: "Full Stack Integration",
    focus: "Frontend + backend",
    tag: "Full Stack",
    bullets: [
      "Connect frontend to API.",
      "Handle loading states.",
      "Build a full stack app."
    ],
    details: "Goal: Build a complete working app."
  },
  {
    week: 11,
    title: "Auth & Security",
    focus: "Users & sessions",
    tag: "Full Stack",
    bullets: [
      "Implement login/signup.",
      "Protect routes.",
      "Hash passwords."
    ],
    details: "Goal: Build secure user systems."
  },
  {
    week: 12,
    title: "Deployment & Portfolio",
    focus: "Ship & showcase",
    tag: "Career",
    bullets: [
      "Deploy frontend & backend.",
      "Polish portfolio project.",
      "Write documentation."
    ],
    details: "Goal: Publish real projects."
  }
];

const baseDataScienceWeeks = baseFullstackWeeks.map(w => ({
  ...w,
  title: w.title
    .replace("HTML Foundations", "Python & Data Foundations")
    .replace("CSS Basics & Layout", "Data Visualization Basics")
    .replace("Responsive Design", "Data Cleaning & Preparation")
    .replace("JavaScript Fundamentals", "Python Fundamentals")
    .replace("DOM & Interactivity", "Exploratory Data Analysis")
    .replace("Modern JS & ES6", "NumPy & Pandas Deep Dive")
    .replace("React Basics", "Machine Learning Basics")
    .replace("Node.js & Express", "Model Deployment Basics")
    .replace("Databases", "SQL & Data Warehousing")
    .replace("Full Stack Integration", "End-to-End ML Pipeline")
    .replace("Auth & Security", "Model Monitoring & Ethics")
    .replace("Deployment & Portfolio", "Data Science Portfolio"),
  tag: "Data"
}));

const baseCyberWeeks = baseFullstackWeeks.map(w => ({
  ...w,
  title: w.title
    .replace("HTML Foundations", "Security Fundamentals")
    .replace("CSS Basics & Layout", "Networking Basics")
    .replace("Responsive Design", "Linux & CLI")
    .replace("JavaScript Fundamentals", "Threats & Vulnerabilities")
    .replace("DOM & Interactivity", "Web Security Basics")
    .replace("Modern JS & ES6", "Secure Coding")
    .replace("React Basics", "Penetration Testing Basics")
    .replace("Node.js & Express", "Network Security")
    .replace("Databases", "Database Security")
    .replace("Full Stack Integration", "Red Team vs Blue Team")
    .replace("Auth & Security", "Advanced Security & IAM")
    .replace("Deployment & Portfolio", "Cybersecurity Portfolio"),
  tag: "Security"
}));

const courses = {
  fullstack: baseFullstackWeeks,
  datascience: baseDataScienceWeeks,
  cybersecurity: baseCyberWeeks
};

/* ============================================================
   DAILY TASK THEMES
============================================================ */
const weeklyTaskThemes = {
  fullstack: {
    1: "HTML",
    2: "CSS",
    3: "Responsive Design",
    4: "JavaScript",
    5: "DOM",
    6: "ES6",
    7: "React",
    8: "Node.js",
    9: "Database",
    10: "Full Stack",
    11: "Authentication",
    12: "Deployment"
  },
  datascience: {
    1: "Python Basics",
    2: "Data Visualization",
    3: "Data Cleaning",
    4: "Python for Data",
    5: "EDA",
    6: "NumPy & Pandas",
    7: "Machine Learning",
    8: "Model Deployment",
    9: "SQL",
    10: "ML Pipelines",
    11: "Monitoring",
    12: "Portfolio"
  },
  cybersecurity: {
    1: "Security Fundamentals",
    2: "Networking",
    3: "Linux & CLI",
    4: "Threats & Vulns",
    5: "Web Security",
    6: "Secure Coding",
    7: "Pentesting",
    8: "Network Security",
    9: "DB Security",
    10: "Red vs Blue",
    11: "IAM",
    12: "Portfolio"
  }
};

/* ============================================================
   DAILY TASK GENERATOR
============================================================ */
function generateDailyTasks(courseName, weekNumber) {
  const theme = weeklyTaskThemes[courseName][weekNumber];

  const baseTasks = [
    `Study ${theme} fundamentals`,
    `Practice ${theme} exercises`,
    `Build a small ${theme} example`,
    `Review ${theme} concepts`,
    `Reflect on ${theme} progress`
  ];

  const days = [];

  for (let d = 1; d <= 7; d++) {
    days.push({
      day: d,
      tasks: baseTasks.map((t, i) => `${t} (Day ${d}, Task ${i + 1})`)
    });
  }

  return days;
}

/* ============================================================
   LONG NOTES FOR WEEKS 1–12 (FULLSTACK)
============================================================ */
const longNotes = {
  fullstack: {
    1: `
<h2>Week 1 – HTML Foundations</h2>
<p>This week is about understanding the skeleton of the web. HTML is the structure that everything else sits on top of. If you get this right, CSS and JavaScript become much easier to reason about.</p>
<h3>What You Learn</h3>
<ul>
  <li>How an HTML document is structured from top to bottom.</li>
  <li>Why semantic tags matter for accessibility and SEO.</li>
  <li>How to build a simple but meaningful page layout.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Basic Structure</h4>
<p>You focus on the core tags: <code>&lt;!DOCTYPE html&gt;</code>, <code>&lt;html&gt;</code>, <code>&lt;head&gt;</code>, and <code>&lt;body&gt;</code>. The goal is to understand how the browser reads your document and where visible vs. invisible content lives.</p>
<h4>Day 2 – Text & Headings</h4>
<p>You work with headings (<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code>), paragraphs, and emphasis tags like <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code>. You learn how heading hierarchy shapes the outline of your page.</p>
<h4>Day 3 – Links & Images</h4>
<p>You connect pages with <code>&lt;a&gt;</code> and embed images with <code>&lt;img&gt;</code>. You also learn why the <code>alt</code> attribute is critical for accessibility and what makes a good description.</p>
<h4>Day 4 – Lists</h4>
<p>You practice ordered (<code>&lt;ol&gt;</code>) and unordered (<code>&lt;ul&gt;</code>) lists, and list items (<code>&lt;li&gt;</code>). You see how lists power navigation menus, steps, and grouped content.</p>
<h4>Day 5 – Semantic Structure</h4>
<p>You explore HTML5 semantic tags like <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;footer&gt;</code>. You learn how they give meaning to your layout beyond just visual appearance.</p>
<h4>Day 6 – Attributes</h4>
<p>You dive into attributes like <code>id</code>, <code>class</code>, <code>title</code>, <code>lang</code>, and <code>disabled</code>. You see how attributes give elements identity, behavior, and metadata that other technologies (CSS, JS, screen readers) rely on.</p>
<h4>Day 7 – Accessibility & Best Practices</h4>
<p>You tie everything together by thinking about real users. You learn why heading order matters, how <code>alt</code> text supports screen readers, and how to write HTML that is both clean and inclusive.</p>
<p>By the end of this week, you should be able to build a simple, well-structured page that feels intentional rather than accidental.</p>
`,
    2: `
<h2>Week 2 – CSS Basics & Layout</h2>
<p>This week is about turning bare HTML into something that feels designed. You’ll learn how CSS controls color, spacing, typography, and layout, and how small changes can dramatically affect readability.</p>
<h3>What You Learn</h3>
<ul>
  <li>The CSS box model and how it affects every element.</li>
  <li>How to target elements with selectors.</li>
  <li>How to create simple layouts using Flexbox.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Selectors & Basic Styling</h4>
<p>You learn how to select elements by tag, class, and id. You experiment with colors, fonts, and basic text styling to see how CSS cascades and overrides work.</p>
<h4>Day 2 – Box Model</h4>
<p>You focus on margin, padding, border, and content. You learn how these pieces interact and why elements sometimes don’t sit where you expect.</p>
<h4>Day 3 – Display & Positioning Basics</h4>
<p>You explore <code>display</code> values like <code>block</code>, <code>inline</code>, and <code>inline-block</code>, and get a first taste of positioning concepts.</p>
<h4>Day 4 – Flexbox Fundamentals</h4>
<p>You learn how Flexbox can align and distribute space among items in a container. You practice horizontal and vertical centering, spacing, and wrapping.</p>
<h4>Day 5 – Building a Simple Layout</h4>
<p>You combine selectors, box model, and Flexbox to build a simple landing page layout with a header, main content, and footer.</p>
<h4>Day 6 – Typography & Visual Hierarchy</h4>
<p>You refine font sizes, weights, and line heights. You learn how to guide the user’s eye using contrast and spacing.</p>
<h4>Day 7 – Cleanup & Refactor</h4>
<p>You revisit your CSS, remove duplication, group related rules, and start thinking about naming conventions that will scale.</p>
<p>By the end of this week, your pages should feel more intentional, readable, and visually structured.</p>
`,
    3: `
<h2>Week 3 – Responsive Design</h2>
<p>This week is about making your layouts work on real devices: phones, tablets, laptops, and large screens. You’ll learn how to think mobile-first and how to adapt your designs gracefully.</p>
<h3>What You Learn</h3>
<ul>
  <li>How to use media queries to adapt layouts.</li>
  <li>How to use flexible units like %, rem, and vw.</li>
  <li>How to design with constraints instead of fixed pixels.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Mobile-First Mindset</h4>
<p>You start by designing for small screens first, then progressively enhancing for larger ones. You learn why this approach often leads to cleaner, more focused interfaces.</p>
<h4>Day 2 – Flexible Units</h4>
<p>You experiment with relative units like <code>em</code>, <code>rem</code>, <code>%</code>, and <code>vw</code>/<code>vh</code>. You see how they respond to different screen sizes and user settings.</p>
<h4>Day 3 – Media Queries Basics</h4>
<p>You write your first media queries to change layout and typography at specific breakpoints.</p>
<h4>Day 4 – Responsive Navigation</h4>
<p>You work on making navigation usable on small screens, perhaps using a stacked layout or a simple toggle.</p>
<h4>Day 5 – Responsive Images & Content</h4>
<p>You ensure images scale properly and content doesn’t overflow. You learn to avoid fixed widths that break on small screens.</p>
<h4>Day 6 – Testing Across Devices</h4>
<p>You use browser dev tools to simulate different devices and refine your breakpoints.</p>
<h4>Day 7 – Refine Your Landing Page</h4>
<p>You revisit your earlier layout and make it fully responsive, focusing on readability and usability at every size.</p>
<p>By the end of this week, your pages should feel comfortable on any screen, not just your laptop.</p>
`,
    4: `
<h2>Week 4 – JavaScript Fundamentals</h2>
<p>This week is your first deep dive into programming with JavaScript. You’ll learn how to think in terms of variables, logic, and data, and how to write small scripts that actually do something.</p>
<h3>What You Learn</h3>
<ul>
  <li>Variables, data types, and operators.</li>
  <li>Conditionals and loops.</li>
  <li>Functions and basic problem-solving.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Variables & Types</h4>
<p>You learn about <code>let</code>, <code>const</code>, and primitive types like strings, numbers, and booleans. You practice storing and logging values.</p>
<h4>Day 2 – Operators & Expressions</h4>
<p>You explore arithmetic, comparison, and logical operators, and see how they combine to form expressions.</p>
<h4>Day 3 – Conditionals</h4>
<p>You write <code>if</code>/<code>else</code> statements to make decisions in your code based on conditions.</p>
<h4>Day 4 – Loops</h4>
<p>You practice <code>for</code> and <code>while</code> loops to repeat actions over arrays or ranges of numbers.</p>
<h4>Day 5 – Functions</h4>
<p>You define reusable functions, pass parameters, and return values. You start breaking problems into smaller pieces.</p>
<h4>Day 6 – Arrays & Objects</h4>
<p>You learn how to group related data using arrays and objects, and how to access and modify their contents.</p>
<h4>Day 7 – Mini Scripts</h4>
<p>You build small scripts (like a simple calculator or counter) to connect all the concepts together.</p>
<p>By the end of this week, you should feel more comfortable reading and writing basic JavaScript.</p>
`,
    5: `
<h2>Week 5 – DOM & Interactivity</h2>
<p>This week is about connecting your JavaScript logic to the actual page. You’ll learn how to select elements, respond to user actions, and update the UI dynamically.</p>
<h3>What You Learn</h3>
<ul>
  <li>How to select and manipulate DOM elements.</li>
  <li>How to listen for and handle events.</li>
  <li>How to build small interactive features.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – DOM Selection</h4>
<p>You use <code>document.querySelector</code> and <code>querySelectorAll</code> to grab elements and inspect them.</p>
<h4>Day 2 – Changing Content & Styles</h4>
<p>You modify text, attributes, and classes to change how elements look and behave.</p>
<h4>Day 3 – Events Basics</h4>
<p>You attach event listeners for clicks, input changes, and other user actions.</p>
<h4>Day 4 – Forms & Inputs</h4>
<p>You read values from inputs and respond to form submissions.</p>
<h4>Day 5 – Building a Small Interactive Component</h4>
<p>You combine DOM selection, events, and state to build something like a todo list or counter.</p>
<h4>Day 6 – Debugging & Console</h4>
<p>You use the browser console to inspect elements, log values, and debug issues.</p>
<h4>Day 7 – Refine & Organize</h4>
<p>You clean up your code, group related logic, and think about how to keep your scripts maintainable.</p>
<p>By the end of this week, your pages should feel alive and responsive to user actions.</p>
`,
    6: `
<h2>Week 6 – Modern JS & ES6</h2>
<p>This week is about writing JavaScript the way it’s written today. You’ll learn modern syntax that makes your code cleaner, more expressive, and easier to maintain.</p>
<h3>What You Learn</h3>
<ul>
  <li>Arrow functions and block-scoped variables.</li>
  <li>Template literals and destructuring.</li>
  <li>Modules and cleaner code organization.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – let & const</h4>
<p>You replace older <code>var</code> usage with <code>let</code> and <code>const</code>, and understand why block scoping matters.</p>
<h4>Day 2 – Arrow Functions</h4>
<p>You rewrite functions using arrow syntax and see where it shines and where to be careful.</p>
<h4>Day 3 – Template Literals</h4>
<p>You use backticks and interpolation to build strings more cleanly.</p>
<h4>Day 4 – Destructuring</h4>
<p>You unpack arrays and objects into variables in a concise way.</p>
<h4>Day 5 – Spread & Rest</h4>
<p>You use spread and rest operators to merge, copy, and handle variable arguments.</p>
<h4>Day 6 – Modules Basics</h4>
<p>You learn the idea of splitting code into modules and importing/exporting pieces.</p>
<h4>Day 7 – Refactor Old Code</h4>
<p>You revisit earlier scripts and modernize them using ES6 features.</p>
<p>By the end of this week, your JavaScript should feel more modern and expressive.</p>
`,
    7: `
<h2>Week 7 – React Basics</h2>
<p>This week introduces you to React, a component-based way of building user interfaces. You’ll learn how to think in components and manage simple state.</p>
<h3>What You Learn</h3>
<ul>
  <li>What components are and how they render.</li>
  <li>How props and state work.</li>
  <li>How to build a small React app.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – React Mental Model</h4>
<p>You learn what React is solving and how it differs from manipulating the DOM directly.</p>
<h4>Day 2 – Components</h4>
<p>You create simple functional components and render them.</p>
<h4>Day 3 – Props</h4>
<p>You pass data into components via props and reuse them.</p>
<h4>Day 4 – State</h4>
<p>You use state to track changing data and re-render the UI.</p>
<h4>Day 5 – Events in React</h4>
<p>You handle user interactions like clicks and input changes inside components.</p>
<h4>Day 6 – Small React App</h4>
<p>You build a small app (like a todo list or counter) using multiple components.</p>
<h4>Day 7 – Cleanup & Structure</h4>
<p>You organize your components, think about naming, and reflect on how React changes your approach to UI.</p>
<p>By the end of this week, React should feel less mysterious and more like a tool you can actually use.</p>
`,
    8: `
<h2>Week 8 – Node.js & Express</h2>
<p>This week moves you to the backend. You’ll learn how to run JavaScript on the server, handle requests, and send responses.</p>
<h3>What You Learn</h3>
<ul>
  <li>How Node.js runs JavaScript outside the browser.</li>
  <li>How Express helps you build HTTP APIs.</li>
  <li>How to define routes and send JSON responses.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Node Basics</h4>
<p>You install Node, run simple scripts, and understand the runtime environment.</p>
<h4>Day 2 – Intro to Express</h4>
<p>You set up an Express server and respond to basic routes.</p>
<h4>Day 3 – Route Parameters & Query Strings</h4>
<p>You read data from the URL and respond dynamically.</p>
<h4>Day 4 – JSON APIs</h4>
<p>You send and receive JSON, building simple API endpoints.</p>
<h4>Day 5 – Middleware Basics</h4>
<p>You learn how middleware functions can transform requests and responses.</p>
<h4>Day 6 – Error Handling</h4>
<p>You add basic error handling and structured responses.</p>
<h4>Day 7 – Reflect & Document</h4>
<p>You document your API routes and think about how the frontend will consume them.</p>
<p>By the end of this week, you’ll have a basic but real backend running.</p>
`,
    9: `
<h2>Week 9 – Databases</h2>
<p>This week is about storing data so it persists beyond a single request. You’ll learn how to connect your backend to a database and perform CRUD operations.</p>
<h3>What You Learn</h3>
<ul>
  <li>What databases are and why they matter.</li>
  <li>How to create, read, update, and delete data.</li>
  <li>How to connect your API to a database.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Database Concepts</h4>
<p>You learn about tables/collections, records/documents, and basic terminology.</p>
<h4>Day 2 – Connecting to a DB</h4>
<p>You connect your Node/Express app to a database (SQL or NoSQL).</p>
<h4>Day 3 – Create & Read</h4>
<p>You implement endpoints to create and fetch data.</p>
<h4>Day 4 – Update & Delete</h4>
<p>You add endpoints to update and remove records.</p>
<h4>Day 5 – Basic Validation</h4>
<p>You ensure only valid data is stored, adding simple checks.</p>
<h4>Day 6 – Relationships / Joins (or References)</h4>
<p>You explore how related data is modeled and queried.</p>
<h4>Day 7 – Review & Cleanup</h4>
<p>You review your schema, indexes (if any), and performance basics.</p>
<p>By the end of this week, your app can store and retrieve real data.</p>
`,
    10: `
<h2>Week 10 – Full Stack Integration</h2>
<p>This week is about connecting your frontend and backend into a single, coherent application. You’ll make your UI talk to your API and handle real data flows.</p>
<h3>What You Learn</h3>
<ul>
  <li>How to call APIs from the frontend.</li>
  <li>How to handle loading and error states.</li>
  <li>How to think about data flow end-to-end.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Fetching Data</h4>
<p>You use <code>fetch</code> or a similar tool to call your backend from the frontend.</p>
<h4>Day 2 – Rendering API Data</h4>
<p>You display data from the server in your UI and handle empty states.</p>
<h4>Day 3 – Sending Data</h4>
<p>You send form data to your backend and update the UI based on the response.</p>
<h4>Day 4 – Loading & Error States</h4>
<p>You show spinners, messages, and fallbacks when things are slow or fail.</p>
<h4>Day 5 – Authentication Hooks</h4>
<p>You start thinking about how auth will fit into your full stack flow.</p>
<h4>Day 6 – Small Full Stack Feature</h4>
<p>You build a small feature that touches both frontend and backend.</p>
<h4>Day 7 – Review & Refine</h4>
<p>You clean up your code, remove duplication, and document how data flows through your app.</p>
<p>By the end of this week, you’ll have a real full stack feature working end-to-end.</p>
`,
    11: `
<h2>Week 11 – Auth & Security</h2>
<p>This week is about protecting your app and your users. You’ll learn how to handle authentication and basic security practices.</p>
<h3>What You Learn</h3>
<ul>
  <li>How to implement login and signup flows.</li>
  <li>How to protect routes and sensitive data.</li>
  <li>How to store passwords safely.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Auth Concepts</h4>
<p>You learn the difference between authentication and authorization, and common patterns.</p>
<h4>Day 2 – Signup Flow</h4>
<p>You build a signup endpoint and store hashed passwords.</p>
<h4>Day 3 – Login Flow</h4>
<p>You verify credentials and issue some form of session or token.</p>
<h4>Day 4 – Protected Routes</h4>
<p>You restrict certain endpoints to authenticated users only.</p>
<h4>Day 5 – Frontend Auth State</h4>
<p>You track whether a user is logged in and adjust the UI accordingly.</p>
<h4>Day 6 – Basic Security Practices</h4>
<p>You learn about common vulnerabilities and how to avoid them at a basic level.</p>
<h4>Day 7 – Review & Harden</h4>
<p>You review your auth flow, look for weak spots, and document how it works.</p>
<p>By the end of this week, your app should feel more secure and user-aware.</p>
`,
    12: `
<h2>Week 12 – Deployment & Portfolio</h2>
<p>This week is about shipping. You’ll learn how to deploy your app, polish your project, and present your work in a way that others can understand and appreciate.</p>
<h3>What You Learn</h3>
<ul>
  <li>How to deploy your frontend and backend.</li>
  <li>How to polish your main project.</li>
  <li>How to present your work in a portfolio.</li>
</ul>
<h3>Daily Task Breakdown</h3>
<h4>Day 1 – Deployment Options</h4>
<p>You explore hosting options for frontend and backend and pick one to try.</p>
<h4>Day 2 – Deploy Frontend</h4>
<p>You deploy your frontend and make sure it’s accessible via a public URL.</p>
<h4>Day 3 – Deploy Backend</h4>
<p>You deploy your backend and connect it to your frontend.</p>
<h4>Day 4 – Polish Your Main Project</h4>
<p>You refine UI details, fix small bugs, and improve copy.</p>
<h4>Day 5 – Documentation</h4>
<p>You write a clear README explaining what your project does and how to run it.</p>
<h4>Day 6 – Portfolio Page</h4>
<p>You create or update a portfolio page showcasing your main project and what you learned.</p>
<h4>Day 7 – Reflection</h4>
<p>You reflect on your 12-week journey, what you built, and what you want to tackle next.</p>
<p>By the end of this week, you’ll have something real you can show to others—and to yourself—as proof of your progress.</p>
`
  }
};

/* ============================================================
   DAILY TASK NOTES (Week 1 example)
============================================================ */
const dailyTaskNotes = {
  fullstack: {
    1: {
      1: [
        "Learn the purpose of <!DOCTYPE html> and how browsers interpret HTML structure.",
        "Understand the difference between <head> and <body>.",
        "Practice writing a clean HTML skeleton.",
        "Review how browsers parse HTML documents.",
        "Reflect on how structure affects accessibility."
      ],
      2: [
        "Learn heading hierarchy and why <h1> should be unique.",
        "Practice writing paragraphs and formatting text.",
        "Understand semantic meaning of <strong> and <em>.",
        "Review how headings affect SEO.",
        "Reflect on readability and text flow."
      ],
      3: [
        "Learn how <a> links connect pages.",
        "Understand <img> and the importance of alt text.",
        "Practice embedding images.",
        "Review link attributes like target.",
        "Reflect on accessibility for images."
      ],
      4: [
        "Learn <ul> vs <ol> and when to use each.",
        "Practice creating nested lists.",
        "Understand list semantics.",
        "Review how lists structure content.",
        "Reflect on navigation menus using lists."
      ],
      5: [
        "Learn semantic tags like <header>, <nav>, <main>.",
        "Understand why semantics matter.",
        "Practice structuring a page with sections.",
        "Review accessibility benefits.",
        "Reflect on clean layout structure."
      ],
      6: [
        "Learn id vs class.",
        "Understand global attributes.",
        "Practice using title and lang.",
        "Review attribute best practices.",
        "Reflect on how attributes support CSS/JS."
      ],
      7: [
        "Learn accessibility basics.",
        "Understand heading order.",
        "Practice writing alt text.",
        "Review label associations.",
        "Reflect on inclusive design."
      ]
    }
  }
};

/* ============================================================
   QUIZ DATA (Week 1 example)
============================================================ */
const quizData = {
  fullstack: {
    1: {
      1: [
        {
          id: "fs_w1_d1_q1",
          question: "What tag defines the root element of an HTML document?",
          answer: "html",
          explanation: "The <html> tag is the root element that wraps all content in an HTML document."
        },
        {
          id: "fs_w1_d1_q2",
          question: "Which tag contains metadata like the page title and linked stylesheets?",
          answer: "head",
          explanation: "The <head> element contains metadata, including <title>, <meta>, and <link> tags."
        },
        {
          id: "fs_w1_d1_q3",
          question: "Which tag wraps all visible content on the page?",
          answer: "body",
          explanation: "The <body> element contains all the visible content of the page."
        },
        {
          id: "fs_w1_d1_q4",
          question: "What declaration tells the browser to use HTML5?",
          answer: "!doctype html",
          explanation: "<!DOCTYPE html> declares the document type and HTML version (HTML5)."
        },
        {
          id: "fs_w1_d1_q5",
          question: "Which tag sets the text shown in the browser tab?",
          answer: "title",
          explanation: "The <title> element inside <head> defines the text shown in the browser tab."
        }
      ],
      2: [
        {
          id: "fs_w1_d2_q1",
          question: "Which tag is used for the largest heading on a page?",
          answer: "h1",
          explanation: "<h1> is used for the main heading and should usually appear once per page."
        },
        {
          id: "fs_w1_d2_q2",
          question: "Which tag is used to define a paragraph of text?",
          answer: "p",
          explanation: "The <p> tag defines a paragraph of text."
        },
        {
          id: "fs_w1_d2_q3",
          question: "Which tag indicates strong importance and is typically rendered bold?",
          answer: "strong",
          explanation: "<strong> indicates strong importance and is usually rendered in bold."
        },
        {
          id: "fs_w1_d2_q4",
          question: "Which tag is used to emphasize text, often rendered in italics?",
          answer: "em",
          explanation: "<em> emphasizes text and is typically rendered in italics."
        },
        {
          id: "fs_w1_d2_q5",
          question: "Which heading level should be used for a subheading under an <h1>?",
          answer: "h2",
          explanation: "<h2> is used for subheadings under the main <h1> heading."
        }
      ],
      3: [
        {
          id: "fs_w1_d3_q1",
          question: "Which tag is used to create a hyperlink?",
          answer: "a",
          explanation: "The <a> tag defines a hyperlink."
        },
        {
          id: "fs_w1_d3_q2",
          question: "Which attribute on <a> specifies the link destination?",
          answer: "href",
          explanation: "The href attribute defines the URL the link points to."
        },
        {
          id: "fs_w1_d3_q3",
          question: "Which tag is used to embed an image in a page?",
          answer: "img",
          explanation: "The <img> tag embeds an image into the page."
        },
        {
          id: "fs_w1_d3_q4",
          question: "Which attribute on <img> provides alternative text for accessibility?",
          answer: "alt",
          explanation: "The alt attribute describes the image for screen readers and when the image cannot load."
        },
        {
          id: "fs_w1_d3_q5",
          question: "Which attribute on <a> makes a link open in a new tab?",
          answer: "target",
          explanation: "Using target=\"_blank\" on <a> opens the link in a new tab."
        }
      ],
      4: [
        {
          id: "fs_w1_d4_q1",
          question: "Which tag creates an unordered (bulleted) list?",
          answer: "ul",
          explanation: "The <ul> tag creates an unordered list."
        },
        {
          id: "fs_w1_d4_q2",
          question: "Which tag creates an ordered (numbered) list?",
          answer: "ol",
          explanation: "The <ol> tag creates an ordered list."
        },
        {
          id: "fs_w1_d4_q3",
          question: "Which tag represents an item inside a list?",
          answer: "li",
          explanation: "The <li> tag defines a list item."
        },
        {
          id: "fs_w1_d4_q4",
          question: "Which list type is best for steps that must be followed in order?",
          answer: "ol",
          explanation: "An ordered list (<ol>) is best for sequences or steps."
        },
        {
          id: "fs_w1_d4_q5",
          question: "Can you nest one list inside another list item? Answer 'yes' or 'no'.",
          answer: "yes",
          explanation: "Yes, lists can be nested by placing a <ul> or <ol> inside an <li>."
        }
      ],
      5: [
        {
          id: "fs_w1_d5_q1",
          question: "Which semantic tag is typically used for the top section of a page or section?",
          answer: "header",
          explanation: "<header> represents introductory content or a group of navigational links."
        },
        {
          id: "fs_w1_d5_q2",
          question: "Which semantic tag represents the main content of a page?",
          answer: "main",
          explanation: "<main> contains the dominant content of the document."
        },
        {
          id: "fs_w1_d5_q3",
          question: "Which semantic tag is used for a standalone section of related content?",
          answer: "section",
          explanation: "<section> groups related content, typically with a heading."
        },
        {
          id: "fs_w1_d5_q4",
          question: "Which semantic tag is used for navigation links?",
          answer: "nav",
          explanation: "<nav> represents a section of navigation links."
        },
        {
          id: "fs_w1_d5_q5",
          question: "Which semantic tag is used for content at the bottom of a page or section?",
          answer: "footer",
          explanation: "<footer> represents footer content for its nearest sectioning content or root."
        }
      ],
      6: [
        {
          id: "fs_w1_d6_q1",
          question: "Which attribute assigns a unique identifier to an element?",
          answer: "id",
          explanation: "The id attribute gives an element a unique identifier."
        },
        {
          id: "fs_w1_d6_q2",
          question: "Which attribute assigns one or more CSS classes to an element?",
          answer: "class",
          explanation: "The class attribute assigns one or more class names to an element."
        },
        {
          id: "fs_w1_d6_q3",
          question: "Which attribute provides additional information shown as a tooltip on hover?",
          answer: "title",
          explanation: "The title attribute shows a tooltip when the user hovers over the element."
        },
        {
          id: "fs_w1_d6_q4",
          question: "Which attribute on form controls prevents user interaction?",
          answer: "disabled",
          explanation: "The disabled attribute prevents user interaction with a form control."
        },
        {
          id: "fs_w1_d6_q5",
          question: "Which attribute on <html> declares the document language?",
          answer: "lang",
          explanation: "The lang attribute on <html> declares the language of the document."
        }
      ],
      7: [
        {
          id: "fs_w1_d7_q1",
          question: "What does the alt attribute primarily improve for users?",
          answer: "accessibility",
          explanation: "The alt attribute improves accessibility by describing images for screen readers."
        },
        {
          id: "fs_w1_d7_q2",
          question: "Why should heading levels be used in order (h1, h2, h3...)? Answer with one word.",
          answer: "structure",
          explanation: "Proper heading order preserves document structure and accessibility."
        },
        {
          id: "fs_w1_d7_q3",
          question: "Which tag groups related form controls and labels together?",
          answer: "fieldset",
          explanation: "<fieldset> groups related form controls and labels."
        },
        {
          id: "fs_w1_d7_q4",
          question: "Which attribute associates a label with a specific form control by id?",
          answer: "for",
          explanation: "The for attribute on <label> links it to a form control by id."
        },
        {
          id: "fs_w1_d7_q5",
          question: "Should you skip heading levels (e.g., from h1 to h4)? Answer 'yes' or 'no'.",
          answer: "no",
          explanation: "You should not skip heading levels to maintain a logical structure."
        }
      ]
    }
  },
  datascience: {},
  cybersecurity: {}
};

/* ============================================================
   LOCAL STORAGE
============================================================ */
let currentCourse = "fullstack";

function getCompletionKey() {
  return `completion_${currentCourse}`;
}

function getDailyKey() {
  return `daily_${currentCourse}`;
}

function getQuizKey() {
  return `quiz_${currentCourse}`;
}

let completionState = [];
let dailyState = {};
let quizState = {};

function loadProgressForCourse() {
  completionState = JSON.parse(localStorage.getItem(getCompletionKey()) || "[]");
  if (!Array.isArray(completionState) || completionState.length !== 12) {
    completionState = new Array(12).fill(false);
  }

  dailyState = JSON.parse(localStorage.getItem(getDailyKey()) || "{}");
  quizState = JSON.parse(localStorage.getItem(getQuizKey()) || "{}");
}

function saveCompletion() {
  localStorage.setItem(getCompletionKey(), JSON.stringify(completionState));
}

function saveDailyState() {
  localStorage.setItem(getDailyKey(), JSON.stringify(dailyState));
}

function saveQuizState() {
  localStorage.setItem(getQuizKey(), JSON.stringify(quizState));
}

/* ============================================================
   THEME TOGGLE
============================================================ */
const body = document.body;
const themeToggleBtn = document.getElementById("theme-toggle");
const THEME_KEY = "multi_course_theme";

function applyTheme(theme) {
  body.setAttribute("data-theme", theme);
  themeToggleBtn.textContent = theme === "dark" ? "🌙 Dark" : "☀️ Light";
}

const storedTheme = localStorage.getItem(THEME_KEY) || "dark";
applyTheme(storedTheme);

themeToggleBtn.onclick = () => {
  const current = body.getAttribute("data-theme") || "dark";
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
  localStorage.setItem(THEME_KEY, next);
};

/* ============================================================
   RENDERING
============================================================ */
const timelineEl = document.querySelector(".timeline");
const progressFill = document.getElementById("progress-fill");
const progressPercent = document.getElementById("progress-percent");

function renderWeeks(weeksArray) {
  timelineEl.innerHTML = "";

  weeksArray.forEach((week, index) => {
    const card = document.createElement("article");
    card.className = "week-card";

    if (completionState[index]) card.classList.add("completed");

    const header = document.createElement("div");
    header.className = "week-header";

    const title = document.createElement("div");
    title.className = "week-title";
    title.textContent = `Week ${week.week}: ${week.title}`;

    const focus = document.createElement("div");
    focus.className = "week-focus";
    focus.textContent = week.focus;

    header.appendChild(title);
    header.appendChild(focus);

    const bodyEl = document.createElement("div");
    bodyEl.className = "week-body";

    const ul = document.createElement("ul");
    week.bullets.forEach((b) => {
      const li = document.createElement("li");
      li.textContent = b;
      ul.appendChild(li);
    });

    bodyEl.appendChild(ul);

    const dailyBtn = document.createElement("button");
    dailyBtn.className = "daily-btn";
    dailyBtn.textContent = "Daily Tasks";
    dailyBtn.onclick = () => openDailyPopup(week.week);
    bodyEl.appendChild(dailyBtn);

    const quizBtn = document.createElement("button");
    quizBtn.className = "daily-btn";
    quizBtn.textContent = "Quiz";
    quizBtn.onclick = () => openQuizPopup(week.week);
    bodyEl.appendChild(quizBtn);

    const videoBtn = document.createElement("button");
    videoBtn.className = "daily-btn video-btn";
    videoBtn.innerHTML = "📺 Video";
    videoBtn.onclick = () => openWeekVideoPopup(week.week);
    bodyEl.appendChild(videoBtn);

    const links = document.createElement("div");
    links.className = "card-links";

    const notesBtn = document.createElement("button");
    notesBtn.className = "card-link-btn";
    notesBtn.textContent = "Notes";
    notesBtn.onclick = () => openNotePopup(week.week);
    links.appendChild(notesBtn);

    bodyEl.appendChild(links);

    const footer = document.createElement("div");
    footer.className = "week-footer";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = week.tag;

    const actions = document.createElement("div");
    actions.className = "week-actions";

    const label = document.createElement("label");
    label.className = "checkbox-label";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completionState[index];

    checkbox.onchange = () => {
      completionState[index] = checkbox.checked;
      card.classList.toggle("completed", checkbox.checked);
      saveCompletion();
      updateProgress();
    };

    const checkText = document.createElement("span");
    checkText.textContent = "Done";

    label.appendChild(checkbox);
    label.appendChild(checkText);

    const detailsBtn = document.createElement("button");
    detailsBtn.className = "details-btn";
    detailsBtn.textContent = "Details";

    const details = document.createElement("div");
    details.className = "week-details";
    details.textContent = week.details;

    detailsBtn.onclick = () => {
      const visible = details.style.display === "block";
      details.style.display = visible ? "none" : "block";
      detailsBtn.textContent = visible ? "Details" : "Hide";
    };

    actions.appendChild(label);
    actions.appendChild(detailsBtn);

    footer.appendChild(tag);
    footer.appendChild(actions);

    card.appendChild(header);
    card.appendChild(bodyEl);
    card.appendChild(footer);
    card.appendChild(details);

    timelineEl.appendChild(card);
  });
}

/* ============================================================
   PROGRESS BAR
============================================================ */
function updateProgress() {
  const totalWeeks = 12;
  const completedWeeks = completionState.filter(Boolean).length;

  let totalDaily = 0;
  let completedDaily = 0;

  Object.values(dailyState).forEach((weekObj) => {
    Object.values(weekObj).forEach((dayArr) => {
      totalDaily += 5;
      completedDaily += dayArr.filter(Boolean).length;
    });
  });

  let totalQuiz = 0;
  let completedQuiz = 0;

  Object.values(quizState).forEach(weekObj => {
    Object.values(weekObj).forEach(dayObj => {
      Object.values(dayObj).forEach(q => {
        totalQuiz += 1;
        if (q.correct) completedQuiz += 1;
      });
    });
  });

  const percent = Math.round(
    ((completedWeeks + completedDaily / 5 + completedQuiz / 5) /
      (totalWeeks + totalDaily / 5 + (totalQuiz / 5 || 0.0001))) *
      100
  );

  progressFill.style.width = `${percent}%`;
  progressPercent.textContent = `${percent}%`;
}

/* ============================================================
   DAILY POPUP
============================================================ */
const popupBackdrop = document.getElementById("daily-popup-backdrop");
const popupTitle = document.getElementById("daily-popup-title");
const dailyDaysEl = document.getElementById("daily-days");

document.getElementById("daily-popup-close").onclick =
  document.getElementById("daily-popup-close-btn").onclick =
    () => popupBackdrop.classList.remove("active");

function openDailyPopup(weekNumber) {
  popupTitle.textContent = `Week ${weekNumber} – Daily Tasks (${currentCourse})`;

  if (!dailyState[weekNumber]) {
    dailyState[weekNumber] = {};
  }

  const days = generateDailyTasks(currentCourse, weekNumber);
  dailyDaysEl.innerHTML = "";

  days.forEach((day) => {
    if (!dailyState[weekNumber][day.day]) {
      dailyState[weekNumber][day.day] = new Array(5).fill(false);
    }

    const dayBox = document.createElement("div");
    dayBox.className = "daily-day";

    const h3 = document.createElement("h3");
    h3.textContent = `Day ${day.day}`;
    dayBox.appendChild(h3);

    day.tasks.forEach((task, i) => {
      const taskRow = document.createElement("div");
      taskRow.className = "daily-task-row";

      const taskLabel = document.createElement("label");
      taskLabel.className = "daily-task";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.checked = dailyState[weekNumber][day.day][i];

      input.onchange = () => {
        dailyState[weekNumber][day.day][i] = input.checked;
        saveDailyState();
        updateProgress();
      };

      const span = document.createElement("span");
      span.textContent = task;

      taskLabel.appendChild(input);
      taskLabel.appendChild(span);

      const noteBtn = document.createElement("button");
      noteBtn.className = "task-note-btn";
      noteBtn.textContent = "Notes";
      noteBtn.onclick = () => openDailyTaskNote(weekNumber, day.day, i);

      const videoBtn = document.createElement("button");
      videoBtn.className = "task-video-btn";
      videoBtn.textContent = "Video";
      videoBtn.onclick = () => openDailyTaskVideo(weekNumber, day.day, i);

      taskRow.appendChild(taskLabel);
      taskRow.appendChild(noteBtn);
      taskRow.appendChild(videoBtn);

      dayBox.appendChild(taskRow);
    });

    dailyDaysEl.appendChild(dayBox);
  });

  popupBackdrop.classList.add("active");
}

/* ============================================================
   QUIZ POPUP
============================================================ */
const quizBackdrop = document.getElementById("quiz-popup-backdrop");
const quizTitle = document.getElementById("quiz-popup-title");
const quizContent = document.getElementById("quiz-content");

document.getElementById("quiz-popup-close").onclick =
  document.getElementById("quiz-popup-close-btn").onclick =
    () => quizBackdrop.classList.remove("active");

function openQuizPopup(weekNumber) {
  quizTitle.textContent = `Week ${weekNumber} – Quiz (${currentCourse})`;

  if (!quizState[weekNumber]) quizState[weekNumber] = {};

  quizContent.innerHTML = "";

  const weekQuiz = quizData[currentCourse]?.[weekNumber];
  if (!weekQuiz) {
    const msg = document.createElement("div");
    msg.className = "daily-day";
    msg.textContent = "Quiz for this week is not defined yet.";
    quizContent.appendChild(msg);
    quizBackdrop.classList.add("active");
    return;
  }

  Object.keys(weekQuiz).forEach(dayKey => {
    const dayNum = Number(dayKey);
    const dayBox = document.createElement("div");
    dayBox.className = "daily-day";

    const h3 = document.createElement("h3");
    h3.textContent = `Day ${dayNum}`;
    dayBox.appendChild(h3);

    if (!quizState[weekNumber][dayNum]) quizState[weekNumber][dayNum] = {};

    weekQuiz[dayNum].forEach(q => {
      if (!quizState[weekNumber][dayNum][q.id]) {
        quizState[weekNumber][dayNum][q.id] = { correct: false, answer: "" };
      }

      const qWrap = document.createElement("div");
      qWrap.className = "quiz-question";

      const qText = document.createElement("div");
      qText.textContent = q.question;
      qWrap.appendChild(qText);

      const inputRow = document.createElement("div");
      inputRow.className = "quiz-input-row";

      const input = document.createElement("input");
      input.type = "text";
      input.value = quizState[weekNumber][dayNum][q.id].answer || "";

      const checkBtn = document.createElement("button");
      checkBtn.textContent = "Check";

      const result = document.createElement("div");
      result.className = "quiz-result";

      const updateResult = () => {
        const stored = quizState[weekNumber][dayNum][q.id];
        if (!stored.answer) {
          result.textContent = "";
          return;
        }
        if (stored.correct) {
          result.textContent = `✔ Correct. ${q.explanation}`;
          result.style.color = "#22c55e";
        } else {
          result.textContent = `✘ Incorrect. Correct answer: "${q.answer}". ${q.explanation}`;
          result.style.color = "#f97373";
        }
      };

      checkBtn.onclick = () => {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = q.answer.trim().toLowerCase();
        const isCorrect = userAnswer === correctAnswer;

        quizState[weekNumber][dayNum][q.id] = {
          correct: isCorrect,
          answer: input.value.trim()
        };

        saveQuizState();
        updateResult();
        updateProgress();
      };

      input.addEventListener("change", () => {
        quizState[weekNumber][dayNum][q.id].answer = input.value.trim();
        saveQuizState();
      });

      inputRow.appendChild(input);
      inputRow.appendChild(checkBtn);
      qWrap.appendChild(inputRow);
      qWrap.appendChild(result);

      updateResult();

      dayBox.appendChild(qWrap);
    });

    quizContent.appendChild(dayBox);
  });

  quizBackdrop.classList.add("active");
}

/* ============================================================
   LONG NOTE POPUP
============================================================ */
const noteBackdrop = document.getElementById("note-popup-backdrop");
const noteTitle = document.getElementById("note-popup-title");
const noteContent = document.getElementById("note-content");

document.getElementById("note-popup-close").onclick =
  document.getElementById("note-popup-close-btn").onclick =
    () => noteBackdrop.classList.remove("active");

function openNotePopup(weekNumber) {
  noteTitle.textContent = `Week ${weekNumber} – Notes (${currentCourse})`;

  const notes = longNotes[currentCourse]?.[weekNumber];

  noteContent.innerHTML = "";

  const box = document.createElement("div");
  box.className = "daily-day";
  box.innerHTML = notes || "No notes available for this week.";

  noteContent.appendChild(box);

  noteBackdrop.classList.add("active");
}

/* ============================================================
   DAILY TASK NOTE POPUP
============================================================ */
const taskNoteBackdrop = document.getElementById("task-note-popup-backdrop");
const taskNoteTitle = document.getElementById("task-note-title");
const taskNoteContent = document.getElementById("task-note-content");

document.getElementById("task-note-close").onclick =
  document.getElementById("task-note-close-btn").onclick =
    () => taskNoteBackdrop.classList.remove("active");

function openDailyTaskNote(week, day, taskIndex) {
  taskNoteTitle.textContent = `Week ${week} – Day ${day} Task Notes`;

  const note = dailyTaskNotes[currentCourse]?.[week]?.[day]?.[taskIndex];

  taskNoteContent.innerHTML = "";

  const box = document.createElement("div");
  box.className = "daily-day";
  box.innerHTML = note || "No notes available.";

  taskNoteContent.appendChild(box);

  taskNoteBackdrop.classList.add("active");
}

/* ============================================================
   DAILY TASK VIDEO HANDLER
============================================================ */
function openDailyTaskVideo(week, day, taskIndex) {
  const url = `https://www.youtube.com/results?search_query=Week+${week}+Day+${day}+${currentCourse}+tutorial`;
  window.open(url, "_blank");
}

/* ============================================================
   WEEK VIDEO POPUP
============================================================ */
const videoBackdrop = document.getElementById("video-popup-backdrop");
const videoFrame = document.getElementById("video-frame");
const videoTitle = document.getElementById("video-popup-title");

document.getElementById("video-popup-close").onclick =
document.getElementById("video-popup-close-btn").onclick =
  () => closeWeekVideoPopup();

function openWeekVideoPopup(weekNumber) {
  videoTitle.textContent = `Week ${weekNumber} – Video Lesson`;

  const url = `https://www.youtube.com/embed?listType=search&list=Week+${weekNumber}+${currentCourse}+tutorial`;

  videoFrame.src = url;
  videoBackdrop.classList.add("active");
}

function closeWeekVideoPopup() {
  videoBackdrop.classList.remove("active");
  videoFrame.src = "";
}

/* ============================================================
   VIEW MODE TOGGLE
============================================================ */
const gridBtn = document.getElementById("grid-view");
const scrollBtn = document.getElementById("scroll-view");

gridBtn.onclick = () => {
  timelineEl.classList.remove("scroll-mode");
  gridBtn.classList.add("active");
  scrollBtn.classList.remove("active");
};

scrollBtn.onclick = () => {
  timelineEl.classList.add("scroll-mode");
  scrollBtn.classList.add("active");
  gridBtn.classList.remove("active");
  setTimeout(updateActiveCard, 200);
};

/* ============================================================
   SCROLL VIEW ACTIVE CARD
============================================================ */
function updateActiveCard() {
  if (!timelineEl.classList.contains("scroll-mode")) return;

  const cards = document.querySelectorAll(".week-card");
  const centerX = window.innerWidth / 2;

  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardCenter = rect.left + rect.width / 2;
    const distance = Math.abs(centerX - cardCenter);

    if (distance < rect.width * 0.5) {
      card.classList.add("active");
    } else {
      card.classList.remove("active");
    }
  });
}

timelineEl.addEventListener("scroll", updateActiveCard);
window.addEventListener("resize", updateActiveCard);

/* ============================================================
   COURSE SWITCHING
============================================================ */
document.querySelectorAll(".course-btn").forEach(btn => {
  btn.onclick = () => {
    document.querySelector(".course-btn.active")?.classList.remove("active");
    btn.classList.add("active");

    currentCourse = btn.dataset.course;
    loadCourse();
  };
});

function loadCourse() {
  loadProgressForCourse();
  renderWeeks(courses[currentCourse]);
  updateProgress();
}

/* INITIAL LOAD */
loadCourse();
