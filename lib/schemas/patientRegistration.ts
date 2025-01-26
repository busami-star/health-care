import { z } from "zod";
import { isValidPhoneNumber } from "react-phone-number-input";

export const formSchema = z.object({
  username: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Name too long")
    .refine((val) => val.trim().split(" ").length > 1, {
      message: "Please enter both first and last names",
    }),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(16, "Phone number must not exceed 16 digits")
    .refine((val) => isValidPhoneNumber(val), {
      message: "Invalid phone number",
    }),
});