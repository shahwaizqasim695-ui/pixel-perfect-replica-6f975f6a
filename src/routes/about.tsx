import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Azédine Assassi | Author of INNOCENT VICTIMS", "Meet Azédine Assassi, author of INNOCENT VICTIMS, and explore the literary questions behind the novel."),
  component: AboutPage,
});