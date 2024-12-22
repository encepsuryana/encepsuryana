import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { contactSchema } from "./hooks";
import { ContactFormInputs } from "./types";

const ContactForm: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInputs) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || "Email sent successfully!");
        reset();
      } else {
        console.error("Failed to send email:", result.message);
        toast.error("Failed to send email, please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderInputField = (
    id: string,
    label: string,
    type: string,
    error?: string
  ) => (
    <div className="mb-4">
      <label className="block text-primary font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        {...register(id as keyof ContactFormInputs)}
        className={`w-full px-3 py-2 text-black border rounded-full focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  const renderTextareaField = (id: string, label: string, error?: string) => (
    <div className="mb-4">
      <label className="block text-primary font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        {...register(id as keyof ContactFormInputs)}
        rows={5}
        className={`text-black w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      ></textarea>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );

  return (
    <div className="w-full">
      <ToastContainer position="top-right" autoClose={5000} />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-left w-full max-w-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInputField(
            "first_name",
            "First Name",
            "text",
            errors.first_name?.message
          )}
          {renderInputField(
            "last_name",
            "Last Name",
            "text",
            errors.last_name?.message
          )}
        </div>

        {renderInputField("email", "Email", "email", errors.email?.message)}
        {renderTextareaField("message", "Message", errors.message?.message)}

        <button
          type="submit"
          className="w-full bg-primary text-black py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
