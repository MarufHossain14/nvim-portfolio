const COMMANDS = [
  {
    command: ":help",
    description: "List commands",
  },
  {
    command: ":theme",
    description: "Cycle theme",
  },
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "experience",
    description: "My Work Experience",
  },
  {
    command: "resume",
    description: "My Resume",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "links",
    description: "All my links",
  },
  {
    command: "q / :q / :clear / clear",
    description: "Clear the terminal",
  },
];

const THEMES = ["kanagawa", "catppuccin", "rosepine"];

const getCurrentTheme = () => {
  if (typeof document === "undefined") return "kanagawa";
  const stored = window.localStorage.getItem("theme");
  if (stored && THEMES.includes(stored)) return stored;
  const current = document.documentElement.getAttribute("data-theme");
  return THEMES.includes(current) ? current : "kanagawa";
};

const applyTheme = (theme) => {
  if (typeof document === "undefined") return;
  if (theme === "kanagawa") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
  window.localStorage.setItem("theme", theme);
};

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("") +
    `<div class="command">More projects: <a href="https://www.hmaruf.com/projects" target="_blank">hmaruf.com/projects</a></div>`;
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  ":help about": () => CONTENTS.about(),
  ":help projects": () => CONTENTS.projects(),
  ":help contact": () => CONTENTS.contact(),
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Try :help about, :help projects, or :help contact</div>`,
  ":help": () => CONTENTS.help(),
  ":theme": () => {
    const current = getCurrentTheme();
    const currentIndex = THEMES.indexOf(current);
    const nextTheme = THEMES[(currentIndex + 1) % THEMES.length];
    applyTheme(nextTheme);
    return `<div class="command">Theme: <span style="color: var(--secondary)">${nextTheme}</span></div>`;
  },
  about: () => `Hi, I'm Maruf Hossain, a Computer Science & Mathematics student at <a href="https://students.wlu.ca" target="_blank">Wilfrid Laurier University</a> (Waterloo, ON).
    <br/><br/>
    I'm the VP of Engineering at Aippa Health (stealth AI startup), leading backend architecture with FastAPI and PostgreSQL for secure data ingestion and model inference pipelines.
    <br /><br />
    Previously, I interned at Sony Interactive Entertainment and Mitsubishi Motors, building backend tools and connected-car systems. I also led engineering at Qalam Consulting, delivering full-stack products with React and Node.js.
  `,
  education: () => `
  <div class="command"><b>Wilfrid Laurier University</b> - BSc in Computer Science & Mathematics (Winter 2023 - Present)</div>
  <div class="meaning">Selected coursework: Algorithms, Operating Systems, Computer Networks, Databases, Machine Learning, Discrete Mathematics, Linear Algebra II, Probability & Statistical Inference, Optimization</div>
  <div class="meaning">Activities: Operations Lead, Laurier Muslim Students' Association; VP Operations, Laurier Cricket Club</div>
  `,
  skills: () => `
  <div class="skill"><b>Languages</b>: C++, Go, Python, TypeScript, JavaScript, SQL</div>
  <div class="skill"><b>Frameworks & Libraries</b>: FastAPI, Node.js, React, Next.js, Flask, Astro, TanStack Query, Hono</div>
  <div class="skill"><b>Databases & Caching</b>: PostgreSQL, Supabase, SQLite, Redis</div>
  <div class="skill"><b>DevOps & Infrastructure</b>: Docker, Kubernetes (basic), CI/CD (GitHub Actions), Git, Linux</div>
  <div class="skill"><b>Cloud & Deployment</b>: AWS (EC2, S3), Google Cloud Platform, Vercel</div>
  `,
  projects: getProjects,
  experience: () => `
  <div class="command"><b>VP of Engineering</b> - Aippa Health (Stealth AI Startup)</div>
  <div class="meaning">Oct 2025 - Present · Waterloo, ON, Canada</div>
  <div class="meaning">- Led architecture and development of AI-powered backend services using FastAPI and PostgreSQL, enabling secure data ingestion, model inference pipelines, and internal APIs</div>
  <div class="meaning">- Owned backend system design and cloud deployment decisions for an early-stage healthcare platform, balancing rapid iteration with reliability, data integrity, and security requirements</div>
  <br />
  <div class="command"><b>Software Engineering Intern</b> - Sony Interactive Entertainment</div>
  <div class="meaning">May 2025 - Aug 2025 · California, USA (Hybrid)</div>
  <div class="meaning">- Built and enhanced internal backend tools using Python and REST APIs, supporting production workflows used by multiple engineering teams</div>
  <div class="meaning">- Implemented and maintained CI/CD pipelines to automate testing and deployment, improving reliability and reducing manual release overhead for internal services</div>
  <br />
  <div class="command"><b>Software Engineering Intern - Connected Car Systems</b> - Mitsubishi Motors Corporation</div>
  <div class="meaning">Apr 2024 - Jul 2024 · Hybrid</div>
  <div class="meaning">- Developed and maintained production vehicle connectivity and telematics components using Python and C++ within safety-critical automotive systems</div>
  <br />
  <div class="command"><b>Chief Technology Officer</b> - Qalam Consulting</div>
  <div class="meaning">Oct 2023 - Jul 2024 · Waterloo, ON, Canada (Remote)</div>
  <div class="meaning">- Led a small engineering team delivering client-facing full-stack solutions using React and Node.js, overseeing system architecture, deployments, and end-to-end feature delivery</div>
  <br />
  <div class="command"><b>Operations & Data Assistant</b> - Pearson</div>
  <div class="meaning">Jan 2020 - Nov 2022 · Bangladesh / UK (Hybrid)</div>
  <div class="meaning">- Supported large-scale examination data processing and operational workflows, handling thousands of assessment records across distributed international teams</div>
  `,
  contact: getContacts,
  links: () => {
    window.open("https://links.hmaruf.com/", "_blank");
    return "";
  },
  resume: () => {
    window.open("/resume.pdf", "_blank");
    return "";
  },
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
};
