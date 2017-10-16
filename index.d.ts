import { LuaObj } from "@wowts/lua";
export interface AceDatabase extends LuaObj<any> {
    RegisterCallback: (module: any, event: string, method: string) => void;
    RegisterDefaults: (defaults: any) => void;
}
declare const lib: {
    New<T>(name: string, defaultDb: T): AceDatabase & T;
};
export default lib;
