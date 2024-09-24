export const categoryEnum = {
    "Cookie": "Cookie",
    "Drink": "Drink",
    "Gift": "Gift"
} as const;
export type CategoryEnum = (typeof categoryEnum)[keyof typeof categoryEnum];
export type Category = CategoryEnum;