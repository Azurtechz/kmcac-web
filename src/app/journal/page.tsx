import Link from "next/link";
import type { Metadata } from "next";
import { formatDate, getArticles } from "@/lib/journal";
import ui from "@/components/ui.module.css";

export const metadata: Metadata = {
  title: "Journal",
  description: "Notes from Kanchan Mehra Centre for Art on wall relief, murals, sculpture, and colour.",
};

export default function JournalPage() {
  const articles = getArticles();
  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">Journal</p>
        <h1>Writing from the studio.</h1>
        <p className="lede">
          Nine articles published on the art site between December 2024 and January 2025. They are
          kept here as they were written.
        </p>
      </header>
      <div className={ui.cards} style={{ gridTemplateColumns: "1fr" }}>
        {articles.map((article) => (
          <Link key={article.slug} href={`/journal/${article.slug}`} className={ui.card}>
            <p className="eyebrow">{formatDate(article.date)}</p>
            <h2>{article.title}</h2>
            <p>{article.excerpt}</p>
            <span className={ui.more}>Read</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
