import { getKvJson } from "./kv";

const FALLBACK_LINKS = [
  {
    network: "Portfolio",
    message: "View Portfolio",
    url: "https://www.hmaruf.com",
    icon: "ph-briefcase",
    topColor: "#111827",
    middleColor: "#1F2937",
    bottomColor: "#0B1120",
  },
  {
    network: "GitHub",
    message: "Browse Code",
    url: "https://github.com/MarufHossain14",
    icon: "ph-github-logo",
    topColor: "#1F2328",
    middleColor: "",
    bottomColor: "#1F2328",
  },
  {
    network: "LinkedIn",
    message: "Connect",
    url: "https://www.linkedin.com/in/maruf-m-hossain",
    icon: "ph-linkedin-logo",
    topColor: "#0B3A4A",
    middleColor: "",
    bottomColor: "#0B3A4A",
  },
  {
    network: "Photography",
    message: "View Photos",
    url: "https://photos.hmaruf.com",
    icon: "ph-camera",
    topColor: "#0D2B33",
    middleColor: "",
    bottomColor: "#0D2B33",
  },
  {
    network: "Facebook",
    message: "Add Friend",
    url: "https://www.facebook.com/MarufHussain11",
    icon: "ph-facebook-logo",
    topColor: "#0B2A4A",
    middleColor: "",
    bottomColor: "#0B2A4A",
  },
  {
    network: "Email",
    message: "Email Me",
    url: "mailto:hossain.maruf186@gmail.com",
    icon: "ph-envelope-simple",
    topColor: "#3A1816",
    middleColor: "",
    bottomColor: "#3A1816",
  },
  {
    network: "Instagram",
    message: "Follow",
    url: "https://www.instagram.com/maruf14hussain/",
    icon: "ph-instagram-logo",
    topColor: "#2B1E3A",
    middleColor: "",
    bottomColor: "#2B1E3A",
  },
];

export async function getLinks() {
  const links = await getKvJson("LINKS_KV", "links");
  const configuredLinks = Array.isArray(links) ? links.filter((link) => link.url) : [];

  return configuredLinks.length ? configuredLinks : FALLBACK_LINKS;
}
