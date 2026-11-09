import { createFileRoute } from "@tanstack/react-router";
import { BlogPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/blog")({
  head: () => pageHead("The Journal | Azédine Assassi", "Browse sample reflections on writing, psychological fiction, identity, culture, and INNOCENT VICTIMS."),
  component: BlogPage,
});