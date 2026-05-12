import { useLoaderData } from "react-router";
import { PageShell } from "~/components/page-shell";
import { createReproPageData } from "~/lib/repro-data";

export function meta() {
  return [{ title: "Home | Prerender repro" }];
}

export async function loader() {
  return createReproPageData("/home");
}

export default function Home() {
  const data = useLoaderData<typeof loader>();

  return (
    <PageShell
      title="/home"
      description="A representative marketing-style page that should be generated as static HTML at build time."
      data={data}
      expectedStatic
    />
  );
}
