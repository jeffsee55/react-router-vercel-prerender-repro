import { useLoaderData } from "react-router";
import { PageShell } from "~/components/page-shell";
import { createReproPageData } from "~/lib/repro-data";

export function meta() {
  return [{ title: "Mint Risks | Prerender repro" }];
}

export async function loader() {
  return createReproPageData("/mint-risks");
}

export default function MintRisks() {
  const data = useLoaderData<typeof loader>();

  return (
    <PageShell
      title="/mint-risks"
      description="A static risk-disclosure page that should be generated as static HTML at build time."
      data={data}
      expectedStatic
    />
  );
}
