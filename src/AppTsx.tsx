import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import { defineComponent, KeepAlive, Suspense } from 'vue';
import { RouterView } from 'vue-router';
import './App.css';

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <ElConfigProvider locale={zhCn}>
        <Suspense onFallback={() => <div> Loading...</div>}>
          <RouterView>
            {
              //@ts-ignore
              ({ Component, route }) => {
                const { meta } = route;
                const isKeepAlive = meta && meta.keepAlive;
                return (
                  <>
                    <KeepAlive>
                      {isKeepAlive ? (
                        <Component
                          key={meta.usePathKey ? route.fullPath : undefined}
                        />
                      ) : null}
                    </KeepAlive>
                    {!isKeepAlive ? (
                      <Component
                        key={meta.usePathKey ? route.fullPath : undefined}
                      />
                    ) : null}
                  </>
                );
              }
            }
          </RouterView>
        </Suspense>
      </ElConfigProvider>
    );
  }
});
