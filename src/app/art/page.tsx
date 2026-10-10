import Link from "next/link";
import type { Metadata } from "next";
import { PhotoGrid } from "@/components/PhotoGrid";
import { artServices } from "@/lib/content";
import ui from "@/components/ui.module.css";

export const metadata: Metadata = {
  title: "Art",
  description: "Wall art, murals, relief, sculpture, paintings, and wall textures by Kanchan Mehra Centre for Art.",
};

export default function ArtPage() {
  return (
    <div className="wrap" style={{ paddingBottom: "4rem" }}>
      <header className={ui.intro}>
        <p className="eyebrow">Art</p>
        <h1>Work made for a particular wall.</h1>
        <p className="lede">
          The studio designs, makes, and installs murals, relief, sculpture, paintings, and textured
          finishes. The photographs are from the studio’s own catalogues.
        </p>
      </header>
      <div className={ui.cards}>
        {artServices.map((service) => (
          <Link key={service.slug} href={`/art/${service.slug}`} className={ui.card}>
            <h2>{service.title}</h2>
            <p>{service.summary}</p>
            <span className={ui.more}>View</span>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "2.5rem" }}>
        <PhotoGrid photos={artServices.flatMap((service) => service.photos.slice(0, 2))} />
      </div>
    </div>
  );
}
