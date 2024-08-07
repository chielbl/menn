import { z } from "zod";


export const metaSchema = z.object({ "createdOn": z.string().datetime().describe("The date & time the resources was created"), "updatedOn": z.string().datetime().describe("The date & time the resources was last updated") });