import { z } from "zod";

import { notAllowNumbersRefine } from "./refines/not-allow-numbers.refine";
import { notAllowSpecialCharacters } from "./refines/not-allow-special-characters.refine";

export const nameSchema = () => {
  return z
    .string()
    .min(1, { message: "Nome é obrigatório!" })
    .max(40, { message: "Nome muito grande, máximo de 40 caracteres" })
    .refine((value) => notAllowNumbersRefine(value), {
      message: "É necessário nome",
      path: [],
    })
    .refine((value) => notAllowSpecialCharacters(value), {
      message: "Caracteres especiais /*#?@ não são permitidos",
      path: [],
    });
};
