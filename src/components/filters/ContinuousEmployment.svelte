<!-- <div class="checkbox">
		<input id="checkbox22" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox22"> 30 хвілін</label>
	</div>
	<div class="checkbox">
		<input id="checkbox23" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox23">60 хвілін</label>
	</div>
	<div class="checkbox">
		<input id="checkbox24" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox24">90 хвілін</label>
	</div>
	<div class="checkbox">
		<input id="checkbox25" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox25">120 хвілін</label>
	</div>
</div>  -->

<div class="checkboxes-block">
	<h3 class="text-sm">Працягласць занятку</h3>
	{#each continuousEmployment as cs, i}
	<div class="checkbox">
		<input bind:group={continuous} value={cs} id="checkbox8" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox8">{cs} хвілін</label>
	</div>
	{/each}
</div>


<script>
		import { continuousEmployment } from "./../../data/checkboxAttributes";

		export let continuous = [];
</script>



<!-- <div class="checkboxes-block">
	<h6>Пол преподователя:</h6>
	{#each sexes as sx, i}
	<div class="checkbox">
		<input bind:group={sex} value={sx} id="checkbox8" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox8">{sx}</label>
	</div>
	{/each}
</div>




<script>
		// import { sexes } from "./../../data/data.js";
		import { sexes } from "./../../data/checkboxAttributes";
		export let sex = [];
</script> -->