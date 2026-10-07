import { Suspense } from "react";
import { connection } from "next/server";

async function ApiStatus() {
  await connection(); // read API_URL at request time, not build time
  const apiUrl = process.env.API_URL ?? "http://localhost:4000";
  try {
    const [hello, health] = await Promise.all([
      fetch(apiUrl, { cache: "no-store" }).then((r) => r.text()),
      fetch(`${apiUrl}/health`, { cache: "no-store" }).then((r) => r.json()),
    ]);
    return (
      <p className="text-green-600">
        Backend says: “{hello}” (health: {health.status})
      </p>
    );
  } catch {
    return <p className="text-red-600">Backend unreachable at {apiUrl}</p>;
  }
}

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-semibold">Next.js + NestJS</h1>
      <Suspense fallback={<p>Checking backend…</p>}>
        <ApiStatus />
      </Suspense>
    </main>
  );
}
