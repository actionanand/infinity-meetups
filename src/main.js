import App from './App.svelte';

const app = new App({
	// target: document.body
  target: document.querySelector('#app'),
  props: {
    appName: 'svelte animations!'
  }
});

export default app;