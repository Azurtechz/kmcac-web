import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ArticleBody";
import { formatDate, getArticle, getArticles } from "@/lib/journal";
import ui from "@/components/ui.module.css";

export function generateStaticParams() {
  return getArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Journal" };
  return { title: article.title, description: article.excerpt };
}

export default async function JournalArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <div className="wrap" style={{ paddingBottom: "4.5rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">{formatDate(article.date)}</p>
        <h1>{article.title}</h1>
      </header>
      <ArticleBody markdown={article.body} />
      <div className={ui.actions}>
        <Link className={ui.buttonGhost} href="/journal">
          All writing
        </Link>
      </div>
    </div>
  );
}
