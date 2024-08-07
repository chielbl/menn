import { ObjectId } from "./ObjectId";
import { Category } from "./Category";
import { AvailabilityStatus } from "./AvailabilityStatus";
import { Review } from "./Review";
import { Meta } from "./Meta";

 export type ProductDTO = {
    id: ObjectId;
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
    readonly meta: Meta;
};