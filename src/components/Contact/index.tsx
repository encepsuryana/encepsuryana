"use client";
import { FC } from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact: FC = () => {
  return (
    <section className="bg-gray-900 py-16 md:py-32 text-white" id="contact">
      <div className="container mx-auto px-4 md:px-2">
        <div className="w-full">
          <div className="mb-8 md:mb-12">
            <div className="border-b-2 border-dashed border-primary py-1 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">
                Get in <span className="text-primary font-bold">Touch</span>
              </h1>
            </div>

            <p className="text-white text-base md:text-lg leading-relaxed">
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
    </section>
  );
};

export default Contact;
