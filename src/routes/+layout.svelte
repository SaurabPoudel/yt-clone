<script lang="ts">
	import './styles.css';
	import Header from '$lib/components/Header.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<Header />
<div class="flex">
	<main class=" p-6 flex-1">
		<slot />
	</main>
</div>
