<svelte:head>
	<link rel='stylesheet' href='viktoriya.css'>
</svelte:head>




<!-- Start header block-->
<header>
	<div class="panel-logo">
		<div class="name-service-wrap">
			<div class="name-service">Repik-cat</div>
		</div>
		<div class="logo-wrap"><img src="./images/logo.png" alt="Logo Repik-kot project"></div>
	</div>
	<div class="promo-block"><img src="./images/header_image.png" alt="Promo image the Repik-kot project" srcset=""></div>
	<div class="heading-service-wrap">
		<div class="heading-service">
			<h2 class="name-service">Repikcat -</h2>
			<p class="text-center">сэрвіс для пошуку рэпетытараў</p>
		</div>
	</div>
</header>
<!-- End header block-->
<!-- Start main block-->
<main>
	<!-- Navigation brow-->
	<div class="content">
		<div class="section background-dark">
			<div class="container text-center">
				<h2 class="text-md text-white">Усе даступныя рэпетытары</h2>
			</div>
		</div>
		<div class="top-repetitors-block">
			<aside>
				<div class="filter-panel-wrap">
					<h2 class="text-md text-center">Фільтр для пошуку рэпетытараў:</h2>
					<div class="filter-panel">
						<div class="checkboxes-block">
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


			<div class="repetitors-preview">
				<h2 class="text-lg text-black"> Топ 3 рэпетытараў</h2>

				{#each repetitors as rep, i (rep.personalInfo.id)}
				<RepetitorCard {...rep} />
				{:else}
				<h2 class="text-md text-center text-white">Шкадую, я не змог падабраць такога рэпетытара</h2>
				{/each}
			</div>


		</div>

	</div>
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
</style>



