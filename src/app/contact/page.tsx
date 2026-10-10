import type { Metadata } from "next";
import { EnquiryForm } from "@/components/EnquiryForm";
import { studio } from "@/lib/site";
import ui from "@/components/ui.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write or call Kanchan Mehra Centre for Art in Gurugram and Vasant Vihar.",
};

export default function ContactPage() {
  return (
    <div className="wrap">
      <header className={ui.intro}>
        <p className="eyebrow">Contact</p>
        <h1>Start with the room.</h1>
        <p className="lede">
          Tell us whether it is a wall, a home, or a workplace. The form opens an email to the
          studio. It does not send anything by itself.
        </p>
      </header>
      <div className={styles.layout}>
        <div>
          <div className={styles.offices}>
            {studio.offices.map((office) => (
              <p key={office.label} className={styles.office}>
                <strong>{office.label}</strong>
                {office.lines.join(", ")}
              </p>
            ))}
          </div>
          <div className={styles.reach}>
            <a href={`tel:${studio.phoneTel}`}>{studio.phoneDisplay}</a>
            <a href={`tel:${studio.phoneAltTel}`}>{studio.phoneAltDisplay}</a>
            <a href={`mailto:${studio.email}`}>{studio.email}</a>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </div>
  );
}
