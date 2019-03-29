<div>
	<h5>{name}</h5>
	<p>{status}</p>
	<p>{sex}</p>
	<p>{continuous}</p>
	<p>{degree}</p>
	<p>{education}</p>
	<p>{goal}</p>
	<p>{place}</p>
	<p>{type}</p>
	<!-- <p>{}</p> -->
</div>

<script>
	export let name = "",
	  status = [],
	  sex = [],
	  continuous = [],
	  degree = [],
	  education = [],
	  goal = [],
	  place = [],
	  type = [];
</script>

<style>
	div {
	  width: 150px;
	  float: left;
	  border: 1px solid lightgray;
	  border-radius: 3px;
	  padding: 0 10px;
	  margin: 10px;
	}
</style>