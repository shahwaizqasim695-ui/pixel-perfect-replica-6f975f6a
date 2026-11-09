import { createFileRoute } from "@tanstack/react-router";
import { ForumPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/forum")({
  head: () => pageHead("Reader Forum | Azédine Assassi", "Explore the planned reader forum for thoughtful discussion of INNOCENT VICTIMS, identity, and its themes."),
  component: ForumPage,
});