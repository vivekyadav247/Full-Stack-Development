import {z} from "zod";

export const envSchema = z.object({
  PORT: z.string().optional(),
})

function createEnv(env:NodeJS.ProcessEnv){
  const parsedEnv = envSchema.safeParse(env) ;
  if (!parsedEnv.success) {
    throw new Error("Invalid environment variables");
  }
  return parsedEnv.data;
}

export const env = createEnv(process.env) ;
