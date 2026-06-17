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

  export default class GhostContentAPI {
    constructor(config: { url: string; key: string; version: string });
    posts: {
      browse(options?: BrowseOptions): Promise<any[]>;
      read(options: ReadOptions, extraOptions?: any): Promise<any>;
    };
    pages: {
      browse(options?: BrowseOptions): Promise<any[]>;
      read(options: ReadOptions): Promise<any>;
    };
    tags: {
      browse(options?: BrowseOptions): Promise<any[]>;
    };
    authors: {
      browse(options?: BrowseOptions): Promise<any[]>;
    };
    settings: {
      browse(): Promise<any>;
    };
  }
}