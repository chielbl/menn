import { ObjectId } from "./ObjectId";
import { Category } from "./Category";
import { AvailabilityStatus } from "./AvailabilityStatus";
import { Review } from "./Review";

 export type Product = {
    readonly id: ObjectId;
    /**
     * @type string
    */
    name: string;
    /**
     * @type string
    */
    description: string;
    category: Category;
    /**
     * @type number
    */
    price: number;
    /**
     * @type number
    */
    discountPercentage: number;
    /**
     * @type number
    */
    rating: number;
    /**
     * @type number
    */
    stock: number;
    availabilityStatus: AvailabilityStatus;
    /**
     * @type string
    */
    thumbnail: string;
    /**
     * @type array
    */
    images: string[];
    /**
     * @type array
    */
    reviews: Review[];
    /**
     * @description The date & time the resources was created
     * @type string, date-time
    */
    createdAt: string;
    /**
     * @description The date & time åthe resources was last updated
     * @type string, date-time
    */
    updatedAt: string;
};