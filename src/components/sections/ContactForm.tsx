"use client";

import { useRef, useState, type FormEvent } from "react";
import { brandSwal } from "@/lib/swal";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialState = {
  name: "",
  email: "",
  service: "",
  message: "",
};

const fieldClasses =
  "h-12 w-full rounded-xl border border-black/10 bg-grey px-4 text-[15px] text-dark placeholder:text-dark/40 focus:outline-none focus:border-primary-2 transition-colors";

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  function update(field: keyof typeof initialState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim()) {
      brandSwal
        .fire({
          icon: "error",
          iconColor: "#ef4444",
          title: "Enter your name",
          text: "Please fill in the name field",
          confirmButtonText: "Got it",
        })
        .then(() => nameRef.current?.focus());
      return;
    }

    if (!EMAIL_REGEX.test(form.email.trim())) {
      brandSwal
        .fire({
          icon: "error",
          iconColor: "#ef4444",
          title: "Invalid email",
          text: "Please enter a valid email address",
          confirmButtonText: "Got it",
        })
        .then(() => emailRef.current?.focus());
      return;
    }

    if (!form.message.trim()) {
      brandSwal
        .fire({
          icon: "error",
          iconColor: "#ef4444",
          title: "Empty message",
          text: "Please write a message before sending",
          confirmButtonText: "Got it",
        })
        .then(() => messageRef.current?.focus());
      return;
    }

    brandSwal
      .fire({
        icon: "success",
        iconColor: "#5cf28e",
        title: "Message sent!",
        text: "Thanks for reaching out. The Upreach team will get back to you soon.",
        confirmButtonText: "Close",
      })
      .then(() => nameRef.current?.focus());

    setForm(initialState);
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto w-full max-w-[560px] rounded-3xl border border-black/5 bg-white p-6 shadow-sm md:p-8"
    >
      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="mb-2 block text-[14px] font-medium text-dark/70">
            Enter your name.
          </label>
          <input
            ref={nameRef}
            id="name"
            type="text"
            value={form.name}
            onChange={(event) => update("name", event.target.value)}
            placeholder="Your Name"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[14px] font-medium text-dark/70">
            Enter a valid email for a response.
          </label>
          <input
            ref={emailRef}
            id="email"
            type="email"
            value={form.email}
            onChange={(event) => update("email", event.target.value)}
            placeholder="Email Address"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-[14px] font-medium text-dark/70">
            Add the service you&apos;re interested in.
          </label>
          <input
            id="service"
            type="text"
            value={form.service}
            onChange={(event) => update("service", event.target.value)}
            placeholder="Enter service"
            className={fieldClasses}
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-[14px] font-medium text-dark/70">
            Share any details or specific requirements.
          </label>
          <textarea
            ref={messageRef}
            id="message"
            rows={5}
            value={form.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Your message..."
            className="w-full resize-none rounded-xl border border-black/10 bg-grey px-4 py-3 text-[15px] text-dark placeholder:text-dark/40 focus:outline-none focus:border-primary-2 transition-colors"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 h-12 w-full rounded-full bg-primary-2 text-[15px] font-medium text-dark hover:bg-primary-1 transition-colors cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
