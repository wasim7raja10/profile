<script>
	import Container from '$lib/components/Container.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronUp } from 'lucide-svelte';
	import { Size } from 'svelte-radix';
</script>

<Container classes="relative mx-auto my-10 max-w-[1000px]">
	<!-- line -->
	<div class="absolute bottom-0 left-[60px] top-0 mx-5 w-[1px] bg-[#778FB1]"></div>

	<!-- id 1 -->
	<div class="relative flex h-[288px] items-center">
		<!-- date -->
		<div class="absolute -left-8 text-xs text-foreground-accent">
			<div>Dec 2023</div>
		</div>

		<!-- circle -->
		<div
			class="absolute left-[61px] z-10 h-4 w-4 -translate-x-1/2 rounded-[50%] border-[3px] border-hover bg-white"
		></div>

		<!-- Content -->
		<ScrollArea orientation="horizontal" class="absolute left-[100px] m-4 w-[800px]">
			<div class=" flex items-center gap-8 pb-4">
				<div class="w-[344px] overflow-hidden rounded-[12px] border shadow-sm">
					<div class="h-[136px] w-full">
						<img
							src="https://s3-alpha-sig.figma.com/img/ccdc/bd9b/5b2f7dca180260dd9a121e21e4ccb158?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlSaApWAaRGs-9-eJpkITxEY8gIsdP2RmwcwIrTdyMCX8AJw~ZrkOLecj1DvkNt8k6jzE1Kq4E3Ru3RAO6jimGMmZGlRTWTh7rbRPbo0eH5TK7dKet8dkp9OHVksPDJvE2CXPjo-3fzFrw9mnvlBquyc4Mpp6crIkK5mLP2Qug6WaZ6AxcKYEQeOV2iq3XD1O70se3E7QQDTjamICNQ2G5-Lyi7Kz80Jju4uHmuis3d18Ym8TG9-UndhuOQvG2ucRakuPY1lxBs4u9OR3U76SKpAcQdOAQi6ceHMWXIohteueH9aw-9QrrGbKBs2kGW2xv5fuNOzAo~ow~BzlUlZmw__"
							alt="post"
							class="h-full w-full object-cover"
						/>
					</div>
					<p class="p-6">No amount of technology can convert a bad story into a good story.</p>
				</div>

				<div class="w-[344px] overflow-hidden rounded-[12px] border shadow-sm">
					<div class="h-[136px] w-full">
						<img
							src="https://s3-alpha-sig.figma.com/img/ccdc/bd9b/5b2f7dca180260dd9a121e21e4ccb158?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlSaApWAaRGs-9-eJpkITxEY8gIsdP2RmwcwIrTdyMCX8AJw~ZrkOLecj1DvkNt8k6jzE1Kq4E3Ru3RAO6jimGMmZGlRTWTh7rbRPbo0eH5TK7dKet8dkp9OHVksPDJvE2CXPjo-3fzFrw9mnvlBquyc4Mpp6crIkK5mLP2Qug6WaZ6AxcKYEQeOV2iq3XD1O70se3E7QQDTjamICNQ2G5-Lyi7Kz80Jju4uHmuis3d18Ym8TG9-UndhuOQvG2ucRakuPY1lxBs4u9OR3U76SKpAcQdOAQi6ceHMWXIohteueH9aw-9QrrGbKBs2kGW2xv5fuNOzAo~ow~BzlUlZmw__"
							alt="post"
							class="h-full w-full object-cover"
						/>
					</div>
					<p class="p-6">No amount of technology can convert a bad story into a good story.</p>
				</div>

				<div class="w-[344px] overflow-hidden rounded-[12px] border shadow-sm">
					<div class="h-[136px] w-full">
						<img
							src="https://s3-alpha-sig.figma.com/img/ccdc/bd9b/5b2f7dca180260dd9a121e21e4ccb158?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlSaApWAaRGs-9-eJpkITxEY8gIsdP2RmwcwIrTdyMCX8AJw~ZrkOLecj1DvkNt8k6jzE1Kq4E3Ru3RAO6jimGMmZGlRTWTh7rbRPbo0eH5TK7dKet8dkp9OHVksPDJvE2CXPjo-3fzFrw9mnvlBquyc4Mpp6crIkK5mLP2Qug6WaZ6AxcKYEQeOV2iq3XD1O70se3E7QQDTjamICNQ2G5-Lyi7Kz80Jju4uHmuis3d18Ym8TG9-UndhuOQvG2ucRakuPY1lxBs4u9OR3U76SKpAcQdOAQi6ceHMWXIohteueH9aw-9QrrGbKBs2kGW2xv5fuNOzAo~ow~BzlUlZmw__"
							alt="post"
							class="h-full w-full object-cover"
						/>
					</div>
					<p class="p-6">No amount of technology can convert a bad story into a good story.</p>
				</div>

				<div class="w-[344px] overflow-hidden rounded-[12px] border shadow-sm">
					<div class="h-[136px] w-full">
						<img
							src="https://s3-alpha-sig.figma.com/img/ccdc/bd9b/5b2f7dca180260dd9a121e21e4ccb158?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlSaApWAaRGs-9-eJpkITxEY8gIsdP2RmwcwIrTdyMCX8AJw~ZrkOLecj1DvkNt8k6jzE1Kq4E3Ru3RAO6jimGMmZGlRTWTh7rbRPbo0eH5TK7dKet8dkp9OHVksPDJvE2CXPjo-3fzFrw9mnvlBquyc4Mpp6crIkK5mLP2Qug6WaZ6AxcKYEQeOV2iq3XD1O70se3E7QQDTjamICNQ2G5-Lyi7Kz80Jju4uHmuis3d18Ym8TG9-UndhuOQvG2ucRakuPY1lxBs4u9OR3U76SKpAcQdOAQi6ceHMWXIohteueH9aw-9QrrGbKBs2kGW2xv5fuNOzAo~ow~BzlUlZmw__"
							alt="post"
							class="h-full w-full object-cover"
						/>
					</div>
					<p class="p-6">No amount of technology can convert a bad story into a good story.</p>
				</div>
			</div>
		</ScrollArea>

		<!-- <div class="absolute left-[160px] flex items-center gap-24"></div> -->
	</div>

	<!-- id 2 -->
	<div class="relative flex h-[157px] items-center">
		<!-- date -->
		<div class="-translate-x-24 text-xs text-foreground-accent">
			<div class="flex flex-col items-end">
				<Avatar.Root class="h-12 w-12">
					<Avatar.Image src="src/lib/images/brand-small.svg" alt="@shadcn" />
					<Avatar.Fallback>Duggup</Avatar.Fallback>
				</Avatar.Root>
				<h2 class="text-base font-bold text-foreground">Duggup</h2>
				<p>San Francisco Bay Area</p>
				<p>Joined</p>
				<p>Nov 2023</p>
			</div>
		</div>

		<div class="absolute left-[61px] top-0 z-10 -translate-x-1/2">
			<ChevronUp size="18" />
		</div>

		<!-- circle -->
		<div
			class="absolute left-[61px] z-10 h-6 w-6 -translate-x-1/2 rounded-[50%] border-[9px] border-hover bg-white"
		></div>

		<!-- Content -->
		<div class="absolute left-[100px] px-4">
			<div class="w-full rounded-[12px] border px-5 py-4 shadow-sm sm:w-[714px]">
				<h3 class="text-xl font-bold leading-8">Co-Founder and CEO</h3>
				<p class="text-xs text-foreground-accent">Full-time · Remote</p>
			</div>
		</div>
	</div>
</Container>
