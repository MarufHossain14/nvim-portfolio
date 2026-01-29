export const runtime = "edge";

export async function GET(request) {
  const projects = [
    {
      name: "ThinkFast Sudoku",
      description:
        "Built a real-time multiplayer Sudoku web application enabling low-latency state synchronization, room-based gameplay, and server-backed conflict resolution.",
      stack: ["Next.js", "TypeScript", "Firebase Realtime Database"],
      link: "https://thinkfast-sudoku.vercel.app/",
      image: "sudocrypt.png",
    },
    {
      name: "WLU MSA Website",
      description:
        "Built and maintain the official production website for Wilfrid Laurier University's Muslim Students' Association with CMS-driven content, SEO automation, and a responsive Tailwind UI.",
      stack: ["Next.js", "TypeScript", "Payload CMS"],
      link: "https://www.wlumsa.org/",
      image: "url.png",
    },
    {
      name: "MSA App",
      description:
        "Built and maintain a cross-platform mobile application with a TypeScript codebase and Supabase backend integration for data-driven community features.",
      stack: ["React Native", "Expo", "TypeScript", "Supabase", "TanStack React Query"],
      link: "https://github.com/wlumsa/MSA-App",
      image: "task-bot.png",
    },
  ];

  return Response.json(projects, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
