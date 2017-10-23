<template>
	<div id="app-settings">
		<div id="app-settings-header">
			<button class="settings-button"
				data-apps-slide-toggle="#app-settings-content">
				<t text="Settings"></t>
			</button>
		</div>
		<div id="app-settings-content">
			<!-- Your settings in here -->
		</div>
        </div>
</template>

<script>

		import L10nView from './l10n.vue';

		export default {
			components: {
				t: L10nView
			}
		}

</script>
