import * as yup from "yup";

export const contactSchema = yup.object().shape({
  first_name: yup.string().required("First Name is required"),
  last_name: yup.string(),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters long")
    .required("Message is required"),
});
