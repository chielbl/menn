import { z } from "zod";


export const objectIdSchema = z.string().regex(new RegExp("^[0-9a-fA-F]{24}$"));