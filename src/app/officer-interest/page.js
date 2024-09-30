"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
const LINK = "https://forms.gle/77zUoRKxpYEQR9is8";

export default function OfficerInterest() {
    redirect(LINK);

  useEffect(() => {
    window.location.href = LINK;
  }, []);

  return (
    <a href={LINK}>
      Redirecting... if you are not automatically redirected, click <b className="text-blue">here</b>
    </a>
  );
}
