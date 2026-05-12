import { Link } from "react-router";
import type { ReproPageData } from "~/lib/repro-data";

const prerenderTargets = ["/terms", "/privacy", "/mint-risks", "/home"];

export function PageShell({
  title,
  description,
  data,
  expectedStatic,
}: {
  title: string;
  description: string;
  data: ReproPageData;
  expectedStatic: boolean;
}) {
  return (
    <main className="shell">
      <nav aria-label="Primary navigation" className="nav">
        <Link to="/">Repro overview</Link>
        {prerenderTargets.map((path) => (
          <Link key={path} to={path}>
            {path}
          </Link>
        ))}
        <Link to="/dynamic">/dynamic</Link>
      </nav>

      <section className="hero">
        <p className="eyebrow">React Router v7.13.0 + Vercel preset</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </section>

      <section className="card">
        <h2>Expected behavior</h2>
        <p>
          This route is{" "}
          <strong>{expectedStatic ? "listed" : "not listed"}</strong> in{" "}
          <code>react-router.config.ts</code> <code>prerender()</code>.
        </p>
        {expectedStatic ? (
          <p>
            On Vercel, the values below should be generated once during the
            build and remain stable across refreshes. Repeated Function
            invocations indicate the pre-rendered HTML is not being served.
          </p>
        ) : (
          <p>
            This control route should continue to server render dynamically, so
            the values below should change across refreshes.
          </p>
        )}
      </section>

      <section className="card">
        <h2>Loader output</h2>
        <dl className="facts">
          <div>
            <dt>Route path</dt>
            <dd data-testid="route-path">{data.path}</dd>
          </div>
          <div>
            <dt>Generated at</dt>
            <dd data-testid="generated-at">{data.generatedAt}</dd>
          </div>
          <div>
            <dt>Random token</dt>
            <dd data-testid="random-token">{data.randomToken}</dd>
          </div>
          <div>
            <dt>VERCEL</dt>
            <dd>{data.environment.vercel ?? "(unset)"}</dd>
          </div>
          <div>
            <dt>VERCEL_ENV</dt>
            <dd>{data.environment.vercelEnv ?? "(unset)"}</dd>
          </div>
          <div>
            <dt>NOW_REGION</dt>
            <dd>{data.environment.nowRegion ?? "(unset)"}</dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
