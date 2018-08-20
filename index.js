"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lua_1 = require("@wowts/lua");
const lib = {
    New(name, defaultDb) {
        const ret = {
            RegisterCallback: (module, event, method) => { },
            RegisterDefaults: (defaults) => { },
        };
        for (const [k, v] of lua_1.kpairs(defaultDb)) {
            ret[k] = v;
        }
        return ret;
    },
};
exports.default = lib;
