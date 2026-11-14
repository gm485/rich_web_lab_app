import { z } from "zod"

export const productSchema = z.object({
  name: z.string().trim().min(1, "Enter a product name"),
  description: z
    .string()
    .trim()
    .min(1, "Enter a description")
    .max(100, "Description must be 100 characters or fewer"),
  price: z
    .string()
    .regex(/^\d+(\.\d{1,2})?$/, "Enter a valid price, such as 199 or 199.99")
    .refine((value) => Number(value) > 0, "Price must be greater than zero"),
  image: z
    .file()
    .max(10 * 1024 * 1024, "Image must be 10 MB or smaller")
    .mime(["image/jpeg", "image/png", "image/webp"], "Use a JPEG, PNG, or WebP image")
    .nullable(),
})

export type ProductFormValues = z.infer<typeof productSchema>
