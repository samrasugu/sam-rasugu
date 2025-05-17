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
  technologies: string[];
  featured: boolean;
  isOther: boolean;
  isActive: boolean;
}
