import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const USE_LOCALE_STORAGE = process.env.USE_LOCALE_STORAGE == 1;
const storageKey = 'users';

function updateLocaleStorage(data) {
	localStorage.setItem(storageKey, JSON.parse(data))
}

let store = new Vuex.Store({
	state: {
		users: USE_LOCALE_STORAGE && JSON.stringify(localStorage.getItem(storageKey)) || [],
	},

	mutations: {
		createUser(state, name) {
			let lastId = state.users.reduce((prev, curr) => {
				return prev < curr ? curr : prev;
			}, 0);
			state.users.add({
				id: lastId++,
				name
			});
			updateLocaleStorage(state.users);
		},
		updateUser(state, payload) {
			let userIndex = state.users.findIndex(user => user.id === payload.id);
			if (userIndex < 0) return;
			state.users[userIndex].name = payload.name;
			updateLocaleStorage(state.users);
		},
		deleteUser(state, id) {
			state.users = state.users.filter(user => user.id === id);
			updateLocaleStorage(state.users);
		}
	},
});

export default store;
