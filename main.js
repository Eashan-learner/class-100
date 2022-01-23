var SpeechRecognition = window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerhtml = "";
    recognition.start();
}
recognition.onresult= function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML = content;
    if (content=="take my selfie"){
        speak();
        console.log("started"); 
    }
    
}
function speak (){
var synth = window.speechSynthesis;
dataholder = "Your snapshot will be taken in 5seconds 4seconds 3 seconds 2 seconds 1 second";
var Utterthis=new SpeechSynthesisUtterance(dataholder);
synth.speak(Utterthis);
Webcam.attach(camera);

setTimeout(function(){
take_snapshot();
save();
}, 5000);


}
Webcam.set({
width : 300,
height : 250,
image_format: 'jpg',
jpg_quality:90
}) ;
camera=document.getElementById("camera");

function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="magic" src="'+data_uri+'">';
});
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("magic").src;
    link.href = image;
    link.click();
}