var recognition = new webkitSpeechRecognition();
recognition.interimResults = true;
recognition.continuous = true;
recognition.onresult = function(event) {
    var final_transcript = '';
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
    document.getElementById("beanie").innerHTML = "You: " + final_transcript + "</br>" + document.getElementById("beanie").innerHTML;
};
recognition.onerror = function(event)
{
    
    alert(event.error);
};
var record = {
    name: "record",
    execute: function(args, method)
    {
        
        recognition.start();
        return "Starting Speech Recognition";
    }
};

var libvoice = {
    name: "libVoice",
    run: function(method, args)
    {
        for(var i = 0; i < this.functionList.length; i++)
        {
            if(this.functionList[i].name == method)
            {
                return this.functionList[i].execute(args);
            }
        }
        return "Could not execute command.";
    },
    lookForFunction: function(input)
    {
        for(var i = 0; i < this.functionList.length; i++)
        {
            if(this.functionList[i].name == input)
            {
                return true;
            }
        }
        return false;
    },
    functionList: [record]
};