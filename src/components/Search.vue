<template>
	<div class="wrap">
		<span>Поиск</span>
		<VInput id="user-id" label="ID"/>
		<VInput id="user-name" label="Наименование"/>
	</div>
</template>

<script>
	import VInput from "@/components/VInput";

	export default {
		name: "Search",
		components: {
			VInput
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

	@media (max-width: 768px) {
		.wrap {
			flex-direction: column;
			padding: 6px;
		}
	}
</style>
