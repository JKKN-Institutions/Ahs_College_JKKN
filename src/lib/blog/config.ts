/**
 * Where MyJKKN lives. Safe to import in the browser (no secrets, no server code).
 * Blog posts, their images and the comment form all use this address when
 * BLOG_SOURCE=myjkkn (see ./myjkkn.ts).
 */
export const MYJKKN_URL = (process.env.NEXT_PUBLIC_MYJKKN_URL || 'https://www.jkkn.ai').replace(/\/+$/, '');
