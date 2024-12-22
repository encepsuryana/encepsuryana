"use client";
import { FC } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact: FC = () => {
  return (
    <div className="bg-gray-900 py-16 md:py-32" id="contact">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-full flex justify-center items-center flex-col text-center">
          <span className="border border-white px-3 py-1 rounded-full text-primary text-sm font-semibold mb-4">
            Contact Space
          </span>

          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Get in <span className="text-primary font-bold">Touch</span>
            </h1>

            <p className="text-white text-base md:text-lg leading-relaxed max-w-2xl">
              Have a question or want to work together? Feel free to send me a
              message using the form below. I&apos;ll get back to you as soon as
              possible!
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-start gap-6 w-full">
            <ContactInfo />

            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
