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
				<VButton name="update" label="Изменить" type="update" :func="() => editUser(user.id)"/>
				<VButton name="update" label="Удалить" type="delete" :func="() => removeUser(user.id)"/>
			</td>
		</tr>
	</table>
</template>

<script>
	import Vue from 'vue'
	import Component from 'vue-class-component'
	import VButton from "@/components/VButton";

	@Component({
		components: {
			VButton
		}
	})
	export default class List extends Vue {
		get users() {
			return this.$store.getters.users;
		}

		addUser() {
			this.$store.commit('switchEditUser');
		}

		editUser(id) {
			this.$store.commit('switchEditUser', id);
		}

		removeUser(id) {
			this.$store.commit('deleteUser', id);
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
