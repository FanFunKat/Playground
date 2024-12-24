"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
var Methods_1 = require("./Methods");
var MetadataKeys_1 = require("./MetadataKeys");
function routrBinder(method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
}
exports.get = routrBinder(Methods_1.Methods.get);
exports.post = routrBinder(Methods_1.Methods.post);
exports.put = routrBinder(Methods_1.Methods.put);
exports.del = routrBinder(Methods_1.Methods.del);
exports.patch = routrBinder(Methods_1.Methods.patch);
