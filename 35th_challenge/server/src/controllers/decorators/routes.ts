import 'reflect-metadata';

function routrBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    }
  }
}

export const get = routrBinder('get');
export const post = routrBinder('post');
export const put = routrBinder('put');
export const del = routrBinder('delete');
export const patch = routrBinder('patch');
