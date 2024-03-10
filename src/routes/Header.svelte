<script>
	import Container from '$lib/components/Container.svelte';
</script>

<header class="py-4">
	<Container>
		<div class="flex items-center justify-between">
			<img height="27" width="108" src="src/lib/images/brand.svg" alt="Logo Brand" />

			<div class="flex items-center gap-10">
				<a href="/home" class="text-foreground-secondary flex items-center gap-2">
					<img class="m-1 h-4 w-4" src="src/lib/icons/home.svg" alt="home icon" />
					<span class="text-sm leading-5">Home</span>
				</a>
				<a href="/home" class="text-foreground-secondary flex items-center gap-2">
					<img class="m-1 h-4 w-4" src="src/lib/icons/explore.svg" alt="explore icon" />
					<span class="text-sm leading-5">Explore</span>
				</a>
				<a href="/home" class="text-foreground-secondary flex items-center gap-2">
					<img class="m-1 h-4 w-4" src="src/lib/icons/learn.svg" alt="learn icon" />
					<span class="text-sm leading-5">Learn</span>
				</a>
			</div>
		</div>
	</Container>
</header>
