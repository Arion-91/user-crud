<template>
	<input :id="id" type="text" :placeholder="label">
</template>

<script>
	export default {
		name: "Input",
		props: ['id', 'label']
	}
</script>

<style scoped>
	input {
		display: block;
		padding: 6px 12px;
		margin: 6px 3px;
		width: 100%;
		border-radius: 5px;
		font-size: 1rem;
		font-weight: 400;
		border: 1px solid #ced4da;
		overflow: visible;
	}

	@media (max-width: 768px) {
		input {
			margin: 3px;
		}
	}
</style>
