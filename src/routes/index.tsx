import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/")({
  head: () => pageHead("Azédine Assassi | INNOCENT VICTIMS", "Enter the world of INNOCENT VICTIMS, a psychological thriller about identity, conviction, and the human cost of justice."),
  component: HomePage,
});