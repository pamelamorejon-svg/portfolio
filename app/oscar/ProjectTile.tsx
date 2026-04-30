import type { Project } from "./projects";

const bgClass: Record<Project["bg"], string> = {
  cream: "bg-cream",
  sky: "bg-sky",
};

export function ProjectTile({ project }: { project: Project }) {
  const inner = (
    <div
      className={`${bgClass[project.bg]} relative aspect-square w-full overflow-hidden`}
    >
      {/* Image area */}
      <div className={project.imageClass ?? "absolute bottom-0 left-[14%] w-[90%]"}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className={project.imgClass ?? "w-full h-auto shadow-[0_4px_40px_rgba(0,0,0,0.18)]"}
          />
        ) : (
          <PlaceholderCard project={project} />
        )}
      </div>

    </div>
  );

  if (project.href) {
    return (
      <a href={project.href} className="block">
        {inner}
      </a>
    );
  }
  return <div className="block">{inner}</div>;
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
