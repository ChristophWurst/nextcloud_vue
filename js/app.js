/**
 * @copyright 2017 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @author 2017 Christoph Wurst <christoph@winzerhof-wurst.at>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

import AppContentView from './components/appcontent.vue';
import NavigationView from './components/navigation.vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export class App {
	start() {
		Vue.mixin({
			t: str => t('mail', str)
		});

		const store = new Vuex.Store({
			state: {
				accounts: [],
				count: 0
			},
			mutations: {
				setAccounts(state, payload) {
					state.accounts = payload.accounts;
				}
			},
			actions: {
				loadAccounts( {commit}) {
					return new Promise(function(resolve) {
						setTimeout(function( ) {
							commit('setAccounts', {
								accounts: [
									{
										id: 1,
										email: 'account1@domain.tld',
										folders: [
											{
												name: 'folder1'
											},
											{
												name: 'folder2'
											}
										]
									},
									{
										id: 2,
										email: 'account2@domaint.dl',
										folders: [
											{
												name: 'folder1'
											},
											{
												name: 'folder2'
											},
											{
												name: 'folder3'
											}
										]
									}
								]});
							resolve();
						}, 1000);
					});
				}
			}
		});

		let appView = new Vue({
			el: "#app",
			store,
			components: {
				'nc-app-content': AppContentView,
				'nc-app-navigation': NavigationView
			}
		});

		store.dispatch('loadAccounts');
	}
}
