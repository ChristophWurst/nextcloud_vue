<template>
	<div id="app-content">
		<div id="app-content-wrapper">
			<hello></hello>
		</div>
	</div>
</template>

<script>
		import HelloView from "./hello.vue";

		export default {
			components: {
				hello: HelloView
			}
		}
</script>
