import { createFileRoute } from "@tanstack/react-router";
import { GuidePage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/guide")({
  head: () => pageHead("Reader’s Guide | Azédine Assassi", "A guide to exploring the novel, browsing the journal, contacting the author, and the planned reader community."),
  component: GuidePage,
});