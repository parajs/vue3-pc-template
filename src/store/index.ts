import { modules } from './modules';
const { DEV } = import.meta.env;

export interface State {
  [key: string]: any;
}

const store = createStore<State>({
  modules,
  strict: true,
  plugins: DEV ? [createLogger()] : []
});

export default store;
