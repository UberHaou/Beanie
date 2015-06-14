function lookForFunction(input)
{
    for(var i = 0; i < this.functionList.length; i++)
    {
        if(this.functionList[i].name == input)
        {
            return true;
        }
    }
    return false;
}

function run(method, args)
{
    for(var i = 0; i < this.functionList.length; i++)
    {
        if(this.functionList[i].name == method)
        {
            return this.functionList[i].execute(args);
        }
    }
    return "Could not execute command.";
}

function findLib(name)
{
    
}
var loadLib = {
    name: "loadLib",
    execute: function(args, method) {
        var lib = findLib(args[1] +".js");
        if(lib != null)
        {
            method.functionList.push(lib);
            return "Library " + args[1] + " has been loaded.";
        }
        return "Specified library not found.";
    }
};

function libLoader()
{
    this.functionList = [loadLib];
    return this;
}
