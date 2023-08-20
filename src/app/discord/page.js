"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
const DISCORD_INVITE = "https://discord.gg/dneShg4YYv";

export default function DiscordRedirect() {
  // redirect(DISCORD_INVITE);

  // useEffect(() => {
  //   window.location.href = DISCORD_INVITE;
  // }, []);

  return (
    <a href={DISCORD_INVITE}>
      Redirecting... if you are not automatically redirected, click{" "}
      <b className="text-blue">here</b>
    </a>
  );
}
