import 'reflect-metadata';
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from 'express';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routrBinder(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouteHandlerDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    }
  }
}

export const get = routrBinder(Methods.get);
export const post = routrBinder(Methods.post);
export const put = routrBinder(Methods.put);
export const del = routrBinder(Methods.del);
export const patch = routrBinder(Methods.patch);
