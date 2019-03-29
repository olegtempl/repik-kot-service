<div class="checkboxes-block">
	<h3 class="text-sm">Мэта занятку</h3>
	{#each goalEmployment as gl, i}
	<div class="checkbox">
		<input bind:group={goal} value={gl} id="checkbox17" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox17"> {gl} </label>
	</div>
	{/each}
	<!-- <div class="checkbox">
		<input id="checkbox18" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox18">Рыхтоўля да ОГЭ</label>
	</div>
	<div class="checkbox">
		<input id="checkbox19" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox19"> Рыхтоўля да АДЭ</label>
	</div>
	<div class="checkbox">
		<input id="checkbox20" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox20">Рыхтоўля да алімпіяд</label>
	</div>
	<div class="checkbox">
		<input id="checkbox21" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox21">Рыхтоўля да ДВИ</label>
	</div> -->
</div>


<script>
		import { goalEmployment } from "./../../data/checkboxAttributes";
		export let goal = [];
</script>



<!-- <div class="checkboxes-block">
	<h6>Пол преподователя:</h6>

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