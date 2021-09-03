<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/env';
	import { listenOnAuthStateChanged } from '$lib/stores/account.store';

	onMount(async () => {
		if (browser) {
			await listenOnAuthStateChanged();
		}
	});
</script>

<slot />

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
