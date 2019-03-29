<div class="checkboxes-block">
	<h3 class="text-sm">Наяўнасць навуковай ступені</h3>
	{#each educationDegree as de, i}
	<div class="checkbox">
		<input bind:group={degree} value={de} id="checkbox13" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox13">{de}</label>
	</div>
	{/each}
</div>



<script>
		import { educationDegree } from "./../../data/checkboxAttributes";
		export let degree = [];
</script>

