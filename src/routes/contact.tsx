import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site-pages";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact Azédine Assassi", "Contact author Azédine Assassi by email or phone, or review the integration-ready contact form."),
  component: ContactPage,
});