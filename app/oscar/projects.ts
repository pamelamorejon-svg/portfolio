// Edit this file to update what shows in the grid.
// `bg` controls the panel color: "cream" or "sky".
// `image` is a path under /public — drop your screenshots into /public/projects/.
// Leave `image` as null to show a styled placeholder.
// `imageClass` controls the absolute positioning of the image container inside the tile.

export type Project = {
  title: string;
  client?: string;
  role?: string;
  year?: string;
  summary: string;
  bg: "cream" | "sky";
  image: string | null;
  imageClass?: string;
  imgClass?: string;
  href?: string;
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
    image: "/projects/PAS.png",
    imageClass: "absolute bottom-0 left-[14%] right-0",
  },
  {
    title: "Plan summary documents",
    client: "Falcor",
    role: "Product designer",
    year: "2024",
    summary:
      "An auto-generated benefits summary that turns plan configuration into a member-friendly document, eliminating manual benefit booklets.",
    bg: "sky",
    image: "/projects/PDSA.png",
    imageClass: "absolute top-[20%] left-[20%] right-0",
  },
  {
    title: "Cai — member insights",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "An AI insights surface for plan administrators that turns claims data into recoverable cost opportunities.",
    bg: "sky",
    image: "/projects/Ingenuity.png",
    imageClass: "absolute inset-0",
    imgClass: "w-full h-full object-cover object-top",
  },
  {
    title: "Adjudication Copilot",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "A claim review assistant that explains pend rules, surfaces findings, and recommends adjudication decisions with reviewer feedback baked in.",
    bg: "cream",
    image: "/projects/Copilot.png",
    imageClass: "absolute inset-0",
    imgClass: "w-full h-full object-cover object-top",
  },
  {
    title: "Coordination of Benefits",
    client: "Falcor",
    role: "Product designer",
    year: "2025",
    summary:
      "A claims workspace that reconciles primary, secondary, and tertiary payers — with an activity timeline that explains every edit.",
    bg: "cream",
    image: "/projects/Benefit-Optimizer.png",
    imageClass: "absolute inset-0",
    imgClass: "w-full h-full object-cover object-top",
  },
  {
    title: "More coming soon",
    summary: "Reach out if you'd like to see additional case studies.",
    bg: "sky",
    image: "/projects/Looker.png",
    imageClass: "absolute inset-0",
    imgClass: "w-full h-full object-cover object-top",
  },
];
