"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
const LINK = "https://discord.gg/dneShg4YYv";

export default function DiscordRedirect() {
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
