import { getKvJson } from "./kv";

const FALLBACK_CONTACTS = [
  {
    medium: "email",
    username: "hossain.maruf186@gmail.com",
    link: "mailto:hossain.maruf186@gmail.com",
  },
  {
    medium: "linkedin",
    username: "maruf-m-hossain",
    link: "https://www.linkedin.com/in/maruf-m-hossain",
  },
];

export async function getContactMediums() {
  const contacts = await getKvJson("CONTACTS_KV", "contacts");
  const configuredContacts = Array.isArray(contacts)
    ? contacts.filter((contact) => contact.username && contact.link)
    : [];

  return configuredContacts.length ? configuredContacts : FALLBACK_CONTACTS;
}
