var beaniediv  = document.getElementById("beanie");



//the actual beanie object
var beanie = null;


function createBeanie()
{
    this.libraries = [libLoader(), libvoice];
    return this;
}
beanie = createBeanie();

function runbeanie(input)
{
    if(input == null)
        input = document.getElementById("input").value;
    var inputArray = input.split(" ");
    var method = inputArray[0];
    var understoodMethod = false;
    var library = null;
    for(var i = 0; i < beanie.libraries.length; i++)
    {
        
        understoodMethod = beanie.libraries[i].lookForFunction(method);
        if(understoodMethod == true)
        {
            library = beanie.libraries[i];
            break;
        }
    }
    if(understoodMethod)
    {
        output(input, library.run(method, inputArray, beanie));
    }
    else
    {
        output(input, "Could not understand command.");
    }
}

function output(input, out)
{
    beaniediv.innerHTML = "You: " + input + "<br/>Beanie: " + out + "</br>" + beaniediv.innerHTML;
}