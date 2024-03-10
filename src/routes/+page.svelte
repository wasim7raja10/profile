<script>
	import Container from '$lib/components/Container.svelte';
	import ProfileSection from './ProfileSection.svelte';
</script>

<svelte:head>
	<title>Duggup | Profile</title>
	<meta name="description" content="This is a profile page of a techie." />
</svelte:head>

<section class="h-screen">
	<Container classes="max-w-[1000px]"><ProfileSection /></Container>
</section>
