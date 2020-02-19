import SvelteRouter from "svelte-router";

function router(node, routes) {
  const router = new SvelteRouter({
    target: node,
    mode: "hash",
    routes: routes
  });

  return {
    destroy() {
      router.destroy();
    }
  };
}

export default router;
