import { z } from "zod";

export const todoSchema = z.object({
  description: z
    .string()
    .min(1, "O título é obrigatório")
    .max(80, "O título deve ter no máximo 80 caracteres"),
});
