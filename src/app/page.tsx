import Image from "next/image";
import Link from "next/link";
import { artServices, founderQuote, people, projects } from "@/lib/content";
import { formatDate, getArticles } from "@/lib/journal";
import { steps, studio } from "@/lib/site";
import styles from "./page.module.css";
import ui from "@/components/ui.module.css";

const mosaic = [
  artServices[0].photos[0],
  artServices[1].photos[0],
  artServices[3].photos[0],
  artServices[2].photos[0],
];

export default function HomePage() {
  const articles = getArticles().slice(0, 3);
  const featured = projects[0];
  const founder = people[0];

  return (
    <>
      <section className={`wrap ${styles.hero}`}>
        <div>
          <p className="eyebrow">Gurugram</p>
          <h1>Art for the wall. Interiors for the room.</h1>
          <p>
            {studio.name} designs, makes, and installs custom art, and designs the homes and
            workplaces around it.
          </p>
          <div className={ui.actions}>
            <Link className={ui.button} href="/work">
              See the work
            </Link>
            <Link className={ui.buttonGhost} href="/contact">
              Start a project
            </Link>
          </div>
        </div>
        <div className={styles.mosaic}>
          {mosaic.map((photo) => (
            <div key={photo.src} className={ui.frame} style={{ aspectRatio: "1 / 1" }}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 860px) 50vw, 25vw" />
            </div>
          ))}
        </div>
      </section>

      <section className={`wrap ${styles.paths}`} aria-label="Two practices">
        <Link className={styles.path} href="/art">
          <p className="eyebrow">Art</p>
          <h2>Made for a wall</h2>
          <p>
            Murals, relief, sculpture, paintings, and textured finishes. Designed for the room, then
            installed.
          </p>
          <span className={ui.more}>The art services</span>
        </Link>
        <Link className={styles.path} href="/interiors">
          <p className="eyebrow">Interiors</p>
          <h2>Planned as a room</h2>
          <p>
            Residential and commercial interiors, carried through on site. Art from the same studio
            can be part of the plan.
          </p>
          <span className={ui.more}>Interior services</span>
        </Link>
      </section>

      <section className={`wrap ${styles.section}`}>
        <h2>Selected work</h2>
        <div className={styles.work}>
          <Link className={styles.feature} href={`/work/${featured.slug}`}>
            {featured.photo ? (
              <div className={ui.frame} style={{ aspectRatio: "4 / 3" }}>
                <Image
                  src={featured.photo.src}
                  alt={featured.photo.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 60vw"
                />
              </div>
            ) : null}
            <p className={styles.kind}>{featured.kind}</p>
            <h3>{featured.title}</h3>
            <p>{featured.summary}</p>
          </Link>
          <ul className={styles.list}>
            {projects.slice(1).map((project) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`}>
                  <span className={styles.kind}>{project.kind}</span>
                  <strong>{project.title}</strong>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <h2>How a commission runs</h2>
        <ol className={ui.steps}>
          {steps.map((step) => (
            <li key={step.number} className={ui.step}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={`wrap ${styles.founder}`}>
        <div className={ui.frame} style={{ aspectRatio: "1 / 1" }}>
          <Image
            src={founder.photo}
            alt={founder.name}
            fill
            sizes="280px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <p className="eyebrow">The studio</p>
          <blockquote className={styles.quote}>“{founderQuote.text}”</blockquote>
          <p>
            {founderQuote.attribution}, founder. The practice is art and interiors under one roof,
            with Rahul Kumar Jangra.
          </p>
          <div className={ui.actions}>
            <Link className={ui.buttonGhost} href="/studio">
              Meet the studio
            </Link>
          </div>
        </div>
      </section>

      <section className={`wrap ${styles.section}`}>
        <h2>From the journal</h2>
        <div className={styles.journal}>
          {articles.map((article) => (
            <Link key={article.slug} href={`/journal/${article.slug}`}>
              <span className={styles.date}>{formatDate(article.date)}</span>
              <h3>{article.title}</h3>
              <p>{article.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={ui.band}>
        <div className="wrap">
          <p className="eyebrow">Enquire</p>
          <h2>Tell us about the room.</h2>
          <p>Call {studio.phoneDisplay} or write to {studio.email}. The studio is in Sector 46, Gurugram.</p>
          <div className={ui.actions}>
            <Link className={ui.button} href="/contact">
              Contact
            </Link>
            <a className={ui.buttonGhost} href={`tel:${studio.phoneTel}`}>
              {studio.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
