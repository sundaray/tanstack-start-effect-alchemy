import alchemy from "alchemy";
import { TanStackStart } from "alchemy/cloudflare";

const app = await alchemy("tanstack-start-effect");

export const website = await TanStackStart("website", {
  // because we enable nodejs_compat, Cloudflare exposes them
  // on process.env, which is where Effect's Config reads from.
  bindings: {
    DUMMY_JSON_BASE_URL:
      process.env.DUMMY_JSON_BASE_URL ?? "https://dummyjson.com",
  },
  compatibilityFlags: ["nodejs_compat"],
});

console.log(`\n Deployed: ${website.url}\n`);

await app.finalize();
