"use client";

import { useRef, useState, type FormEvent } from "react";
import { brandSwal } from "@/lib/swal";

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = email.trim();

    if (!GMAIL_REGEX.test(value)) {
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

    brandSwal
      .fire({
        icon: "success",
        iconColor: "#5cf28e",
        title: "Subscription confirmed!",
        text: "You are now part of the Upreach newsletter.",
        confirmButtonText: "Let's go",
      })
      .then(() => emailRef.current?.focus());

    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-3" noValidate>
      <input
        ref={emailRef}
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email Address"
        className="h-11 w-full max-w-[240px] rounded-full border border-white/10 bg-white/5 px-5 text-[15px] text-white placeholder:text-white/40 focus:outline-none focus:border-primary-2/60 transition-colors"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-full bg-primary-2 px-6 text-[15px] font-medium text-dark hover:bg-primary-1 transition-colors cursor-pointer"
      >
        Get Notified
      </button>
    </form>
  );
}
