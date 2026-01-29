export const runtime = "edge";

export async function GET() {
  const links = [
    {
      network: "Portfolio",
      message: "Visit my main portfolio!",
      url: "https://www.hmaruf.com",
    },
    {
      network: "GitHub",
      message: "Check out my code!",
      url: "https://github.com/MarufHossain14",
    },
    {
      network: "LinkedIn",
      message: "Let's connect!",
      url: "https://www.linkedin.com/in/maruf-m-hossain",
    },
    {
      network: "Photography",
      message: "View my photos!",
      url: "https://photos.hmaruf.com",
    },
    {
      network: "Facebook",
      message: "Connect with me!",
      url: "https://www.facebook.com/MarufHussain11",
    },
    {
      network: "Email",
      message: "Contact me anytime!",
      url: "mailto:hossain.maruf186@gmail.com",
    },
    {
      network: "Instagram",
      message: "Follow me!",
      url: "https://www.instagram.com/maruf14hussain/",
    },
  ];

  return Response.json(links, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
