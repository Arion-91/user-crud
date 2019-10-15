<template>
	<button :name="name" type="button" :class="type">{{label}}</button>
</template>

<script>
	export default {
		name: "VButton",
		props: ['name', 'type', 'label']
	}
</script>

<style lang="scss" scoped>
	button {
		height: 28px;
		padding: 6px 12px;
		margin: 3px;
		color: #ffffff;
		box-shadow:
			0 3px 1px -2px rgba(0, 0, 0, 0.2),
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
</style>
