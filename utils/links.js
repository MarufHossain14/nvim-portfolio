import { getKvJson } from "./kv";

export async function getLinks() {
  const links = await getKvJson("LINKS_KV", "links");
  if (!Array.isArray(links)) {
    return [];
  }

  return links.filter((link) => link.url);
}
