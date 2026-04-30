import { projects } from "./projects";
import { ProjectTile } from "./ProjectTile";
import { logoutAction } from "./login/actions";

export const metadata = {
  title: "Pamela Morejon — Selected work",
};

export default function OscarPortfolio() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
              Portfolio · 2026
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Pamela Morejon
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted max-w-xl">
              Product designer working on healthcare software — turning dense,
              regulated workflows into tools people actually want to use.
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="text-xs uppercase tracking-[0.2em] text-muted hover:text-ink transition-colors"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      {/* Project grid — alternating cream/sky panels, edge to edge */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectTile key={i} project={p} />
        ))}
      </section>

      {/* About + contact */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-20">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
            About
          </p>
          <p className="font-serif text-2xl md:text-3xl leading-snug">
            I design software for the parts of healthcare most people never see —
            the configuration tools, claims workflows, and AI assistants that
            quietly decide whether a member's experience is good or bad.
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            Most recently I've been leading product design at Falcor, building
            the systems plan administrators and adjudicators rely on every day.
            Before that I worked across consumer fintech and B2B SaaS. I care
            about clear writing, good defaults, and shipping things that hold up
            under real use.
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
            Contact
          </p>
          <ul className="space-y-3 text-lg">
            <li>
              <a
                href="mailto:pamela.morejon@gmail.com"
                className="underline decoration-1 underline-offset-4 hover:opacity-70"
              >
                pamela.morejon@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pamelamorejon"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-1 underline-offset-4 hover:opacity-70"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mt-10 text-sm text-muted">
            This page is shared by invitation. Please don&apos;t pass the link
            or password along without asking first.
          </p>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-xs text-muted flex justify-between">
          <span>© {new Date().getFullYear()} Pamela Morejon</span>
          <span>pamelamorejon.com/oscar</span>
        </div>
      </footer>
    </main>
  );
}
