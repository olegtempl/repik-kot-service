<h3 class="text-sm">Мэта занятку</h3>
{#each goalEmployment as gl, i}
<!-- <label class="control control--checkbox">{gl}
	<input bind:group={goal} value={gl} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label> -->


<div class="checkbox">
  <input id={500+ i} name="keywords" type="checkbox"  bind:group={goal} value={gl} >
  <label class="text-gray" for={500+i}>{gl}</label>
</div>


{/each}



<script>
		import { goalEmployment } from "./../../data/checkboxAttributes";
		export let goal = [];
</script>

