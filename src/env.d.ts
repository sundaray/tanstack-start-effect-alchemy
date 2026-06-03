import { Cloudflare } from "@cloudflare/workers-types";
import type { website } from "../alchemy.run";

export type WorkerEnv = typeof website.Env;

declare module "cloudflare:workers" {
  namespace Cloudflare {
    export interface Env extends WorkerEnv {}
  }
}
