<script>
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div class="flex">
	<SideBar />
	<main class="md:ml-[74px] p-6 flex">
		<slot />
	</main>
</div>
