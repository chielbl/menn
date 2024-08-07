export const categoryEnum = {
    "Cookie": "Cookie"
} as const;
export type CategoryEnum = (typeof categoryEnum)[keyof typeof categoryEnum];
export type Category = CategoryEnum;