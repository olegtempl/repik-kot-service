<script>
  // import { sexes } from "./../../data/data.js";
  import { sexes } from "./../../data/checkboxAttributes";

  export let sex = [];
</script>

<style>

</style>

<h3 class="text-sm">Род выкладніка</h3>

<!-- {#each sexes as sx, i}
<label class="control control--checkbox">{sx}
	<input bind:group={sex} value={sx} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label>
{/each} -->

{#each sexes as sx, i}
  <div class="checkbox">
    <input
      id={100 + i}
      name="keywords"
      type="checkbox"
      bind:group={sex}
      value={sx} />
    <label class="text-gray" for={100 + i}>{sx}</label>
  </div>
{/each}
