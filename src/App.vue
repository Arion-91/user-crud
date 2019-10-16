<template>
	<div id="app">
		<h1>Список пользователей</h1>
		<Search/>
		<List/>
		<UserEdit/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import List from "@/components/List";
	import Search from "@/components/Search";
	import UserEdit from "@/components/UserEdit";

	@Component({
		components: {
			UserEdit,
			List,
			Search
		}
	})
	export default class App extends Vue {
	}
</script>

<style lang="scss">
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	h1 {
		text-align: left;
		padding: 6px;
		color: #495057;
		background-color: #e9ecef;

		@media (max-width: 768px) {
			text-align: center;
			font-size: 24px;
		}
	}

	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>
