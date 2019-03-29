<div class="checkboxes-block">
	<h3 class="text-sm">Статус выкладніка</h3>
	{#each statuses as st, i}
	<div class="checkbox">
		<input bind:group={status} id="checkbox1" name="keywords" type="checkbox" value={st}>
		<label class="text-gray" for="checkbox1">{st}</label>
	</div>
	{/each}
</div>

<script>
		import { statuses } from "./../../data/checkboxAttributes";
		export let status = [];
</script>