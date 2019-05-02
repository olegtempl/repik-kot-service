<h3 class="text-sm">Месца заняткаў</h3>

{#each placeOfEmployment as pt, i}
<!-- <label class="control control--checkbox">{pt}
	<input bind:group={place} value={pt} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label> -->


<div class="checkbox">
  <input id={700+ i} name="keywords" type="checkbox"  bind:group={place} value={pt}  >
  <label class="text-gray" for={700+i}>{pt}</label>
</div>

{/each}


<script>
		import { placeOfEmployment } from "./../../data/checkboxAttributes";
		export let place = [];
</script>

