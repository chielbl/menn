import { z } from "zod";


export const paginatedMetaSchema = z.object({ "page": z.number(), "pageSize": z.number(), "total": z.number(), "totalPages": z.number(), "hasNextPage": z.boolean(), "hasPrevPage": z.boolean() });