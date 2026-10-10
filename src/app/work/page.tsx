import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/lib/content";
import ui from "@/components/ui.module.css";

export const metadata: Metadata = {
  title: "Work",
  description: "Projects named by Kanchan Mehra Centre for Art, including AIIMS Mother and Child Block and interiors work.",
};

export default function WorkPage() {
  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">Work</p>
        <h1>Projects the studio has named.</h1>
        <p className="lede">
          One public project has a photograph. The interiors projects are names from the previous
          site. Where a description was never written, this page does not invent one.
        </p>
      </header>
      <div className={ui.cards}>
        {projects.map((project) => (
          <Link key={project.slug} href={`/work/${project.slug}`} className={ui.card}>
            {project.photo ? (
              <div className={ui.frame} style={{ aspectRatio: "4 / 3" }}>
                <Image src={project.photo.src} alt={project.photo.alt} fill sizes="(max-width: 700px) 100vw, 33vw" />
              </div>
            ) : null}
            <p className="eyebrow">{project.kind}</p>
            <h2>{project.title}</h2>
            <p>{project.summary}</p>
            <span className={ui.more}>Open</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
