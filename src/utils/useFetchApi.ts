import { createFetch } from '@vueuse/core';
import { ElMessage } from 'element-plus';

const useFetchApi = createFetch({
  baseUrl: '/api',
  options: {
    async beforeFetch({ options }) {
      const myToken = 'token';
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${myToken}`
      };
      return { options };
    },
    afterFetch(ctx) {
      const { data, response } = ctx;
      if (response.status >= 200 && response.status < 300) {
        try {
          const jsonObj = JSON.parse(data);
          if (jsonObj.code != 200) {
            ElMessage.error(jsonObj.message || 'Error');
          }

          ctx.data = jsonObj.data;
        } catch (error) {
          console.error(error);
          ctx.data = null;
        }
      } else {
        ElMessage.error(response.statusText || 'Error');
        ctx.data = null;
      }

      return ctx;
    }
  }
});

export default useFetchApi;
