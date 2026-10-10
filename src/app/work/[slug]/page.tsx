import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projectBySlug, projects } from "@/lib/content";
import ui from "@/components/ui.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Work" };
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="wrap" style={{ paddingBottom: "4.5rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">{project.kind}</p>
        <h1>{project.title}</h1>
        <p className="lede">{project.summary}</p>
      </header>
      {project.photo ? (
        <div className={ui.frame} style={{ aspectRatio: "4 / 3", marginBottom: "1.5rem" }}>
          <Image src={project.photo.src} alt={project.photo.alt} fill sizes="(max-width: 1100px) 100vw, 1100px" priority />
        </div>
      ) : (
        <p className={ui.note}>No photograph of this project was in the studio archive.</p>
      )}
      {project.note ? <p style={{ marginTop: "1rem" }}>{project.note}</p> : null}
      <div className={ui.actions}>
        <Link className={ui.button} href="/contact">
          Ask about a project like this
        </Link>
        <Link className={ui.buttonGhost} href="/work">
          All work
        </Link>
      </div>
    </div>
  );
}
