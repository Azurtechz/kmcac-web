"use client";

import { useState, type FormEvent } from "react";
import { studio } from "@/lib/site";
import styles from "./ui.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function EnquiryForm() {
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const city = String(form.get("city") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !city || !phone || !message) {
      setError("Add your name, email, city, phone, and a short note about the project.");
      return;
    }
    if (!emailPattern.test(email)) {
      setError("That email address does not look complete.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Add a phone number we can call.");
      return;
    }

    const body = [`Name: ${name}`, `Email: ${email}`, `City: ${city}`, `Phone: ${phone}`, "", message].join("\n");
    const href = `mailto:${studio.email}?subject=${encodeURIComponent(`Enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    window.location.href = href;
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <label className={styles.field}>
        <span>Name</span>
        <input name="name" autoComplete="name" required />
      </label>
      <label className={styles.field}>
        <span>Email</span>
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label className={styles.field}>
        <span>City</span>
        <input name="city" autoComplete="address-level2" required />
      </label>
      <label className={styles.field}>
        <span>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" required />
      </label>
      <label className={styles.field}>
        <span>Message</span>
        <textarea name="message" required />
      </label>
      {error ? <p className={styles.error}>{error}</p> : null}
      <p className={styles.note}>
        This opens an email to {studio.email} in your mail app. Nothing is stored on the site.
      </p>
      <button className={styles.button} type="submit">
        Write to the studio
      </button>
    </form>
  );
}
