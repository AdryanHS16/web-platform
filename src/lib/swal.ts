"use client";

import Swal from "sweetalert2";

export const brandSwal = Swal.mixin({
  buttonsStyling: false,
  heightAuto: false,
  scrollbarPadding: false,
  returnFocus: false,
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
