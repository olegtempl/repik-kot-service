<h3 class="text-sm">Працягласць занятку</h3>
{#each continuousEmployment as cs, i}
<label class="control control--checkbox">{cs} хвілін
	<input bind:group={continuous} value={cs} type="checkbox" checked="checked" />
	<div class="control__indicator"></div>
</label>
{/each}



<script>
 import { continuousEmployment } from "./../../data/checkboxAttributes";

 export let continuous = [];
</script>

<style>
</style>
