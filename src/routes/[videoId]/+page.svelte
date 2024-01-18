<script lang="ts">
	import ChannelInfo from '$lib/components/ChannelInfo.svelte';
	import VideoDescription from '$lib/components/VideoDescription.svelte';
	import Comments from '$lib/components/Comments.svelte';
	import RecomendedVideo from '$lib/components/RecomendedVideo.svelte';
	let videoId = '';
</script>

<iframe
	class="w-full h-[480px]"
	src={`https://www.youtube.com/embed/${videoId}`}
	title="Youtube Video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypterd-media; gyroscope;
  picture-in-picture; web-share"
	allowfullscreen
>
</iframe>
<div class="max-w-[1150px] px-2 w-full mx-auto">
	<h1 class="text-xl font-semibold capitalize">Svelte rules</h1>
	<div class="flex flex-col md:flex-row gap-5 items-start">
		<div class="flex-1">
			<ChannelInfo />
			<VideoDescription />
			<Comments />
		</div>
		<RecomendedVideo />
	</div>
</div>
