
import { z } from 'zod'

export const registerSchema = z.object({

    rut: z.string({
        required_error: 'Rut necesario'
    }),
    email: z.string({
        required_error: "email necesario"
    }).email({
        required_error: "email invalido"
    }),
    password: z.string({
        required_error: "contraseña necesaria"
    }).min(8, {
        message: 'La contraseña debe tener almenos 8 caracteres'
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "email necesario"
    }).email({
        required_error: "email invalido"
    }),
    password: z.string({
        required_error: "contraseña necesaria"
    }).min(8, {
        message: 'La contraseña debe tener almenos 8 caracteres'
    }),
});

