import Link from "next/link";
import { nav, studio } from "@/lib/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <p className={styles.name}>{studio.name}</p>
            <p className={styles.legal}>
              {studio.legal}. Art and interiors, made and installed from Gurugram.
            </p>
          </div>
          <div>
            <p className={styles.heading}>Visit</p>
            <div className={styles.offices}>
              {studio.offices.map((office) => (
                <p key={office.label} className={styles.office}>
                  <strong>{office.label}</strong>
                  {office.lines.map((line) => (
                    <span key={line}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.heading}>Talk to the studio</p>
            <div className={styles.links}>
              <a className={styles.phone} href={`tel:${studio.phoneTel}`}>
                {studio.phoneDisplay}
              </a>
              <a className={styles.phone} href={`tel:${studio.phoneAltTel}`}>
                {studio.phoneAltDisplay}
              </a>
              <a className={styles.mail} href={`mailto:${studio.email}`}>
                {studio.email}
              </a>
              {nav.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.base}>
          <span>© {studio.year} {studio.legal}</span>
          <span>Gurugram and Delhi</span>
        </div>
      </div>
    </footer>
  );
}
