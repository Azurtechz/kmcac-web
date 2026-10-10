"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, studio } from "@/lib/site";
import styles from "./SiteHeader.module.css";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={studio.name}
            width={434}
            height={154}
            priority
            style={{ width: "auto", height: "52px" }}
          />
        </Link>
        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? `${styles.link} ${styles.active}` : styles.link}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div id="site-menu" className={open ? styles.panel : `${styles.panel} ${styles.closed}`} hidden={!open}>
        {nav.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
