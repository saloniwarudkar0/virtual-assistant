let btn=document.querySelector("#btn")
let content=document.querySelector("#content")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
   
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon Sir")
    }else{
         speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})
let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
   takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
})
function takeCommand(message){
    let lowerMessage = message.toLowerCase();
    if(lowerMessage.includes("hello") || lowerMessage.includes("hey") || lowerMessage.includes("hii")){
        speak("Hello sir ,what can i help you?")
    }
    else if(lowerMessage.includes("who are you") || lowerMessage.includes("Tell me about yourself")){
         speak("I am virtual assistant GoGo , created by saloni")
    }
     else if(lowerMessage.includes("open youtube")){
        speak("Opening youtube....")
         window.open("https://www.youtube.com","_blank")
    }
     else if(lowerMessage.includes("open google")){
        speak("Opening google....")
         window.open("https://www.google.com","_blank")
    }
     else if(lowerMessage.includes("open facebook")){
        speak("Opening facebook....")
         window.open("https://www.facebook.com","_blank")
    }
     else if(lowerMessage.includes("open instagram")){
        speak("Opening instagram....")
         window.open("https://www.instagram.com/","_blank")
    }
     else if(lowerMessage.includes("open linkedin")){
        speak("Opening linkedin....")
         window.open("https://in.linkedin.com/","_blank")
    }
}


