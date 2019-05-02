<h3 class="text-sm"> Адукацыя выкладніка</h3>
{#each educationTeacher as er, i}
<!-- <label class="control control--checkbox">{er}
	<input bind:group={education} value={er} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label> -->

<div class="checkbox">
  <input id={400+ i} name="keywords" type="checkbox"  bind:group={education} value={er}  >
  <label class="text-gray" for={400+i}>{er}</label>
</div>


{/each}


<script>
		import { educationTeacher } from "./../../data/checkboxAttributes";
		export let education = [];
</script>

