export const studio = {
  name: "Kanchan Mehra Centre for Art",
  short: "KMCAC",
  legal: "Kanchan Mehra Centre for Art Private Limited",
  year: 2026,
  email: "info@kmcac.in",
  phoneDisplay: "+91 98704 17168",
  phoneTel: "+919870417168",
  phoneAltDisplay: "+91 84484 38537",
  phoneAltTel: "+918448438537",
  offices: [
    {
      label: "Registered office",
      lines: ["1396, Sector 46", "Gurugram, Haryana 122003"],
    },
  ],
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/art", label: "Art" },
  { href: "/interiors", label: "Interiors" },
  { href: "/studio", label: "Studio" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
] as const;

export const steps = [
  {
    number: "01",
    title: "Consultation",
    text: "We start with the room and what you want it to do. From that conversation comes a concept.",
  },
  {
    number: "02",
    title: "Design",
    text: "The studio develops the design, the materials, and the making plan, and keeps you in the work as it takes shape.",
  },
  {
    number: "03",
    title: "Installation",
    text: "Art is installed where it belongs. Interior projects are carried through on site, from the approved design to the finished room.",
  },
] as const;
