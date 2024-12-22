"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
function routrBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routrBinder('get');
exports.post = routrBinder('post');
exports.put = routrBinder('put');
exports.del = routrBinder('delete');
exports.patch = routrBinder('patch');
