<script lang="ts">
	import type { ArticleData } from '$lib/types/article.type';
	import ScrollArea from './ui/scroll-area/scroll-area.svelte';

	export let articleData: ArticleData;
</script>

<div class="relative flex h-[288px] items-center">
	<!-- date -->
	<div class="absolute left-5 -translate-x-[100%] text-xs text-foreground-accent">
		<div>{articleData.date}</div>
	</div>

	<!-- circle -->
	<div
		class="absolute left-[61px] z-10 h-4 w-4 -translate-x-1/2 rounded-[50%] border-[3px] border-hover bg-white"
	></div>

	<!-- Content -->
	<ScrollArea orientation="horizontal" class="absolute left-[100px] m-4 w-[800px]">
		<div class=" flex items-center gap-8 pb-4">
			{#each articleData.articles as article}
				<div class="w-[344px] overflow-hidden rounded-[12px] border shadow-sm">
					<div class="h-[136px] w-full">
						<img src={article.imgUrl} alt={article.title} class="h-full w-full object-cover" />
					</div>
					<p class="line-clamp-2 p-6">{article.title}</p>
				</div>
			{/each}
		</div>
	</ScrollArea>
</div>
