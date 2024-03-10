<script>
	import Button from './ui/button/button.svelte';
</script>

<Button
	class="hover:drop-shadow-hover active:drop-shadow-active group flex items-center gap-2 rounded-sm border
  border-foreground-secondary bg-background px-4 text-sm text-foreground-secondary 
  drop-shadow hover:border-hover hover:bg-hover hover:text-white active:border-foreground-secondary active:bg-white active:text-foreground-secondary"
	size="sm"
>
	<slot />
</Button>
