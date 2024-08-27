import { z } from "zod";


export const paginatedMetaSchema = z.object({ "page": z.number().min(1), "pageSize": z.number().min(1).max(100), "total": z.number(), "totalPages": z.number(), "hasNextPage": z.boolean(), "hasPrevPage": z.boolean() });