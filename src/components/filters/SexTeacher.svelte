<h3 class="text-sm">Пол преподователя:</h3>

{#each sexes as sx, i}
<label class="control control--checkbox">{sx}
	<input bind:group={sex} value={sx} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label>
{/each}




<script>
		// import { sexes } from "./../../data/data.js";
		import { sexes } from "./../../data/checkboxAttributes";

		export let sex = [];
</script>


<style>
</style>