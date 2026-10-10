import Image from "next/image";
import type { Photo } from "@/lib/content";
import styles from "./ui.module.css";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  if (photos.length === 0) return null;
  return (
    <div className={styles.grid}>
      {photos.map((photo) => (
        <figure key={photo.src} className={styles.tile}>
          <div className={styles.frame} style={{ aspectRatio: "1 / 1" }}>
            <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 25vw" />
          </div>
        </figure>
      ))}
    </div>
  );
}
