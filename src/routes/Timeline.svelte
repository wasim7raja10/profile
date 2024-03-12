<script>
	import Container from '$lib/components/Container.svelte';
	import { timelineData } from '$lib/data/timeline.data';
	import ArticleCards from '$lib/components/ArticleCards.svelte';
	import CareerUpdateCard from '$lib/components/CareerUpdateCard.svelte';
</script>

<Container classes="relative mx-auto my-10 max-w-[1000px]">
	<!-- line -->
	<div class="absolute bottom-0 left-[60px] top-0 mx-5 w-[1px] bg-[#778FB1]"></div>

	{#each timelineData as data}
		{#if data.type === 'articles'}
			<ArticleCards articleData={data} />
		{:else}
			<CareerUpdateCard careerUpdateData={data} />
		{/if}
	{/each}
</Container>
