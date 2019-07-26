import { LuaObj } from "@wowts/lua";
declare type Callback = () => void;
export interface AceDatabase extends LuaObj<any> {
    RegisterCallback: (module: any, event: string, method: string | Callback) => void;
    RegisterDefaults: (defaults: any) => void;
}
declare const lib: {
    New<T>(name: string, defaultDb: T): AceDatabase & T;
};
export default lib;
