import { redirect } from "next/navigation";
const DISCORD_INVITE = "https://discord.gg/dneShg4YYv";

export default function discordRedirect() {
  redirect(DISCORD_INVITE);
}
