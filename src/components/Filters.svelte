<!-- <h6>Subject</h6>
<select bind:value={subject}>
	<option></option>
	{#each subjects as subject}
	<option>{subject}</option>
	{/each}
</select>


<h6>Name:</h6>
<input bind:value={name}>

<h6>Status:</h6>
{#each statuses as st, i}
<label>
	<input bind:group={status} value={st} type="checkbox">
	{st}
</label>
{/each}
-->

<!-- <h6>Sex:</h6>
{#each sexes as sx, i}
<label>
	<input bind:group={sex} value={sx} type="checkbox">
	{sx}
</label>
{/each} -->


<h2 class="text-md text-center">Фільтр для пошуку рэпетытараў:</h2>
<div class="filter-panel">
	<!-- <ContinuousEmployment bind:subject bind:sex /> -->
	<!-- <GoalEmployment /> -->
	<!--<StatusTeacher /> -->
	<!--<EducationDegree /> -->
	<!--<PlaceOfEmployment />-->
	<SexTeacher bind:subject bind:sex />
	<!-- <TypeEmployment /> -->
	<!-- <EducationTeacher />  -->

</div>

<script>
		import { subjects, statuses, sexes } from "./../data/data.js";
		import ContinuousEmployment from "./filters/ContinuousEmployment.svelte";
		// import GoalEmployment from "./filters/GoalEmployment.svelte";
		// import StatusTeacher from "./filters/StatusTeacher.svelte";
		// import EducationDegree from "./filters/EducationDegree.svelte";
		// import PlaceOfEmployment from "./filters/PlaceOfEmployment.svelte";
		import SexTeacher from "./filters/SexTeacher.svelte";
		// import TypeEmployment from "./filters/TypeEmployment.svelte";
		// import EducationTeacher from "./filters/EducationTeacher.svelte";

		export let status = [],
		  subject = "",
		  name = "",
		  sex = [];
</script>