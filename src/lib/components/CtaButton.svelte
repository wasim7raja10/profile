<script>
	import Button from './ui/button/button.svelte';
</script>

<Button
	class="rounded-sm border border-foreground-secondary bg-background
  px-4 text-sm text-foreground-secondary drop-shadow hover:border-hover 
  hover:bg-hover hover:text-white hover:drop-shadow-hover active:border-foreground-secondary 
	active:bg-white active:text-foreground-secondary active:drop-shadow-active"
	size="sm"
>
	<slot />
</Button>
