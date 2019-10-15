<template>
	<div id="app">
		<Header/>
		<List/>
	</div>
</template>

<script>
	import List from "@/components/List";
	import Header from "@/components/Header";

	export default {
		name: 'app',
		components: {
			List,
			Header
		}
	}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
