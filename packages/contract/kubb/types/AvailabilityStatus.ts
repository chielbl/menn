export const availabilityStatusEnum = {
    "In Stock": "In Stock",
    "Low Stock": "Low Stock",
    "Out of Stock": "Out of Stock"
} as const;
export type AvailabilityStatusEnum = (typeof availabilityStatusEnum)[keyof typeof availabilityStatusEnum];
export type AvailabilityStatus = AvailabilityStatusEnum;