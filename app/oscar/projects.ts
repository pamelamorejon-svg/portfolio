// Edit this file to update what shows in the grid.
// `bg` controls the panel color: "cream" or "sky".
// `image` is a path under /public — drop your screenshots into /public/projects/.
// Leave `image` as null to show a styled placeholder.

export type Project = {
  title: string;
  client?: string;
  role?: string;
  year?: string;
  summary: string;
  bg: "cream" | "sky";
  image: string | null;
  href?: string; // optional link to a case study
};

export const projects: Project[] = [
  {
    title: "Plan benefits configuration",
    client: "Falcor",
    role: "Lead product designer",
    year: "2024",
    summary:
      "A configuration tool that lets carriers stand up new health plans in days instead of months — copays, coinsurance, networks, and overrides in a single flow.",
    bg: "cream",
    image: null, // e.g. "/projects/01-benefits-config.png"
  },
  {
    title: "Plan summary documents",
    client: "Falcor",
    role: "Product designer",
    year: "2024",
    summary:
      "An auto-generated benefits summary that turns plan configuration into a member-friendly document, eliminating manual benefit booklets.",
    bg: "sky",
    image: null,
  },
  {
    title: "Cai — member insights",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "An AI insights surface for plan administrators that turns claims data into recoverable cost opportunities.",
    bg: "sky",
    image: null,
  },
  {
    title: "Adjudication Copilot",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "A claim review assistant that explains pend rules, surfaces findings, and recommends adjudication decisions with reviewer feedback baked in.",
    bg: "cream",
    image: null,
  },
  {
    title: "Coordination of Benefits",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "A claims workspace that reconciles primary, secondary, and tertiary payers — with an activity timeline that explains every edit.",
    bg: "cream",
    image: null,
  },
  {
    title: "More coming soon",
    summary: "Reach out if you'd like to see additional case studies.",
    bg: "sky",
    image: null,
  },
];
