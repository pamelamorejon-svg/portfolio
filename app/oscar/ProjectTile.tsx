import type { Project } from "./projects";

const bgClass: Record<Project["bg"], string> = {
  cream: "bg-cream",
  sky: "bg-sky",
};

export function ProjectTile({ project }: { project: Project }) {
  const inner = (
    <div
      className={`${bgClass[project.bg]} relative aspect-[3/4] md:aspect-[4/5] w-full overflow-hidden`}
    >
      {/* Image area — fills most of the tile, centered with margin */}
      <div className="absolute inset-[8%] flex items-center justify-center">
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
          />
        ) : (
          <PlaceholderCard project={project} />
        )}
      </div>

      {/* Caption overlay (only visible on hover) */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 to-transparent">
        <p className="text-white text-sm font-medium">
          {project.client ? `${project.client} — ` : ""}
          {project.title}
        </p>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <a href={project.href} className="group block">
        {inner}
      </a>
    );
  }
  return <div className="group block">{inner}</div>;
}

function PlaceholderCard({ project }: { project: Project }) {
  // A simple, on-brand placeholder shaped like the screenshots in the reference.
  return (
    <div className="w-[78%] aspect-[4/3] bg-white rounded-md shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)] flex flex-col">
      <div className="h-8 border-b border-black/5 flex items-center px-4 gap-2">
        <span className="w-2 h-2 rounded-full bg-black/10" />
        <span className="w-2 h-2 rounded-full bg-black/10" />
        <span className="w-2 h-2 rounded-full bg-black/10" />
      </div>
      <div className="flex-1 p-5 flex flex-col gap-3">
        <div className="h-3 w-1/2 bg-black/10 rounded" />
        <div className="h-2 w-3/4 bg-black/5 rounded" />
        <div className="h-2 w-2/3 bg-black/5 rounded" />
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="h-10 bg-black/5 rounded" />
          <div className="h-10 bg-black/5 rounded" />
          <div className="h-10 bg-black/5 rounded" />
        </div>
        <div className="mt-auto text-[10px] uppercase tracking-widest text-black/40">
          {project.client ?? "Case study"}
        </div>
      </div>
    </div>
  );
}
