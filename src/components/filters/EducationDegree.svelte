<h3 class="text-sm">Наяўнасць навуковай ступені</h3>
{#each educationDegree as de, i}
<label class="control control--checkbox">{de}
	<input bind:group={degree} value={de} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label>
{/each}

<script>
		import { educationDegree } from "./../../data/checkboxAttributes";
		export let degree = [];
</script>

