export type Review = {
    /**
     * @type integer
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