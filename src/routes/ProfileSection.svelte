<script>
	import CtaButton from '$lib/components/CtaButton.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Ellipsis, SquareArrowOutUpRight } from 'lucide-svelte';
	import { profileData } from '$lib/data/profile.data';
	import { getInitials } from '$lib/utils.js';
</script>

<div class="flex items-center gap-16">
	<div class="flex flex-col items-center gap-2">
		<Avatar.Root class="h-[120px] w-[120px] border-[5px] border-[#EAEFF5]">
			<Avatar.Image src={profileData.imgUrl} alt="@shadcn" />
			<Avatar.Fallback>{getInitials(profileData.name)}</Avatar.Fallback>
		</Avatar.Root>
		<h2 class="max-w-36 text-center text-2xl font-bold leading-7 text-[#4B5C6D]">
			{profileData.name}
		</h2>
	</div>

	<div class="flex w-full flex-col gap-5">
		<div class="flex w-full justify-between">
			<p class="max-w-[584px] text-sm leading-6">
				{profileData.bio}
			</p>

			<div class="flex flex-col items-end">
				<Avatar.Root class="h-12 w-12 border">
					<Avatar.Image src={profileData.company.imageUrl} alt={profileData.company.name} />
					<Avatar.Fallback>{getInitials(profileData.company.name)}</Avatar.Fallback>
				</Avatar.Root>
				<h6 class="py-1 text-left font-bold leading-5">{profileData.company.name}</h6>
				<p class="text-xs text-foreground-accent">{profileData.company.designation}</p>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<CtaButton>{profileData.isFollowed ? 'Followed' : 'Follow'}</CtaButton>
			<div class="flex items-center gap-4">
				<a
					href={profileData.websiteUrl}
					target="_blank"
					class="flex items-center gap-1 text-sm text-foreground-secondary"
				>
					My website <SquareArrowOutUpRight size="16" />
				</a>
				<Ellipsis class="text-[#A5B9D3]" />
			</div>
		</div>
	</div>
</div>
