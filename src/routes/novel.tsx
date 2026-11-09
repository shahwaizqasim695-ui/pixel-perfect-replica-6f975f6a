import { createFileRoute } from "@tanstack/react-router";
import { NovelPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/novel")({
  head: () => pageHead("INNOCENT VICTIMS | The Novel by Azédine Assassi", "Discover the story and themes of INNOCENT VICTIMS, a psychological thriller by Azédine Assassi."),
  component: NovelPage,
});