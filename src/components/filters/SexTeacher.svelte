<div class="checkboxes-block">
	<h6>Пол преподователя:</h6>
	{#each sexes as sx, i}
	<div class="checkbox">
		<input bind:group={sex} value={sx} id="checkbox8" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox8">{sx}</label>
	</div>
	{/each}
</div>




<script>
		// import { sexes } from "./../../data/data.js";
		import { sexes } from "./../../data/checkboxAttributes";

		export let sex = [];
</script>