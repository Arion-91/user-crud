import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const USE_LOCALE_STORAGE = process.env.VUE_APP_USE_LOCALE_STORAGE == 1;
const storageKey = 'users';

function updateLocaleStorage(data) {
	localStorage.setItem(storageKey, JSON.stringify(data))
}

const testData = [
	{id: 1, name: 'name 1'},
	{id: 2, name: 'name 2'},
	{id: 3, name: 'name 3'},
	{id: 4, name: 'name 4'},
	{id: 5, name: 'name 5'},
];
localStorage.setItem(storageKey, JSON.stringify(testData));

let store = new Vuex.Store({
	state: {
		filter: {
			id: null,
			name: ''
		},
		users: USE_LOCALE_STORAGE && JSON.parse(localStorage.getItem(storageKey)) || [],
		isEdit: false,
		user: {
			id: null,
			name: ''
		}
	},

	getters: {
		users: state => {
			return state.users.filter(user => {
				return (!state.filter.id || state.filter.id && user.id == state.filter.id) &&
					(!state.filter.name || state.filter.name && user.name.includes(state.filter.name));
			})
		},
		isNewUser: state => !state.user.id
	},

	mutations: {
		createUser(state, name) {
			let lastId = state.users.reduce((prev, curr) => {
				return prev < curr.id ? curr.id : prev.id;
			}, 0);
			state.users.push({
				id: ++lastId,
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
			state.users = state.users.filter(user => user.id !== id);
			updateLocaleStorage(state.users);
		},
		setFilter(state, payload) {
			state.filter = {
				...state.filter,
				...payload
			};
		},
		switchEditUser(state, id) {
			state.isEdit = !state.isEdit;
			if (id) {
				state.user = state.users.find(item => item.id == id);
			} else {
				state.user = {
					id: null,
					name: ''
				}
			}
		},
		editUser(state, payload) {
			state.user = {
				...state.user,
				...payload
			}
		}
	},
});

export default store;
