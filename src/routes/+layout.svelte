<script>
	import "../app.pcss";
	import Header from './Header.svelte';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot></slot>
	</main>
</div>
