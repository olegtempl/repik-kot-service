<aside>
	<div class="filter-panel-wrap">
		<!-- <Filters /> -->
		<!-- <ContinuousEmployment bind:continuous /> -->
		<SexTeacher bind:sex />
		<StatusTeacher bind:status />
		<EducationDegree bind:degree />
		<EducationTeacher bind:education />
		<GoalEmployment bind:goal />
		<!-- <PlaceOfEmployment bind:place /> -->
		<!-- <TypeEmployment bind:type />  -->
		<!-- <Filters bind:subject bind:name bind:status bind:sex /> -->
	</div>
</aside>

<main>
	{#each repetitors as rep, i (rep.personalInfo.id)}
	<RepetitorCard {...rep} />
	{:else}
	<div>No repetitors</div>
	{/each}
</main>



<script>
	import RepetitorCard from "./components/RepetitorCard.svelte";
	// import Filters from "./components/Filters.svelte";
	import ContinuousEmployment from "./components/filters/ContinuousEmployment.svelte";
	import SexTeacher from "./components/filters/SexTeacher.svelte";
	import StatusTeacher from "./components/filters/StatusTeacher.svelte";
	import EducationDegree from "./components/filters/EducationDegree.svelte";
	import EducationTeacher from "./components/filters/EducationTeacher.svelte";
	import GoalEmployment from "./components/filters/GoalEmployment.svelte";
	// import PlaceOfEmployment from "./components/filters/PlaceOfEmployment.svelte";
	// import TypeEmployment from "./components/filters/TypeEmployment.svelte";

	// import {
	//   sexes,
	//   educationDegree,
	//   placeOfEmployment,
	//   goalEmployment,
	//   continuousEmployment,
	//   typeEmployment,
	//   statuses
	// } from "./data/checkboxAttributes";

	import { filter } from "./data/data.js";

	let status = [],
	  sex = [],
	  continuous = [],
	  degree = [],
	  education = [],
	  goal = [],
	  place = [],
	  type = [],
	  name = "",
	  repetitors = [];

	$: repetitors = filter({
	  status,
	  sex,
	  continuous,
	  degree,
	  education,
	  goal,
	  place,
	  type,
	  name
	});
</script>

<style>
	aside {
	  float: left;
	  width: 200px;
	  border-right: 1px solid gray;
	  margin-right: 20px;
	}
</style>



