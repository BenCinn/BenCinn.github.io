<script context="module">
	export const prerender = true;
</script>

<script>
	// import Counter from '$lib/Counter.svelte';
	import Typewriter from 'svelte-typewriter';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="pt-20 pb-12">
		<div class="mx-8 text-center lg:text-left">
			<h1
				class="text-4xl font-extrabold tracking-tight text-gray-900 transition duration-300 dark:text-gray-100 sm:text-5xl md:text-6xl"
			>
				<span class="block xl:inline">Hi, I'm</span>
				<span class="block text-blue-400 xl:inline">Chitsanupong,</span><br />
				<div>
					I'm
					<Typewriter loop cursor="#60a5fa" interval={100}
						><p class="text-blue-400">Full-Stack</p></Typewriter
					>
					Developer.
				</div>
			</h1>
			<div class="flex justify-center mt-8 lg:justify-start">
				<div class="rounded-md shadow">
					<a
						href="https://www.github.com/BenCinn"
						class="flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-blue-400 rounded-md border border-transparent transition duration-300 ease-out hover:bg-blue-300 md:py-4 md:text-lg md:px-10 md:hover:-translate-y-1 md:hover:scale-105"
					>
						Visit my Github profile
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
