import { createFileRoute } from "@tanstack/react-router";
import { FAQPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/faq")({
  head: () => pageHead("Questions & Answers | INNOCENT VICTIMS", "Answers about INNOCENT VICTIMS, its themes, the author, and the features available on this website."),
  component: FAQPage,
});