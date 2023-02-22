const btn = document.querySelector('.start');
const content = document.querySelector('.start')
function speak(sentence){
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate =1;
  text_speak.pitch =1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe(){
  var day = new Date();
  var hour = day.getHours();

  speak("halum the great");
}

window.addEventListener('load',()=>{

  speak("Activating ");
  wishMe();
})



























// const startButton = document.querySelector("#start");
// const recognition = new webkitSpeechRecognition();
// recognition.continous = false;
// recognition.lang ="en-US";
// recognition.interimResults = false;
// recognition.maxAlternative=1;

// const synth = window.speechSynthesis;

// startButton.addEventListener("click",()=>{
//     recognition.start();
// });

// let utter = new SpeechSynthesisUtterance("hi, how are you");
// utter.onend=()=>{
//     recognition.start();
// }




// recognition.onresults=(e) => {
//     const transcript = e.results[e.results.lenght=1][0].transcrip.trim();

//     if(transcript==="hey")
//     {
//         recognition.stop();
//         utter.text="hi how are you ?";
//         synth.speak(utter);
//         console.log("hi,how are you ?");

//     }
// }
// const startBtn=document.querySelector("#start");
// const speechRecognition = window.webkitSpeechRecognition;

// const recognition = new speechRecognition();

// recognition.onstart = function() {
//   console.log("Voice assistant activated!");
// };

// recognition.onresult = function(event) {
//   const transcript = event.results[0][0].transcript;
//   console.log(transcript);
//   if (transcript === "hello") {
//     console.log("Hello, how can I assist you?");
//   }
// };

// recognition.start();
