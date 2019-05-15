      <div class="top-repetitors-block">
<aside>
	<div class="filter-panel-wrap">
		<div class="container">
			<div class="control-group">
				<SexTeacher bind:sex />
				<StatusTeacher bind:status />
				<EducationDegree bind:degree />
				<EducationTeacher bind:education />
				<GoalEmployment bind:goal />
				<TypeEmployment bind:type />
				<PlaceOfEmployment bind:place />
				<!-- <Filters bind:sex bind:status bind:degree bind:education bind:goal bind:type bind:place /> -->
			</div>
		</div>
	</div>
</aside>
	</div>

<div class="repetitors-preview">
  <h2 class="text-lg text-black"> Топ 3 рэпетытараў</h2>
</div>
<main>
	{#each repetitors as rep, i (rep.personalInfo.id)}
	<RepetitorCard {...rep} />
	{:else}
	<div>No repetitors</div>
	{/each}
</main>



<script>
	// import Filters from "./components/Filters.svelte";
	import RepetitorCard from "./components/RepetitorCard.svelte";

	import { filter } from "./data/data.js";
	// import ContinuousEmployment from "./filters/ContinuousEmployment.svelte";
	import SexTeacher from "./components/filters/SexTeacher.svelte";
	import StatusTeacher from "./components/filters/StatusTeacher.svelte";
	import EducationDegree from "./components/filters/EducationDegree.svelte";
	import EducationTeacher from "./components/filters/EducationTeacher.svelte";
	import GoalEmployment from "./components/filters/GoalEmployment.svelte";
	import PlaceOfEmployment from "./components/filters/PlaceOfEmployment.svelte";
	import TypeEmployment from "./components/filters/TypeEmployment.svelte";

	export let status = [],
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

.repetitors-preview {
  grid-area: r;
  padding: 60px 0 0 0;
}


  .repetitors-preview   h2 {
    font-weight: bold;
    margin-left: 45px;
  }

	h2,
	h3 {
	  font-family: Roboto;
	  color: #000000;
	}
	.checkboxes-block {
	  margin-bottom: 28px;
	  max-width: 100%;
	}
	.filter-panel {
	  display: flex;
	  justify-content: flex-start;
	  flex-direction: column;
	  flex-wrap: nowrap;
	  align-items: flex-start;
	}
	.filter-panel-wrap {
	  padding: 4% 0 0 10%;
	}
	aside {
	  grid-area: a;

	  display: flex;
	  flex-direction: column;
	  background: rgba(196, 196, 196, 0.5);
	  border: 1px solid #1fcecb;
	  margin-right: 20px;
	}

	aside {
	   float: left;
	  /* width: 200px; */
	  /* border-right: 1px solid gray; */

	  /* background-color: gray; */
	}

	:global(.control-group) {
	  display: inline-block;
	  vertical-align: top;
	  text-align: left;
	  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);*/
	  /* padding: 30px; */
	  /* width: 200px;
																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		height: 210px; */

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



