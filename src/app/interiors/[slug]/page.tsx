import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { interiorServices, serviceBySlug } from "@/lib/content";
import { steps } from "@/lib/site";
import ui from "@/components/ui.module.css";

export function generateStaticParams() {
  return interiorServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug("interiors", slug);
  if (!service) return { title: "Interiors" };
  return { title: service.title, description: service.summary };
}

export default async function InteriorServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug("interiors", slug);
  if (!service) notFound();

  return (
    <div className="wrap" style={{ paddingBottom: "4.5rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">Interiors</p>
        <h1>{service.title}</h1>
        <p className="lede">{service.lede}</p>
      </header>
      <div className={ui.prose}>
        {service.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      {service.details.length > 0 ? (
        <div className={ui.details}>
          {service.details.map((detail) => (
            <div key={detail.title} className={ui.detail}>
              <h3>{detail.title}</h3>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      ) : null}
      <h2 style={{ marginTop: "2.5rem" }}>How a project runs</h2>
      <ol className={ui.steps}>
        {steps.map((step) => (
          <li key={step.number} className={ui.step}>
            <span>{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
      <div className={ui.actions}>
        <Link className={ui.button} href="/contact">
          Book a conversation
        </Link>
        <Link className={ui.buttonGhost} href="/interiors">
          All interiors
        </Link>
      </div>
    </div>
  );
}
