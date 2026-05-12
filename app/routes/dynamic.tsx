import { useLoaderData } from "react-router";
import { PageShell } from "~/components/page-shell";
import { createReproPageData } from "~/lib/repro-data";

export function meta() {
  return [{ title: "Dynamic control | Prerender repro" }];
}

export async function loader() {
  return createReproPageData("/dynamic");
}

export default function Dynamic() {
  const data = useLoaderData<typeof loader>();

  return (
    <PageShell
      title="/dynamic"
      description="A control route that is intentionally not included in prerender() and should remain dynamic."
      data={data}
      expectedStatic={false}
    />
  );
}
