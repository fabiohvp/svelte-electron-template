<script>
  import { onDestroy, onMount } from "svelte";
  import SvelteRouter from "svelte-router";
  import router from "./uses/router.js";
  import routes from "./routes/index.js";

  let matchedRoute;

  onMount(async () => {
    document.addEventListener("routeChange", onRouteChange);
    document.addEventListener("log", onLog);
  });

  onDestroy(() => {
    document.removeEventListener("routeChange", onRouteChange);
    document.removeEventListener("log", onLog);
  });

  async function onRouteChange(event) {
    matchedRoute = SvelteRouter.getRoute(routes, event.detail.path);
  }

  function onLog(event) {
    console.log("server-log", event.detail);
  }
</script>

<div use:router={routes}>
  {#if matchedRoute}
    <svelte:component this={matchedRoute.component} {...matchedRoute.props} />
  {/if}
</div>
