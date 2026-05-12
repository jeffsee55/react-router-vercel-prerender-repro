# React Router v7.13.0 Vercel prerender repro

Minimal reproduction for a React Router v7.13.0 app using:

- `@vercel/react-router` `vercelPreset()`
- `ssr: true`
- async `prerender()` returning `/terms`, `/privacy`, `/mint-risks`, and `/home`

Each target route has a loader that emits `generatedAt` and `randomToken`. If the
route is served from pre-rendered HTML, those values are created at build time
and stay stable until the next deployment. If the route is served by a Vercel
Function, those values change when the page is requested.

## Files to inspect

- `react-router.config.ts` contains the Vercel preset and async `prerender()`
  function.
- `app/routes.ts` defines the four static routes and one dynamic control route.
- `app/routes/dynamic.tsx` is intentionally not returned from `prerender()` and
  should continue to run dynamically.

## Local verification

```bash
npm install
npm run build
npm run verify:prerender
```

The React Router build should print `Prerender: Generated ...` lines for:

- `build/client/home/index.html`
- `build/client/terms/index.html`
- `build/client/privacy/index.html`
- `build/client/mint-risks/index.html`

It should not generate `build/client/dynamic/index.html`.

## Deploy to Vercel

```bash
npx vercel
```

Deploy from the project root, not from the generated `build` directory.

After deployment, open these routes:

- `/terms`
- `/privacy`
- `/mint-risks`
- `/home`
- `/dynamic`

Expected result:

- The four pre-rendered routes should keep the same `generatedAt` and
  `randomToken` values across refreshes and should not create runtime Function
  log entries.
- `/dynamic` should change values across refreshes and should appear as a
  Function invocation.

If Vercel shows Function handling for the four pre-rendered routes or those
values update per request, the deployment is reproducing the reported issue.
