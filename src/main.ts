import CAvatar from '@/tsx/CAvatar';
import CPage from '@/tsx/CPage';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
import 'element-plus/es/components/message/style/css';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';
import store from './store';
const app = createApp(App);
const i18n = createI18n({
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  messages
});

app.use(router);
app.use(store);
app.use(i18n);
app.component('CPage', CPage);
//@ts-ignore
app.component('CAvatar', CAvatar);
app.mount('#app');
