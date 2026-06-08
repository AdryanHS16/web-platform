"use client";

import { useState, type FormEvent } from "react";
import Swal from "sweetalert2";

const GMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const brandSwal = Swal.mixin({
  buttonsStyling: false,
  heightAuto: false,
  scrollbarPadding: false,
  background: "#ffffff",
  color: "#002329",
  customClass: {
    popup: "rounded-3xl border border-black/5 shadow-2xl",
    title: "!text-dark !font-semibold",
    htmlContainer: "!text-dark/60",
    icon: "swal-icon-animated",
    confirmButton:
      "h-11 rounded-full bg-primary-2 px-7 text-[15px] font-medium text-dark hover:bg-primary-1 transition-colors cursor-pointer focus:outline-none",
  },
});

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const value = email.trim();

    if (!GMAIL_REGEX.test(value)) {
      brandSwal.fire({
        icon: "error",
        iconColor: "#ef4444",
        title: "E-mail inválido",
        text: "Por Favor, informe um endereço de email válido",
        confirmButtonText: "Entendi",
      });
      return;
    }

    brandSwal.fire({
      icon: "success",
      iconColor: "#5cf28e",
      title: "Inscrição confirmada!",
      text: "Agora você faz parte da newsletter da Upreach.",
      confirmButtonText: "Vamos lá",
    });

    setEmail("");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-3" noValidate>
      <input
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
