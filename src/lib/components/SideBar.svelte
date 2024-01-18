<script lang="ts">
	const nav = [
		{
			icon: 'homeIcon',
			title: 'home'
		},
		{
			icon: 'shortsIcon',
			title: 'shorts'
		},
		{
			icon: 'libraryIcon',
			title: 'library'
		},
		{
			icon: 'subIcon',
			title: 'subscription'
		}
	];
</script>

<div class="bg-white py-2 hidden md:flex flex-col px-1 fixed top-[60px]">
	{#each nav as item}
		<a
			href={item.title}
			class="flex items-center justify-center flex-col gap-1 py-4
  hover:bg-gray-100 rounded-lg"
		>
			<img src={`icons/${item.icon}.svg`} alt={item.icon} />
			<p class="">{item.title}</p>
		</a>
	{/each}
</div>
