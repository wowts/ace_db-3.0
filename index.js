"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = {
    New(name, defaultDb) {
        const ret = {
            RegisterCallback: (module, event, method) => { },
            RegisterDefaults: (defaults) => { },
        };
        return Object.assign(ret, defaultDb);
    },
};
exports.default = lib;
