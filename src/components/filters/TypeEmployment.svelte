<!-- <div class="checkboxes-block">
	<h3 class="text-sm">Тып занятку</h3>
	{#each typeEmployment as tt, i}
	<div class="checkbox">
		<input bind:group={type} id="checkbox1" name="keywords" type="checkbox" value={tt}>
		<label class="text-gray" for="checkbox1">{tt}</label>
	</div>
	{/each}
</div> -->

<h3 class="text-sm">Тып занятку</h3>


{#each typeEmployment as tt, i}
<!-- <label class="control control--checkbox">{tt}
	<input bind:group={type} value={tt} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label> -->


<div class="checkbox">
  <input id={600+ i} name="keywords" type="checkbox"  bind:group={type} value={tt}  >
  <label class="text-gray" for={600+i}>{tt}</label>
</div>

{/each}



<script>
		import { typeEmployment } from "./../../data/checkboxAttributes";
		export let type = [];
</script>


