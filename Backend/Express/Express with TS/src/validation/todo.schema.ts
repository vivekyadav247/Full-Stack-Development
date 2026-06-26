import { z } from "zod";

export const todoValidationSchema = z.object({
  id: z.string().describe('ID for the todo item'),
  title: z.string().describe('Title for the todo item'),
  description: z.string().describe('Description for the todo item').optional(),
  isCompleted: z.boolean().default(false).describe('Completion status for the todo item'),
});

export type Todo = z.infer<typeof todoValidationSchema>;  
// if we write this line so we dont need the comment line which is written below. This line will automatically infer the type from the schema.


// export interface ITodo {
//   id: string;
//   title: string;
//   description?: string;
//   isCompleted: boolean;
// }