import Link from "next/link";
import type { Metadata } from "next";
import { interiorServices } from "@/lib/content";
import ui from "@/components/ui.module.css";

export const metadata: Metadata = {
  title: "Interiors",
  description: "Residential interiors, commercial interiors, and site execution by Kanchan Mehra Centre for Art.",
};

export default function InteriorsPage() {
  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">Interiors</p>
        <h1>Rooms planned, then built.</h1>
        <p className="lede">
          KMCA Interiors designs homes and commercial spaces, and carries the work through on site.
          Wall art from the same studio can be specified as part of the room. Photographs of finished
          interiors were not in the archive, so this section stays with the words.
        </p>
      </header>
      <div className={ui.cards}>
        {interiorServices.map((service) => (
          <Link key={service.slug} href={`/interiors/${service.slug}`} className={ui.card}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <span className={ui.more}>View</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
