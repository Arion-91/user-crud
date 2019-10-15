<template>
	<div :class="['wrap', isEdit ? 'show' : 'hide']">
		<div class="card">
			<h2>{{isNew ? "Добавление" : "Редактирование"}} пользователя</h2>
			<div class="inputs">
				<VInput id="user-id" label="Наименование" :value="name" :func="changeName"/>
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
		props: ['isNew'],
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
			}
		},
		methods: {
			changeName(e) {
				this.name = e.target.value;
			},
			updateUser() {

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
		width: 40%;
		margin: 0 auto;
		border-radius: 5px;
	}

	.inputs {
		padding: 20px;
	}

	h2 {
		padding: 6px;
	}
</style>
