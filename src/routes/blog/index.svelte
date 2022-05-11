<script context="module">
	export const load = async ({ fetch }) => {
		const posts = await fetch('/api/posts.json');
		const allPosts = await posts.json();

		return {
			props: {
				posts: allPosts
			}
		};
	};
</script>

<script>
	export let posts;
</script>

<div class="space-x-4">
	{#each posts as post}
		<a href={post.path}>
			<div
				class="p-4 rounded bg-blue-500 border-red-200 transition duration-300 drop-shadow-md hover:drop-shadow-lg bg-blue-500 hover:bg-indigo-500"
			>
				<h2 class="font-medium text-xl">
					{post.meta.title}
				</h2>
				<h2 class="text-sm">Published {post.meta.date}</h2>
			</div>
		</a>
	{/each}
</div>
