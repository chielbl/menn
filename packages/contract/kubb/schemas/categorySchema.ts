import { z } from "zod";


export const categorySchema = z.enum(["Cookie", "Drink", "Gift"]);