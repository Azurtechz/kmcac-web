import Image from "next/image";
import type { Metadata } from "next";
import { founderQuote, people } from "@/lib/content";
import ui from "@/components/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Studio",
  description: "Kanchan Mehra and the people who run Kanchan Mehra Centre for Art.",
};

export default function StudioPage() {
  return (
    <div className="wrap">
      <header className={ui.intro}>
        <p className="eyebrow">Studio</p>
        <h1>The people behind the work.</h1>
        <p className="lede">
          One practice, in Gurugram: art that is made and installed, and interiors that are designed
          and carried through on site.
        </p>
      </header>
      <blockquote className={styles.quote}>
        <p>“{founderQuote.text}”</p>
        <footer>{founderQuote.attribution}</footer>
      </blockquote>
      <div className={styles.people}>
        {people.map((person) => (
          <article key={person.name} className={styles.person}>
            <div className={ui.frame} style={{ aspectRatio: "1 / 1", background: "var(--paper-deep)" }}>
              <Image src={person.photo} alt={person.name} fill sizes="240px" />
            </div>
            <div>
              <p className="eyebrow">{person.role}</p>
              <h2>{person.name}</h2>
              <div className={styles.bio}>
                {person.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
