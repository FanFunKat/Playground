import 'reflect-metadata';
import { Methods } from "./Methods";

function routrBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    }
  }
}

export const get = routrBinder(Methods.get);
export const post = routrBinder(Methods.post);
export const put = routrBinder(Methods.put);
export const del = routrBinder(Methods.del);
export const patch = routrBinder(Methods.patch);
