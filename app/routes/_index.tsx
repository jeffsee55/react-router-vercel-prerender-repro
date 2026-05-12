import { Link } from "react-router";

export function meta() {
  return [
    { title: "React Router Vercel prerender repro" },
    {
      name: "description",
      content:
        "A minimal React Router v7.13.0 app reproducing Vercel preset prerender behavior.",
    },
  ];
}

export default function Index() {
  return (
    <main className="shell">
      <section className="hero">
        <p className="eyebrow">Minimal customer repro</p>
        <h1>React Router v7.13.0 prerender routes on Vercel</h1>
        <p>
          This app uses <code>@vercel/react-router</code>{" "}
          <code>vercelPreset()</code> and an async <code>prerender()</code>{" "}
          function for the same paths described in the customer report.
        </p>
      </section>

      <section className="card">
        <h2>Pre-render targets</h2>
        <ul className="route-list">
          <li>
            <Link to="/terms">/terms</Link>
          </li>
          <li>
            <Link to="/privacy">/privacy</Link>
          </li>
          <li>
            <Link to="/mint-risks">/mint-risks</Link>
          </li>
          <li>
            <Link to="/home">/home</Link>
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Dynamic control route</h2>
        <p>
          <Link to="/dynamic">/dynamic</Link> is intentionally not included in
          the prerender list. It should be served by a Function and change on
          every refresh.
        </p>
      </section>
    </main>
  );
}
