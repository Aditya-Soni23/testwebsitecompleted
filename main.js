function teleport(){
    window.location = "page2.html";
}
















    var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

var textbox= document.getElementById("textbox");

function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();



}
function speak(){
    var synth= window.speechSynthesis;


    speak_data = document.getElementById("textbox").innerHTML;

    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

}

