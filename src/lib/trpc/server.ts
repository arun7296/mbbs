import "server-only";
import { appRouter } from "@/server/trpc/root";
import { createTRPCContext } from "@/server/trpc/trpc";

/**
 * Server-side tRPC caller for use in Server Components.
 * Usage: const data = await serverTrpc.curriculum.getSubject({ code: "AN" });
 */
export async function getServerTrpc() {
  const ctx = await createTRPCContext();
  return appRouter.createCaller(ctx);
}
