<script>
	import SearchBar from './SearchBar.svelte';
</script>

<header
	class="flex px-4 items-center h-[64px] py-2 bg-white z-10 justify-between sticky top-0 left-0"
>
	<a href="/" class="md:hidden mr-5">
		<img src="/icons/ytLogo.svg" alt="yt logo" />
	</a>
	<div class="md:flex hidden gap-4 items-center">
		<img
			src="/icons/bugerIcon.svg"
			class="cursor-pointer p-3 rounded-full hover:bg-gray-200"
			alt="hamburger icon"
		/>
		<a href="/">
			<img src="/icons/ytLogo.svg" alt="yt logo" />
		</a>
	</div>
	<SearchBar />
	<div class="md:flex hidden gap-3 items-center">
		<img
			src="/icons/createIcon.svg"
			class="cursor-pointer p-3 rounded-full hover:bg-gray-200"
			alt="create icons"
		/>
		<img
			src="/icons/notIcon.svg"
			class="cursor-pointer p-3 rounded-full hover:bg-gray-200"
			alt="not icons"
		/>
		<img src="/avatar.png" class="bg-gray-200 h-8 w-8 rounded-full cursor-pointer" alt="avatar" />
	</div>
</header>
