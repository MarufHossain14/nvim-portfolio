import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function getKvJson(bindingName, key) {
  try {
    const context = getCloudflareContext();
    const kv = context?.env?.[bindingName];
    if (!kv || typeof kv.get !== "function") {
      return null;
    }

    return await kv.get(key, { type: "json" });
  } catch (error) {
    return null;
  }
}
