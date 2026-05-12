export type ReproPageData = {
  path: string;
  generatedAt: string;
  randomToken: string;
  environment: {
    nodeEnv: string | undefined;
    vercel: string | undefined;
    vercelEnv: string | undefined;
    nowRegion: string | undefined;
  };
};

export function createReproPageData(path: string): ReproPageData {
  return {
    path,
    generatedAt: new Date().toISOString(),
    randomToken: Math.random().toString(36).slice(2),
    environment: {
      nodeEnv: process.env.NODE_ENV,
      vercel: process.env.VERCEL,
      vercelEnv: process.env.VERCEL_ENV,
      nowRegion: process.env.NOW_REGION,
    },
  };
}
