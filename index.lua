local __exports = LibStub:NewLibrary("AceDB-3.0", 10101)
if not __exports then return end
local kpairs = pairs
local lib = {
    New = function(self, name, defaultDb)
        local ret = {
            RegisterCallback = function(module, event, method)
            end,
            RegisterDefaults = function(defaults)
            end
        }
        for k, v in kpairs(defaultDb) do
            ret[k] = v
        end
        return ret
    end,

}
for k,v in pairs(lib) do __exports[k] = v end
