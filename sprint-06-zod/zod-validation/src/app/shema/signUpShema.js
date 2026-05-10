import {z} from "zod";

export const createFormSchema = () => z.object({
    userName: z.string().min(2).max(30),
    userEmail: z.string().email(),
    birthDate: z.date().max(new Date(), { message: "Too young!" }),
    password: z.string().min(5).max(12),
    passwordConfirmation: z.string().min(5).max(12)
}).refine(data => data.password === data.passwordConfirmation, {
    message: "Passwords do not match",
    path: ["passwordConfirmation"],
});