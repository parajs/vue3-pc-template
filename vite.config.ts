import vueI18n from '@intlify/vite-plugin-vue-i18n';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from "path";
import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import { ConfigEnv, UserConfigExport } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/

export default function ({ command } : ConfigEnv): UserConfigExport{
  return {
    server: {
      host: '0.0.0.0', // 解决不能通过ip访问
      proxy: {
        '/api': 'http://api.beehub.paradeum.com:8110',
        '/static':'http://api.beehub.paradeum.com:8110'
      }
    },
    plugins: [
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // you need to set i18n resource including paths !
        include: resolve('./src/i18n/**')
      }),
      AutoImport({
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        imports: ['vue','vue-router','vuex','vue-i18n']
      }),
      Components({
        extensions: ['vue','tsx'],
        resolvers: [ElementPlusResolver()],
      }),
      vue(),
      vueJsx(),
      eslintPlugin(),
      legacy({
        targets: ['defaults', 'not IE 11']
      }),
    ],
    resolve:{
      alias: {
        '@': resolve('./src'),
      }
    }
  }
}
