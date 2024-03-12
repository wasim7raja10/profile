<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { ChevronUp } from 'lucide-svelte';
	import type { CareerUpdate } from '$lib/types/career-update.type';
	import { getInitials } from '$lib/utils.js';

	export let careerUpdateData: CareerUpdate;
</script>

<div class="relative flex h-[157px] items-center">
	<!-- date -->
	<div class="absolute left-5 -translate-x-[100%] text-xs text-foreground-accent">
		<div class="flex flex-col items-end">
			<Avatar.Root class="h-12 w-12 border">
				<Avatar.Image src={careerUpdateData.company.imageUrl} alt={careerUpdateData.company.name} />
				<Avatar.Fallback>{getInitials(careerUpdateData.company.name)}</Avatar.Fallback>
			</Avatar.Root>
			<h2 class="text-base font-bold text-foreground">{careerUpdateData.company.name}</h2>
			<p>{careerUpdateData.company.location}</p>
			<p class="capitalize">{careerUpdateData.action}</p>
			<p>{careerUpdateData.date}</p>
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
			<h3 class="text-xl font-bold leading-8">{careerUpdateData.company.designation}</h3>
			<p class="text-xs text-foreground-accent">
				{careerUpdateData.company.designationMoreInfo?.join(' · ')}
			</p>
		</div>
	</div>
</div>
