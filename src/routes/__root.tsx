import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-5xl text-foreground">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for has moved or no longer exists.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block text-sm border-b border-foreground pb-0.5 text-foreground hover:text-accent hover:border-accent transition-colors"
        >
          Return to index
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="eyebrow">Error</p>
        <h1 className="mt-4 font-serif text-4xl text-foreground">This page didn’t load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Please try again or return to the index.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="border-b border-foreground pb-0.5 text-foreground hover:text-accent hover:border-accent transition-colors"
          >
            Try again
          </button>
          <a href="/" className="border-b border-foreground pb-0.5 text-foreground hover:text-accent hover:border-accent transition-colors">
            Return to index
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kosh & Associates — Architecture & Interiors, Kerala" },
      {
        name: "description",
        content:
          "Kosh & Associates is a Kochi-based architecture and interiors studio working on contemporary tropical residences and retreats across Kerala.",
      },
      { name: "author", content: "Kosh & Associates" },
      { property: "og:site_name", content: "Kosh & Associates" },
      { property: "og:title", content: "Kosh & Associates — Architecture & Interiors, Kerala" },
      { property: "og:description", content: "A contemporary tropical architecture practice based in Kochi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@300;400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <SiteNav />
        <main className="flex-1 pt-16 md:pt-20">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
