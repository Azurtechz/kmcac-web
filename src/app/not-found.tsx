import Link from "next/link";
import ui from "@/components/ui.module.css";

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "5rem 0" }}>
      <p className="eyebrow">Missing</p>
      <h1>That page is not on this site.</h1>
      <div className={ui.actions}>
        <Link className={ui.button} href="/">
          Back home
        </Link>
      </div>
    </div>
  );
}
