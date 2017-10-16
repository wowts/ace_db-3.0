local __exports = LibStub:NewLibrary("AceDb-3.0", 10000)
if not __exports then return end
local pairs = pairs
local lib = {
    New = function(self, name, defaultDb)
        local ret = {
            RegisterCallback = function(module, event, method)
            end,
            RegisterDefaults = function(defaults)
            end
        }
        for k, v in pairs(defaultDb) do
            ret[k] = v
        end
        return ret
    end,

}
for k,v in pairs(lib) do __exports[k] = v end
