<script>
	export let title;
	export let date;
</script>

<title>{title}</title>

<a href="/blog">Go Back</a>

<h1>{title}</h1>

<p>Published: {date}</p>

<slot />
