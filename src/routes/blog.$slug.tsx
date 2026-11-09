import { createFileRoute } from "@tanstack/react-router";
import { ArticlePage } from "@/components/site-pages";
import { articles } from "@/data/site-content";
import { pageHead } from "@/lib/page-meta";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const article = articles.find((entry) => entry.slug === params.slug);
    return pageHead(article ? `${article.title} | The Journal` : "Journal entry not found | Azédine Assassi", article ? `${article.excerpt} Demonstration content from the journal of Azédine Assassi.` : "This journal entry could not be found.", "article");
  },
  component: BlogArticleRoute,
});

function BlogArticleRoute() {
  const { slug } = Route.useParams();
  return <ArticlePage slug={slug} />;
}