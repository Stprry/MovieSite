<script>
	export let data;
</script>

<div class="container mx-auto w-3/4 flex justify-center">
	<div
		class="inline-flex fixed inset-x-12 bottom-4 z-10 bg-red-500 rounded-lg py-4 px-4 shadow justify-around"
	>
		<div class="bg-blue-500 hover:bg-blue-700 text-white font-bold">
			Home
		</div>
		<div>Rate</div>
		{#if !data.post.signedIn}
		<div>Sign In</div>
		{:else }
		<div>Profile</div>
		{/if}
	</div>
</div>
