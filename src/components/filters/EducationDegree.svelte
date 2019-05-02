<h3 class="text-sm">Наяўнасць навуковай ступені</h3>

{#each educationDegree as de, i}
<!-- <label class="control control--checkbox">{de}
	<input bind:group={degree} value={de} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label> -->
<div class="checkbox">
  <input id={300 + i} name="keywords" type="checkbox" bind:group={degree} value={de} >
  <label class="text-gray" for={300 + i} >{de}</label>
</div>
{/each}



<script>
		import { educationDegree } from "./../../data/checkboxAttributes";
		export let degree = [];
</script>

