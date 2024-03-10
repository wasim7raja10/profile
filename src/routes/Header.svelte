<script>
	import Container from '$lib/components/Container.svelte';
	import CtaButton from '$lib/components/CtaButton.svelte';
	import Explore from '$lib/components/icons/Explore.svelte';
	import Home from '$lib/components/icons/Home.svelte';
	import Learn from '$lib/components/icons/Learn.svelte';
	import Plus from '$lib/components/icons/Plus.svelte';
</script>

<header class="py-4">
	<Container>
		<div class="flex items-center justify-between">
			<img height="27" width="108" src="src/lib/images/brand.svg" alt="Logo Brand" />

			<div class="flex items-center gap-10 text-foreground-secondary">
				<a href="/home" class="group flex items-center gap-2">
					<Home />
					<span class="text-sm leading-5 group-hover:text-hover">Home</span>
				</a>
				<a href="/home" class="group flex items-center gap-2">
					<Explore />
					<span class="text-sm leading-5 group-hover:text-hover">Explore</span>
				</a>
				<a href="/home" class="group flex items-center gap-2">
					<Learn />
					<span class="text-sm leading-5 group-hover:text-hover">Learn</span>
				</a>
				<CtaButton>
					<Plus />
					Post
				</CtaButton>
			</div>
		</div>
	</Container>
</header>
