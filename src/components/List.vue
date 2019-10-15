<template>
	<table class="wrap">
		<tr class="head">
			<th>ID</th>
			<th>Наименование</th>
		</tr>
		<tr v-for="user in users" :key="user.id" class="item">
			<td class="item-id">{{user.id}}</td>
			<td class="item-name">{{user.name}}</td>
		</tr>
	</table>
</template>

<script>
	export default {
		name: "List",
		computed: {
			users() {
				return this.$store.state.users;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
	}

	table {
		border-collapse: collapse;
	}
	th, td {
		padding: 12px;
	}

	.head {
		background-color: #343a40;
		border: #454d55;
		border-bottom: 2px solid #dee2e6;
		color: white;
	}

	.item {
		&-id {
			font-weight: 600;
		}
		&-name {
			text-align: left;
		}
	}

	.item:hover {
		color: #495057;
		background-color: #e9ecef;
		border-color: #dee2e6;
	}
</style>
