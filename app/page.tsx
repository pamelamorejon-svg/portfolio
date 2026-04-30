// Public root. The portfolio itself lives at /oscar.
// We keep this simple so the homepage doesn't leak portfolio content.
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="font-serif text-3xl md:text-4xl">Pamela Morejón</h1>
        <p className="mt-3 text-muted">Portfolio available by invitation.</p>
      </div>
    </main>
  );
}
