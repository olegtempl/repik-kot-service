<h6>Subject</h6>
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
<h6>Sex:</h6>
{#each sexes as sx, i}
<label>
	<input bind:group={sex} value={sx} type="checkbox">
	{sx}
</label>
{/each}

<script>
	import { subjects, statuses, sexes } from './data.js';

	export let status = [],
			subject = '',
			name = '',
			sex = [];
</script>