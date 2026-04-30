import { loginAction } from "./actions";

export const metadata = {
  title: "Pamela Morejon — Sign in",
  robots: { index: false, follow: false },
};

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string; from?: string };
}) {
  const hasError = searchParams.error === "1";
  const from = searchParams.from ?? "/oscar";

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-[0.2em] text-muted mb-4">
          Pamela Morejon
        </p>
        <h1 className="font-serif text-3xl mb-2">Selected work</h1>
        <p className="text-muted mb-8">
          This portfolio is shared by invitation. Enter the password to
          continue.
        </p>

        <form action={loginAction} className="space-y-4">
          <input type="hidden" name="from" value={from} />
          <label className="block">
            <span className="sr-only">Password</span>
            <input
              type="password"
              name="password"
              autoFocus
              required
              autoComplete="current-password"
              placeholder="Password"
              className="w-full border border-black/15 bg-white px-4 py-3 rounded-md focus:outline-none focus:border-ink"
            />
          </label>
          {hasError ? (
            <p className="text-sm text-red-600">
              That password didn&apos;t work. Try again.
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full bg-ink text-page py-3 rounded-md hover:opacity-90 transition-opacity"
          >
            Enter
          </button>
        </form>

        <p className="mt-8 text-sm text-muted">
          Need access?{" "}
          <a
            href="mailto:pamela.morejon@gmail.com"
            className="underline underline-offset-4"
          >
            Email me
          </a>
          .
        </p>
      </div>
    </main>
  );
}
