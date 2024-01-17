<script lang="ts">
	let showMore = false;
</script>

<div
	class:h-fit={showMore}
	class:h-[150px]={!showMore}
	class="bg-gray-200 mb-5 group relative overflow-hidden text-xs rounded-lg hover:bg-gray-300"
>
	<div class="font-medium mb-2">
		<span class=""> 10,000 views . 20-11-20 </span>
	</div>
	<p class="mb-5">
		LLLorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed inventore non odit
		ipsum, eligendi reprehenderit, eum consectetur dicta ut necessitatibus voluptas excepturi sit
		doloremque distinctio vitae eveniet dolor assumenda! orem ipsum, dolor sit amet consectetur
		adipisicing elit. Repellendus sed inventore non odit ipsum, eligendi reprehenderit, eum
		consectetur dicta ut necessitatibus voluptas excepturi sit doloremque distinctio vitae eveniet
		dolor assumenda! orem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus sed
		inventore non odit ipsum, eligendi reprehenderit, eum consectetur dicta ut necessitatibus
		voluptas excepturi sit doloremque distinctio vitae eveniet dolor assumenda!
	</p>
	<button
		on:click={() => {
			showMore = !showMore;
		}}
		class="absolute bottom-1 group-hover:bg-gray-300 right-1 bg-gray-200 font-medium p-1 capitalize"
	>
		show {showMore ? 'less' : 'more'}
	</button>
</div>

