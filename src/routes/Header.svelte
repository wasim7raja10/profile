<script>
	import Container from '$lib/components/Container.svelte';
	import CtaButton from '$lib/components/CtaButton.svelte';
	import Explore from '$lib/components/icons/Explore.svelte';
	import Home from '$lib/components/icons/Home.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { profileData } from '$lib/data/profile.data';
	import { getInitials } from '$lib/utils.js';
	import { ChevronDown, BookOpen, SquarePlus } from 'lucide-svelte';
	import brand from "$lib/images/brand.svg"
</script>

<header class="sticky top-0 z-50 bg-white">
	<Container classes="py-4 border-b border-dotted border-[#525C69]">
		<div class="flex items-center justify-between">
			<img height="27" width="108" src={brand} alt="Logo Brand" />

			<div class="flex items-center gap-10 text-foreground-secondary">
				<a href="/" class="group flex items-center gap-2">
					<Home />
					<span class="text-sm leading-5 group-hover:text-hover">Home</span>
				</a>
				<a href="/" class="group flex items-center gap-2">
					<Explore />
					<span class="text-sm leading-5 group-hover:text-hover">Explore</span>
				</a>
				<a href="/" class="group flex items-center gap-2 hover:text-hover">
					<BookOpen size="16" class="mt-1" />
					<span class="text-sm">Learn</span>
				</a>
				<CtaButton><SquarePlus class="mr-2 h-4 w-4" /> Post</CtaButton>

				<div class="flex items-center gap-3 px-4">
					<Avatar.Root class="h-12 w-12">
						<Avatar.Image src={profileData.imgUrl} alt={profileData.name} />
						<Avatar.Fallback>{getInitials(profileData.name)}</Avatar.Fallback>
					</Avatar.Root>
					<h2 class="text-xl font-medium">{profileData.name}</h2>
					<ChevronDown size="16" />
				</div>
			</div>
		</div>
	</Container>
</header>
