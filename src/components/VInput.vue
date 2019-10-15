<template>
	<div class="wrap-list">
		<input :id="id" type="text" :placeholder="label" :value="value" @change="func">
	</div>
</template>

<script>
	export default {
		name: "SearchInput",
		props: ['id', 'label', 'value', 'func'],
	}
</script>

<style lang="scss" scoped>
	.wrap-list {
		width: 100%;
		padding: 6px 3px;

		@media (max-width: 768px) {
			padding: 3px;
		}
	}

	input {
		display: block;
		padding: 6px 12px;
		width: 100%;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 400;
		border: 1px solid #ced4da;
		overflow: visible;
	}
</style>
