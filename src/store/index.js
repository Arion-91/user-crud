import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let store = new Vuex.Store({
	state: {
		users: [],
	},

	mutations: {
		createUser(state, name) {
			let lastId = state.users.reduce((prev, curr) => {
				return prev < curr ? curr : prev;
			}, 0);
			state.users.add({
				id: lastId++,
				name
			})
		},
		updateUser(state, payload) {
			let userIndex = state.users.findIndex(user => user.id === payload.id);
			if (userIndex < 0) return;
			state.users[userIndex].name = payload.name;
		},
		deleteUser(state, id) {
			state.users = state.users.filter(user => user.id === id);
		}
	},
});

export default store;
