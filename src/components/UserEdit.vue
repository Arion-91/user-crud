<template>
	<div :class="['wrap', isEdit ? 'show' : 'hide']">
		<div class="card">
			<h2>{{isNew ? "Добавление" : "Редактирование"}} пользователя</h2>
			<div class="inputs">
				<VInput id="user-id" label="Наименование" :value="user.name" :func="changeName"/>
				<div>
					<VButton name="save" label="Сохранить" type="save" :func="updateUser"/>
					<VButton name="cancel" label="Отмена" type="cancel" :func="cancel"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VButton from "@/components/VButton";
	import VInput from "@/components/VInput";

	export default {
		name: "UserEdit",
		data() {
			return {
				name: '',
			}
		},
		components: {
			VButton,
			VInput
		},
		computed: {
			isEdit() {
				return this.$store.state.isEdit;
			},
			isNew() {
				return this.$store.getters.isNewUser;
			},
			user() {
				return this.$store.state.user;
			}
		},
		methods: {
			changeName(e) {
				this.$store.commit('editUser', {name: e.target.value})
			},
			updateUser() {
				if (this.user.id) {
					this.$store.commit('updateUser', this.user);
				} else {
					this.$store.commit('createUser', this.user.name);
				}
				this.cancel();
			},
			cancel() {
				this.$store.commit('switchEditUser');
			}
		}
	}
</script>

<style lang="scss" scoped>
	.show {
		display: block;
	}

	.hide {
		display: none;
	}

	.wrap {
		position: fixed;
		background-color: rgba(44, 62, 80, 0.51);
		color: white;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
	}

	.card {
		position: relative;
		top: 30vh;
		background-color: rgba(44, 62, 80, 1);
		width: 50%;
		margin: 0 auto;
		border-radius: 5px;

		@media (max-width: 768px) {
			width: 90%;
		}
	}

	.inputs {
		padding: 20px;
	}

	h2 {
		padding: 6px;
	}
</style>
