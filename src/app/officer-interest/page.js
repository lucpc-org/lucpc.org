"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
const LINK = "https://forms.gle/VM94xgCkyQuSLc1E9";

export default function OfficerInterest() {
    redirect(LINK);

  useEffect(() => {
    window.location.href = LINK;
  }, []);

  return (
    <div>
      Redirecting... if you are not automatically redirected, click <a className="text-blue font-bold" href={LINK}>here</a>
    </div>
  );
}
