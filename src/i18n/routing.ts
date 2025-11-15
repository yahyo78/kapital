import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "ru", "tj"],

  // Used when no locale matches
  defaultLocale: "en",
});
export const { Link, redirect, useRouter, usePathname, getPathname } =
  createNavigation(routing);
