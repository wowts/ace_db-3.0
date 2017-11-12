import { LuaObj, pairs } from "@wowts/lua";

export interface AceDatabase extends LuaObj<any> {
    RegisterCallback: (module: any, event: string, method: string) => void;
    RegisterDefaults: (defaults: any) => void;
}

const lib = {
    New<T>(name: string, defaultDb: T): AceDatabase & T {
        const ret = <AceDatabase & T> {
            RegisterCallback: (module: any, event: string, method: string) => {},
            RegisterDefaults: (defaults: any) => {},
        };
        for (const [k, v] of pairs(defaultDb)) {
            ret[k] = v;
        }
        return ret;
    },
};

export default lib;
