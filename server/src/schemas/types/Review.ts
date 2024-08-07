export type Review = {
    /**
     * @type number
    */
    rating: number;
    /**
     * @type string
    */
    comment: string;
    /**
     * @type string, date-time
    */
    date: Date;
    /**
     * @type string
    */
    reviewerName: string;
    /**
     * @type string
    */
    reviewerEmail: string;
};