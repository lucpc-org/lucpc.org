"use client";

import Link from "next/link";

export default function RedLink({
  to,
  extraStyles = "",
  label = "Link",
}) {
  // This took way too long to figure out
  return (
    <Link href={to}>
      <p className={`font-bold text-accent_red underline transition-all duration-150 hover:text-red-600 hover:decoration-dotted ${extraStyles}`}>
        {label}
      </p>
    </Link>
  );
}
