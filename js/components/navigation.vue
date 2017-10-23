<template>
	<div id="app-navigation">
		<ul>
			<template v-for="account in accounts">
				<li>
					<a href="#">{{ account.email }}</a>
				</li>
				<template >
					<li v-for="folder in account.folders">
						<a href="#">{{ folder.name }}</a>
					</li>
				</template>
			</template>
		</ul>
		<app-settings></app-settings>
	</div>
</template>

<script>
		import { mapState } from 'vuex';

		import AppSettingsView from './appsettings.vue';

		export default {
			computed: mapState([
				'accounts'
			]),
			components: {
				'app-settings': AppSettingsView
			}
		};
</script>
