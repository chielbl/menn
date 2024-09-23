export const categories = ['cookie', 'drank', 'gifts'] as const;
export type Category = (typeof categories)[number];
