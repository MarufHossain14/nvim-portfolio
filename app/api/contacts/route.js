import { getContactMediums } from "../../../utils/contacts";

export const runtime = "edge";

export async function GET(request) {
  const contactMediums = await getContactMediums();

  return Response.json(contactMediums, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
