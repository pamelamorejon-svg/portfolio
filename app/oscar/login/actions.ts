"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const COOKIE_NAME = "oscar_auth";
// 30 days
const MAX_AGE = 60 * 60 * 24 * 30;

export async function loginAction(formData: FormData) {
  const submitted = String(formData.get("password") ?? "");
  const expected = process.env.SITE_PASSWORD ?? "Oscar";
  const from = String(formData.get("from") ?? "/oscar");

  if (submitted !== expected) {
    // Bounce back to the login page with an error flag.
    redirect(`/oscar/login?error=1&from=${encodeURIComponent(from)}`);
  }

  cookies().set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: MAX_AGE,
  });

  redirect(from && from.startsWith("/oscar") ? from : "/oscar");
}

export async function logoutAction() {
  cookies().delete(COOKIE_NAME);
  redirect("/oscar/login");
}
