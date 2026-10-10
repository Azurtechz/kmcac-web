import fs from "node:fs";
import path from "node:path";

export type Article = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

const articles: { slug: string; title: string; date: string; file: string }[] = [
  {
    slug: "what-are-wall-reliefs-a-beginners-guide",
    title: "What Are Wall Reliefs? A Beginner's Guide to This Classic Art Form",
    date: "2024-12-12",
    file: "what-are-wall-reliefs-a-beginners-guide.md",
  },
  {
    slug: "5-benefits-of-adding-custom-wall-art",
    title: "5 Incredible Benefits of Adding Custom Wall Art to Your Home or Office",
    date: "2024-12-15",
    file: "5-benefits-of-adding-custom-wall-art.md",
  },
  {
    slug: "sculptures-vs-wall-reliefs",
    title: "Sculptures vs. Wall Reliefs: Which Is the Perfect Fit for Your Space?",
    date: "2024-12-18",
    file: "sculptures-vs-wall-reliefs-which-is-the-perfect-fit-for-your-space.md",
  },
  {
    slug: "wall-art-for-small-spaces",
    title: "How to Choose the Perfect Wall Art for Small Spaces, Part 1",
    date: "2024-12-21",
    file: "how-to-choose-the-perfect-wall-art-for-small-spaces.md",
  },
  {
    slug: "wall-art-for-small-spaces-part-2",
    title: "How to Choose the Perfect Wall Art for Small Spaces, Part 2",
    date: "2024-12-24",
    file: "how-to-choose-the-perfect-wall-art-part-2.md",
  },
  {
    slug: "wall-murals-vs-wallpaper",
    title: "Wall Murals vs. Wallpaper: Why Original Art Makes a Powerful Difference",
    date: "2025-01-13",
    file: "wall-murals-vs-wallpaper-why-original-art.md",
  },
  {
    slug: "neutral-tones-for-large-wall-relief",
    title: "Why Neutral Tones Work Best for Captivating Large Wall Relief",
    date: "2025-01-20",
    file: "why-neutral-tones-work-best-for-large-wall-relief.md",
  },
  {
    slug: "psychology-of-color-in-wall-art",
    title: "The Powerful Psychology of Color in Wall Art, Vol. 1",
    date: "2025-01-22",
    file: "the-powerful-psychology-of-color-in-wall-art-vol-1.md",
  },
  {
    slug: "psychology-of-color-in-wall-art-vol-2",
    title: "The Powerful Psychology of Color in Wall Art, Vol. 2",
    date: "2025-01-24",
    file: "the-powerful-psychology-of-color-in-wall-art-vol-2.md",
  },
];

function excerptFrom(body: string) {
  const paragraph = body
    .split(/\n\s*\n/)
    .map((block) => block.replace(/^#+\s+/gm, "").replace(/^- /gm, "").replace(/\s+/g, " ").trim())
    .find((block) => block.length > 80 && !/^introduction$/i.test(block));
  if (!paragraph) return "";
  return paragraph.length > 220 ? `${paragraph.slice(0, 217).trimEnd()}…` : paragraph;
}

export function getArticles(): Article[] {
  const directory = path.join(process.cwd(), "content", "journal");
  return articles
    .map((article) => {
      const body = fs.readFileSync(path.join(directory, article.file), "utf8").trim();
      return {
        slug: article.slug,
        title: article.title,
        date: article.date,
        excerpt: excerptFrom(body),
        body,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string) {
  return getArticles().find((article) => article.slug === slug);
}

export function formatDate(iso: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${iso}T00:00:00Z`));
}
