<script>
	import { cn } from '$lib/utils.js';

	export let classes = '';
</script>

<div class={cn('container mx-auto px-5', classes)}><slot /></div>
