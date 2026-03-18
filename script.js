// 🎤 Speech to Text
function startListening() {
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';

recognition.start();

recognition.onresult = function(event) {
const text = event.results[0][0].transcript;
document.getElementById("output").innerText = text;

```
processComplaint(text);
```

};
}

// 📂 Categorization
function categorizeComplaint(text) {
text = text.toLowerCase();

if (text.includes("electricity") || text.includes("power")) {
return "Electricity Department";
}
else if (text.includes("water")) {
return "Water Department";
}
else if (text.includes("road")) {
return "Municipality";
}
else {
return "General Department";
}
}

// 🔊 Murf API (Text → Voice)
async function generateVoiceResponse(text) {
const response = await fetch("https://api.murf.ai/v1/speech/generate", {
method: "POST",
headers: {
"Content-Type": "application/json",
"api-key": "YOUR_API_KEY"
},
body: JSON.stringify({
text: text,
voiceId: "en-US-natalie"
})
});

const data = await response.json();
return data.audioFile;
}

// 🔁 Full Flow
async function processComplaint(text) {
const department = categorizeComplaint(text);

const responseText = `Your complaint has been registered and sent to ${department}`;

const audioUrl = await generateVoiceResponse(responseText);

const player = document.getElementById("audioPlayer");
player.src = audioUrl;
player.play();
}
