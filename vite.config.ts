import vueI18n from '@intlify/vite-plugin-vue-i18n';
import legacy from '@vitejs/plugin-legacy';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Icons from 'unplugin-icons/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Components from 'unplugin-vue-components/vite';
import type { UserConfigExport } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import html from 'vite-plugin-html';
import Inspect from 'vite-plugin-inspect';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import svgLoader from 'vite-svg-loader';
function resolve(dir: string) {
  return path.join(__dirname, dir);
}

// https://vitejs.dev/config/

export default function (): UserConfigExport {
  return {
    server: {
      host: '0.0.0.0', // 解决不能通过ip访问
      proxy: {
        '/api': 'http://api.beehub.paradeum.com:8110',
        '/static': 'http://api.beehub.paradeum.com:8110'
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // 自定义的主题色
          additionalData: `@use "@/styles/element/index.scss" as *;`
        }
      }
    },
    plugins: [
      vueSetupExtend(),
      html({
        inject: {
          data: {
            title: 'KuggaMax'
          }
        },
        minify: true
      }),
      Icons({
        autoInstall: true
      }),
      svgLoader({
        defaultImport: 'raw' // or 'url'
      }),
      Inspect(),
      vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        // you need to set i18n resource including paths !
        include: resolve('./src/i18n/**')
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        eslintrc: {
          enabled: true, // Default `false`
          filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
          globalsPropValue: true // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
        },
        imports: ['vue', 'vue-router', 'vuex', 'vue-i18n'],
        dts: resolve('src/auto-imports.d.ts')
      }),
      Components({
        extensions: ['vue', 'tsx'],
        resolvers: [
          // Auto register icon components
          // 自动注册图标组件
          IconsResolver({
            enabledCollections: ['ep']
          }),
          ElementPlusResolver()
        ],
        dts: resolve('src/components.d.ts')
      }),
      vue(),
      vueJsx(),
      eslintPlugin({
        fix: true
      }),
      legacy({
        targets: ['defaults', 'not IE 11']
      })
    ],
    resolve: {
      alias: {
        '@': resolve('./src')
      }
    }
  };
}
