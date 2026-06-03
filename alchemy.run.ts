import alchemy from "alchemy";
import { D1Database, TanStackStart } from "alchemy/cloudflare";

const app = await alchemy("tanstack-start-effect");

const db = await D1Database("products-db", {
  migrationsDir: "./migrations",
});

export const website = await TanStackStart("website", {
  // because we enable nodejs_compat, Cloudflare exposes them
  // on process.env, which is where Effect's Config reads from.
  bindings: {
    DB: db, // available as env.DB at runtime
  },
  compatibilityFlags: ["nodejs_compat"],
});

console.log(`\n Deployed: ${website.url}\n`);

await app.finalize();
