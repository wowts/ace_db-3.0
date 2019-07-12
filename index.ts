import { kpairs, LuaObj } from "@wowts/lua";

export interface AceDatabase extends LuaObj<any> {
    RegisterCallback: (module: any, event: string, method: string) => void;
    RegisterDefaults: (defaults: any) => void;
}

const lib = {
    New<T>(name: string, defaultDb: T): AceDatabase & T {
        const ret = {
            RegisterCallback: (module: any, event: string, method: string) => {},
            RegisterDefaults: (defaults: any) => {},
        } as AceDatabase & T;
        for (const [k, v] of kpairs(defaultDb)) {
            (ret[k] as any) = v;
        }
        return ret;
    },
};

export default lib;
