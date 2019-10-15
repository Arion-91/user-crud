<template>
	<table class="wrap">
		<tr class="head">
			<th>ID</th>
			<th>Наименование</th>
			<th>
				<VButton name="update" label="Добавить" type="update" :func="addUser"/>
			</th>
		</tr>
		<tr v-for="user in users" :key="user.id" class="item">
			<td class="item-id">{{user.id}}</td>
			<td class="item-name">{{user.name}}</td>
			<td class="buttons">
				<VButton name="update" label="Изменить" type="update" :func="editUser"/>
				<VButton name="update" label="Удалить" type="delete" :func="removeUser"/>
			</td>
		</tr>
	</table>
</template>

<script>
	import VButton from "@/components/VButton";

	export default {
		name: "List",
		components: {
			VButton
		},
		computed: {
			users() {
				return this.$store.getters.users;
			}
		},
		methods: {
			addUser() {

			},
			editUser() {

			},
			removeUser() {

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

	.buttons {
		width: 30%;
	}


</style>
