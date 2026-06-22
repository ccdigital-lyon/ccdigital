declare module '@tryghost/content-api' {
  interface BrowseOptions {
    limit?: number;
    include?: string[];
    filter?: string;
    fields?: string[];
    formats?: string[];
  }

  interface ReadOptions {
    slug?: string;
    id?: string;
    include?: string[];
  }

  interface GhostTag {
    id: string;
    name: string;
    slug: string;
    count?: { posts: number };
  }

  interface GhostAuthor {
    id: string;
    name: string;
    slug: string;
    profile_image: string;
  }

  interface GhostPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    feature_image: string | null;
    published_at: string;
    html: string;
    tags?: GhostTag[];
    primary_tag?: GhostTag;
    primary_author?: GhostAuthor;
  }

  interface GhostPage {
    id: string;
    title: string;
    slug: string;
    html: string;
    feature_image: string | null;
  }

  export default class GhostContentAPI {
    constructor(config: { url: string; key: string; version: string });
    posts: {
      browse(options?: BrowseOptions): Promise<GhostPost[]>;
      read(options: ReadOptions, extraOptions?: { include: string[]; formats: string[] }): Promise<GhostPost>;
    };
    pages: {
      browse(options?: BrowseOptions): Promise<GhostPage[]>;
      read(options: ReadOptions): Promise<GhostPage>;
    };
    tags: {
      browse(options?: BrowseOptions): Promise<GhostTag[]>;
    };
    authors: {
      browse(options?: BrowseOptions): Promise<GhostAuthor[]>;
    };
    settings: {
      browse(): Promise<Record<string, unknown>>;
    };
  }
}