import { client } from "@/app/sanity/client";

export async function getResume() {
  const RESUME_QUERY = `*[_type == "resume"][0]{
    title,
    "fileUrl": file.asset->url,
    updatedAt
  }`;

  return await client.fetch(RESUME_QUERY);
}
