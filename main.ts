import { router } from "./src/router.ts";

const HOST = Deno.env.get("HOST");
const PORT = Deno.env.get("PORT");

Deno.serve(
  { hostname: HOST, port: parseInt(PORT ?? "8000") },
  router,
);
