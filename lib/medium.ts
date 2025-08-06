import Parser from "rss-parser";
import { Article } from "@/typing";

interface CustomItem {
  "content:encoded"?: string;
  content?: string;
  description?: string;
  author?: string;
  creator?: string;
}

const parser = new Parser<object, CustomItem>({
  customFields: {
    item: ["content:encoded", "content", "description", "author", "creator"],
  },
});

export async function getMediumArticles(): Promise<Article[]> {
  try {
    // Validate environment variable
    if (!process.env.MEDIUM_FEED_URL) {
      console.error("MEDIUM_FEED_URL environment variable is not set");
      return [];
    }

    const feed = await parser.parseURL(process.env.MEDIUM_FEED_URL);

    // Validate feed response
    if (!feed || !feed.items || !Array.isArray(feed.items)) {
      console.error("Invalid feed response:", feed);
      return [];
    }

    return feed.items.map((item) => ({
      title: item.title || "",
      link: item.link || "",
      guid: item.guid || "",
      description: item.contentSnippet || item.description || "",
      pubDate: item.pubDate || "",
      author: item.creator || item.author || "",
      categories: item.categories || [],
      content: item["content:encoded"] || item.content || "",
      thumbnail: item.enclosure?.url || null,
      enclosure: item.enclosure || {},
    }));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error fetching Medium articles:", error);
    return [];
  }
}
