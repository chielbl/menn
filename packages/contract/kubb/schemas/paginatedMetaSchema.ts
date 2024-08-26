import { z } from "zod";


export const paginatedMetaSchema = z.object({ "page": z.number(), "pageSize": z.number(), "total": z.number(), "totalPages": z.number(), "nextPage": z.number(), "prevPage": z.number() });