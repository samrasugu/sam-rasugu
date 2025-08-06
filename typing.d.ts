import { PortableTextBlock } from "next-sanity";

export interface ProjectCategory {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
}

export interface Project {
  _id: string;
  title: string;
  description: string;
  category: ProjectCategory | { _ref: string };
  slug: {
    current: string;
  };
  publishedAt: string;
  featuredImage: {
    asset: {
      _ref: string;
      _type: string;
      url?: string;
    };
    alt?: string;
  };
  images?: {
    asset: {
      _ref: string;
      _type: string;
      url?: string;
    };
    alt?: string;
  }[];
  body?: PortableTextBlock[];
  github?: string;
  liveUrl?: string;
  appStoreUrl?: string;
  technologies: string[];
  featured: boolean;
  isOther: boolean;
  isActive: boolean;
}

export interface Resume {
  title: string;
  fileUrl: string;
  updatedAt: string;
}

export interface Article {
  title: string;
  link: string;
  guid: string;
  description: string;
  pubDate: string;
  author: string;
  categories: string[];
  content: string;
  thumbnail: string | null;
  enclosure: {
    url?: string;
    type?: string;
    length?: string;
  };
}
