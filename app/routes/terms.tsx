import { useLoaderData } from "react-router";
import { PageShell } from "~/components/page-shell";
import { createReproPageData } from "~/lib/repro-data";

export function meta() {
  return [{ title: "Terms | Prerender repro" }];
}

export async function loader() {
  return createReproPageData("/terms");
}

export default function Terms() {
  const data = useLoaderData<typeof loader>();

  return (
    <PageShell
      title="/terms"
      description="A static legal page that should be generated as static HTML at build time."
      data={data}
      expectedStatic
    />
  );
}
