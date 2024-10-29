export const categories = ['cookie', 'drink', 'gift'] as const;
export type Category = (typeof categories)[number];
