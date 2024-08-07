import { z } from "zod";


export const notFoundSchema = z.object({ "code": z.string().describe("The status code for the error"), "message": z.string().describe("A more descriptive message about the error") });