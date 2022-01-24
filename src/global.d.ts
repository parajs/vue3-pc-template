
  
  declare global {
    // eslint-disable-next-line no-unused-vars
    interface AnyObject {
        [key: string]: any
      }
  }

  declare module "*.vue" {
    export  interface AnyObject {
      [key: string]: any
    }
  }
  
  export { };
  