<script>
	import { triggerServer } from "../utils/eventHandler.js";
	export let id;

	let newId = id;

	function submitNewParameter() {
		triggerServer("changeParameterValue", newId);
	}
</script>

<div>
	Id: {id}
</div>
<div>
	<label>New Id:</label>
	<input type="text" bind:value={newId} autofocus />
	<br />
	<br />
	<button on:click={submitNewParameter}>Submit new parameter</button>
	<label>This will trigger an event to electron and electron will trigger back the same route with new parameter (just a communication sample between svelte and electron)</label>
</div>