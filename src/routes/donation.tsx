import { createFileRoute } from "@tanstack/react-router";
import { DonationPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/donation")({
  head: () => pageHead("Support Independent Storytelling | Azédine Assassi", "Learn about supporting independent storytelling; no payment link or donation service is configured."),
  component: DonationPage,
});