<script>
	import { cn } from '$lib/utils.js';
	import Button from './ui/button/button.svelte';

	export let classes = '';
</script>

<Button
	class={cn(
		'rounded-sm border border-foreground-secondary bg-background px-4 text-sm text-foreground-secondary drop-shadow hover:border-hover hover:bg-hover hover:text-white hover:drop-shadow-hover active:border-foreground-secondary active:bg-white active:text-foreground-secondary active:drop-shadow-active',
		classes
	)}
	size="sm"
>
	<slot />
</Button>
