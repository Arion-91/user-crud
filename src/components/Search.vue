<template>
	<div class="wrap">
		<span>Поиск</span>
		<VInput id="user-id" label="ID" :value="search.id" :func="setId"/>
		<VInput id="user-name" label="Наименование" :value="search.name" :func="setName"/>
		<VButton name="clear" label="X" type="delete" :func="clearFilter"/>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import VInput from "@/components/VInput";
	import VButton from "@/components/VButton";

	@Component({
		components: {
			VInput,
			VButton
		}
	})
	export default class Search extends Vue {
		get search() {
			return this.$store.state.filter;
		}

		filter() {
			this.$store.setFilter({
				id: this.id,
				name: this.name
			})
		}

		setId(e) {
			this.$store.commit('setFilter', {id: e.target.value})
		}

		setName(e) {
			this.$store.commit('setFilter', {name: e.target.value})
		}

		clearFilter() {
			this.$store.commit('setFilter', {
				id: null,
				name: ''
			})
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 6px;
		color: #495057;
		background-color: #e9ecef;
		border-color: #dee2e6;

		span {
			padding: 6px;
			font-weight: 600;
		}
	}

	.buttons {
		/*flex-direction: row;*/
		/*width: 10%;*/

		/*@media (max-width: 768px) {*/
		/*	width: 100%;*/
		/*}*/
	}

	@media (max-width: 768px) {
		.wrap {
			flex-direction: column;
			padding: 6px;
		}
	}
</style>
