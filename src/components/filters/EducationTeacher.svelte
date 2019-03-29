<div class="checkboxes-block">
	<h3 class="text-sm"> Адукацыя выкладніка</h3>
	{#each educationTeacher as er, i}
	<div class="checkbox">
		<input bind:group={education} value={er} id="checkbox10" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox10">{er}</label>
	</div>
	{/each}
	<!-- <div class="checkbox">
		<input id="checkbox11" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox11">Сярэдне-адмысловае</label>
	</div>
	<div class="checkbox">
		<input id="checkbox12" name="keywords" type="checkbox" value="">
		<label class="text-gray" for="checkbox12">Найвышэйшае</label>
	</div> -->
</div>


<script>
		import { educationTeacher } from "./../../data/checkboxAttributes";
		export let education = [];
</script>

<!--
<div class="checkboxes-block">
	<h3 class="text-sm">Наяўнасць навуковай ступені</h3>
	{#each educationDegree as de, i}
	<div class="checkbox">
		<input bind:group={degree} value={de} id="checkbox13" name="keywords" type="checkbox">
		<label class="text-gray" for="checkbox13">{de}</label>
	</div>
	{/each}
</div>



<script>
		import { educationDegree } from "./../../data/checkboxAttributes";
		export let degree = [];
</script>
 -->
