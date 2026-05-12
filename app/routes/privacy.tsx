import { useLoaderData } from "react-router";
import { PageShell } from "~/components/page-shell";
import { createReproPageData } from "~/lib/repro-data";

export function meta() {
  return [{ title: "Privacy | Prerender repro" }];
}

export async function loader() {
  return createReproPageData("/privacy");
}

export default function Privacy() {
  const data = useLoaderData<typeof loader>();

  return (
    <PageShell
      title="/privacy"
      description="A static privacy page that should be generated as static HTML at build time."
      data={data}
      expectedStatic
    />
  );
}
