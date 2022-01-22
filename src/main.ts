// import { createApp } from 'vue';
// import App from './AppTsx';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import { createI18n } from 'vue-i18n';
import App from "./App.vue";
// import { i18n } from './i18n';
import router from './router';
import store from "./store";
const app = createApp(App);
const i18n = createI18n({
    locale: 'zh-cn',
    fallbackLocale: 'zh-cn',
    messages
  })
  
app.use(router);
app.use(store);
app.use(i18n);
app.mount('#app')