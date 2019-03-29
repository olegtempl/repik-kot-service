<h3 class="text-sm"> Адукацыя выкладніка</h3>
{#each educationTeacher as er, i}
<label class="control control--checkbox">{er}
	<input bind:group={education} value={er} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label>
{/each}


<script>
		import { educationTeacher } from "./../../data/checkboxAttributes";
		export let education = [];
</script>

