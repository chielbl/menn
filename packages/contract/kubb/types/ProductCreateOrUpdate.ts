import { Category } from "./Category";
import { AvailabilityStatus } from "./AvailabilityStatus";
import { Review } from "./Review";

 export type ProductCreateOrUpdate = {
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
};