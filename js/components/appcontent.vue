<template>
	<div id="app-content">
		<div id="app-content-wrapper">
			<hello></hello>
		</div>
	</div>
</template>

<script>
		import HelloView from "./hello.vue";
		import L10nView from "./l10n.vue";

		export default {
			components: {
				hello: HelloView,
				t: L10nView
			}
		}
</script>
