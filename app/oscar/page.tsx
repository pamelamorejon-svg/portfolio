import { projects } from "./projects";
import { ProjectTile } from "./ProjectTile";
import { logoutAction } from "./login/actions";

export const metadata = {
  title: "Pamela Morejón — Selected work",
};

export default function OscarPortfolio() {
  return (
    <main className="oscar-page min-h-screen">
      {/* Header */}
      <header className="px-[50px] pt-20 md:pt-28 pb-0 md:pb-[14px]">
        <div className="flex items-baseline justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
              Portfolio preview · 2026
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Pamela Morejón
            </h1>
            <p className="mt-4 text-sm md:text-base text-muted max-w-xl">
              Product Design Director leading UX and content teams at<br />the intersection of healthcare, enterprise software, and AI —<br />where trust isn't a feature, it's the foundation.
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
      <section className="grid grid-cols-1 md:grid-cols-2 gap-[20px] p-[50px] max-w-[1400px]">
        {projects.map((p, i) => (
          <ProjectTile key={i} project={p} />
        ))}
      </section>

      {/* About + contact */}
      <section className="px-[50px] pt-0 md:pt-[14px] pb-24 md:pb-32 grid md:grid-cols-2 gap-[20px]">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted mb-6">
            About
          </p>
          <p className="mt-6 text-muted leading-relaxed">
            For this preview I've focused on two areas: the client portal — including the<br />analytics dashboards benefit administrators rely on — and our internal tooling,<br />including adjudication systems, plan configuration, and a new AI copilot built<br />for claims associates. I care about design that is accessible, builds trust, and<br />holds up under real use.
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
                className="text-[#007E8C] hover:opacity-70"
              >
                pamela.morejon@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/pamelamorejon"
                target="_blank"
                rel="noreferrer"
                className="text-[#007E8C] hover:opacity-70"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mt-[45px] text-sm text-muted">
            This page is shared by invitation only. If you&apos;d like to pass the link beyond Oscar, please reach out to me first. Thank you!
          </p>
        </div>
      </section>

      <footer className="border-t border-black/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-xs text-muted flex justify-between">
          <span>© {new Date().getFullYear()} Pamela Morejón</span>
          <span>pamelamorejon.com/oscar</span>
        </div>
      </footer>
    </main>
  );
}
