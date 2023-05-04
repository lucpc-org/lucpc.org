"use client";

import Link from "next/link";

export default function GlowButton({
  to,
  boxClassnames = "",
  label = "New Button",
  iconClassNames = "fa-solid fa-user",
  px = "3",
}) {
  // This took way too long to figure out
  return (
    <Link className="my-auto" href={to}>
      <div
        className={`flex flex-row px-3 items-center border-background border-[1px] shadow-none px-${px} py-1 rounded-lg font-bold ease-out transition-all duration-200 hover:shadow-lg ${boxClassnames}`}
      >
        <i className={iconClassNames}></i>
        <p className="mt-[.2rem] pl-3">{label}</p>
      </div>
    </Link>
  );
}
