import { CAvatarProps } from '@/tsx/CAvatar';
import { CPageOptions } from '@/tsx/CPage';
import { DefineComponent, SetupContext } from 'vue';
declare global {
  // eslint-disable-next-line no-unused-vars
  interface AnyObject {
    [key: string]: any;
  }
}

declare module 'vue' {
  export interface GlobalComponents {
    CPage: DefineComponent<CPageOptions>;
    CAvatar: (props: CAvatarProps, context: SetupContext) => JSX.Element;
  }
}

export { };

