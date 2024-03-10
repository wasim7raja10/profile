<script>
	import CtaButton from '$lib/components/CtaButton.svelte';
	import * as Avatar from '$lib/components/ui/avatar/index';
	import { Ellipsis, SquareArrowOutUpRight } from 'lucide-svelte';
</script>

<div class="flex items-center gap-16 pt-10">
	<div class="flex flex-col items-center gap-2">
		<Avatar.Root class="h-[120px] w-[120px] border-[5px] border-[#EAEFF5]">
			<Avatar.Image src="https://github.com/shadcn.png" alt="@shadcn" />
			<Avatar.Fallback>KK</Avatar.Fallback>
		</Avatar.Root>
		<h2 class="max-w-36 text-center text-2xl font-bold leading-7 text-[#4B5C6D]">Krishna Kiran</h2>
	</div>

	<div class="flex w-full flex-col gap-5">
		<div class="flex w-full justify-between">
			<p class="max-w-[584px] text-sm leading-6">
				Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of
				Engineering. I write hot-takes on building a business, shipping delightful products and
				accelerating product and career growth.
			</p>

			<div class="flex flex-col items-end">
				<img height="36" width="36" src="src/lib/images/brand-small.svg" alt="Logo Brand" />
				<h6 class="py-1 text-left font-bold leading-5">Duggup</h6>
				<p class="text-xs text-foreground-accent">Co-Founder and CEO</p>
			</div>
		</div>

		<div class="flex items-center justify-between">
			<CtaButton>Followed</CtaButton>
			<div class="flex items-center gap-4">
				<a href="/" class="flex items-center gap-1 text-sm text-foreground-secondary">
					My website <SquareArrowOutUpRight size="16" />
				</a>
				<Ellipsis class="text-[#A5B9D3]" />
			</div>
		</div>
	</div>
</div>
