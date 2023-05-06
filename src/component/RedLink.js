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
      <p className={`font-bold text-red underline hover:decoration-dotted ${extraStyles}`}>
        {label}
      </p>
    </Link>
  );
}
