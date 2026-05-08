import { getKvJson } from "./kv";

export async function getContactMediums() {
  const contacts = await getKvJson("CONTACTS_KV", "contacts");
  if (!Array.isArray(contacts)) {
    return [];
  }

  return contacts.filter((contact) => contact.username && contact.link);
}
