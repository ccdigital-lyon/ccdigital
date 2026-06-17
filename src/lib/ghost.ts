import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL || 'https://la-cyber-en-clair.ccdigital.fr',
  key: process.env.NEXT_PUBLIC_GHOST_CONTENT_API_KEY || '',
  version: 'v5',
});

export interface GhostPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  html: string;
  tags?: { id: string; name: string; slug: string }[];
  primary_tag?: { id: string; name: string; slug: string };
  primary_author?: { id: string; name: string; slug: string; profile_image: string };
}

export interface GhostPage {
  id: string;
  title: string;
  slug: string;
  html: string;
  feature_image: string | null;
}

export async function getPosts(limit = 3): Promise<GhostPost[]> {
  try {
    return await api.posts.browse({ limit, include: ['tags', 'authors'] }) as GhostPost[];
  } catch (err) {
    console.error('Ghost API error:', err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  try {
    return await api.posts.read({ slug }, { include: ['tags', 'authors'] }) as GhostPost;
  } catch (err) {
    console.error('Ghost API error:', err);
    return null;
  }
}

export async function getPages(): Promise<GhostPage[]> {
  try {
    return await api.pages.browse({}) as GhostPage[];
  } catch (err) {
    console.error('Ghost API error:', err);
    return [];
  }
}

export default api;