<template>
	<div class="wrap-button">
		<button :name="name" type="button" :class="type" @click="func">{{label}}</button>
	</div>
</template>

<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'

	@Component({
		props: ['name', 'type', 'label', 'func']
	})
	export default class VButton extends Vue {
	}
</script>

<style lang="scss" scoped>
	.wrap-button {
		display: inline-block;
		margin: 3px;

		@media (max-width: 768px) {
			width: 100%;
			margin: 3px 0;
		}
	}

	button {
		height: 28px;
		padding: 6px 12px;
		color: #ffffff;
		box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
		0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
		border-radius: 5px;
		border: none;
		cursor: pointer;
		font-weight: 500;
		text-transform: uppercase;

		@media (max-width: 768px) {
			width: 100%;
		}
	}

	.update {
		background-color: #1867c0;
	}

	.delete {
		background-color: #ff5252;
	}

	.save {
		background-color: #4caf50;
	}

	.cancel {
		background-color: #fb8c00;
	}
</style>
