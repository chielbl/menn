export type PaginatedMeta = {
    /**
     * @type integer
    */
    page: number;
    /**
     * @type integer
    */
    pageSize: number;
    /**
     * @type integer
    */
    total: number;
    /**
     * @type integer
    */
    totalPages: number;
    /**
     * @type boolean
    */
    hasNextPage: boolean;
    /**
     * @type boolean
    */
    hasPrevPage: boolean;
};