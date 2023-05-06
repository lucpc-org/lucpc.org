"use client";

import Link from "next/link";

export default function GlowButton({
  to,
  boxClassnames = "",
  label = "New Button",
  iconClassNames,
}) {
  // This took way too long to figure out
  return (
    <Link href={to}>
      <div
        className={`flex flex-row items-center py-1 rounded-lg transition-all duration-150 ${boxClassnames}`}
      >

        {iconClassNames && <i className={iconClassNames}></i>}
        <p className={iconClassNames ? "mt-[.2rem] pl-3" : ""}>{label}</p>
      </div>
    </Link>
  );
}
