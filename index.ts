import { LuaObj } from "@wowts/lua";

type Callback = () => void;

export interface AceDatabase extends LuaObj<any> {
    RegisterCallback: (module: any, event: string, method: string | Callback) => void;
    RegisterDefaults: (defaults: any) => void;
}

const lib = {
    New<T>(name: string, defaultDb: T): AceDatabase & T {
        const ret: AceDatabase = {
            RegisterCallback: (module: any, event: string, method: string | Callback) => {},
            RegisterDefaults: (defaults: any) => {},
        };
        return Object.assign(ret, defaultDb);
    },
};

export default lib;
