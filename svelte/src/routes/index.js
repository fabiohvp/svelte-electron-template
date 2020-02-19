import About from "../pages/About.svelte";
import Home from "../pages/Home.svelte";
import ParameterizedPage from "../pages/Parameterized-Page.svelte";

const routes = [
	{
		path: "/home",
		component: Home
	},
	{
		path: "/about",
		component: About
	},
	{
		path: "/parameterized-page(/:id)",
		component: ParameterizedPage
	}
];

export default routes;
