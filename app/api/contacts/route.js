export async function GET(request) {
  const contactMediums = [
    {
      medium: "github",
      username: "MarufHossain14",
      link: "https://github.com/MarufHossain14",
    },
    {
      medium: "email",
      username: "hossain.maruf186@gmail.com",
      link: "mailto:hossain.maruf186@gmail.com",
    },
    {
      medium: "phone",
      username: "226-552-1736",
      link: "tel:+12265521736",
    },
    {
      medium: "linkedin",
      username: "maruf-m-hossain",
      link: "https://www.linkedin.com/in/maruf-m-hossain/",
    },
    {
      medium: "website",
      username: "hmaruf.com",
      link: "https://www.hmaruf.com",
    },
  ];

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
