<aside>
	<div class="filter-panel-wrap">
		<div class="container">
			<div class="control-group">
				<!-- <Filters /> -->
				<!-- <ContinuousEmployment bind:continuous /> -->
				<SexTeacher bind:sex />
				<StatusTeacher bind:status />
				<EducationDegree bind:degree />
				<EducationTeacher bind:education />
				<GoalEmployment bind:goal />
				<TypeEmployment bind:type />
				<PlaceOfEmployment bind:place />
				<!-- <Filters bind:subject bind:name bind:status bind:sex /> -->
			</div>
		</div>
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
	// import ContinuousEmployment from "./components/filters/ContinuousEmployment.svelte";
	import SexTeacher from "./components/filters/SexTeacher.svelte";
	import StatusTeacher from "./components/filters/StatusTeacher.svelte";
	import EducationDegree from "./components/filters/EducationDegree.svelte";
	import EducationTeacher from "./components/filters/EducationTeacher.svelte";
	import GoalEmployment from "./components/filters/GoalEmployment.svelte";
	import PlaceOfEmployment from "./components/filters/PlaceOfEmployment.svelte";
	import TypeEmployment from "./components/filters/TypeEmployment.svelte";

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
								  /* background-color: gray; */
								}

								/* :global(.container) {
																					  width: 100%;
																					  height: 100%;
																					  display: flex;
																					  flex-wrap: wrap;
																					  justify-content: center;
																					  align-items: center;

																					} */

								:global(.control-group) {
								  display: inline-block;
								  vertical-align: top;
								  background: #fff;
								  text-align: left;
								  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
								  /* padding: 30px; */
								  /* width: 200px;
																  height: 210px; */
								  margin: 10px;
								}

								:global(.control) {
								  display: block;
								  position: relative;
								  padding-left: 30px;
								  margin-bottom: 15px;
								  cursor: pointer;
								  font-size: 18px;
								}

								:global(.control input) {
								  position: absolute;
								  z-index: -1;
								  opacity: 0;
								}

								:global(.control__indicator) {
								  position: absolute;
								  top: 2px;
								  left: 0;
								  height: 20px;
								  width: 20px;
								  background: #e6e6e6;
								}

								:global(.control--radio .control__indicator) {
								  border-radius: 50%;
								}

								:global(.control:hover input ~ .control__indicator, .control
								    input:focus
								    ~ .control__indicator) {
								  background: #ccc;
								}

								:global(.control input:checked ~ .control__indicator) {
								  background: #2aa1c0;
								}

								:global(.control:hover
								    input:not([disabled]):checked
								    ~ .control__indicator, .control input:checked:focus ~ .control__indicator) {
								  background: #0e647d;
								}

								:global(.control input:disabled ~ .control__indicator) {
								  background: #e6e6e6;
								  opacity: 0.6;
								  pointer-events: none;
								}

								:global(.control__indicator:after) {
								  content: "";
								  position: absolute;
								  display: none;
								}

								:global(.control input:checked ~ .control__indicator:after) {
								  display: block;
								}

								:global(.control--checkbox .control__indicator:after) {
								  left: 8px;
								  top: 4px;
								  width: 3px;
								  height: 8px;
								  border: solid #fff;
								  border-width: 0 2px 2px 0;
								  transform: rotate(45deg);
								}
</style>



