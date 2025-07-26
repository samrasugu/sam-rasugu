import { client } from "@/app/sanity/client";
import { Resume } from "@/typing";

export async function getResume(): Promise<Resume | null> {
  try {
    const RESUME_QUERY = `*[_type == "resume"][0]{
    title,
    "fileUrl": file.asset->url,
    updatedAt
  }`;
    const resume = await client.fetch<Resume>(
      RESUME_QUERY,
      {},
      {
        next: { revalidate: 0 },
      },
    );
    return resume || null;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching resume:", error);

    return null;
  }
}
