import Cors from "cors";
import runMiddleware from "../../utils/runMiddleware";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD"],
});

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);
  if (req.method === "GET") {
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

    res.json(contactMediums);
  } else {
    return res.status(400).json({ message: "Only GET request allowed" });
  }
}
