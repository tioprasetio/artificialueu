const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(text) {
  const text_speak = new SpeechSynthesisUtterance(text);

  // Set language to Indonesian
  text_speak.lang = "id-ID";
  text_speak.rate = 1;
  text_speak.volume = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hour = day.getHours();

  if (hour >= 0 && hour < 12) {
    speak("Selamat Pagi Tuan...");
  } else if (hour >= 12 && hour < 17) {
    // Perbaiki kondisi untuk jam lebih dari 12
    speak("Selamat Sore Tuan...");
  } else {
    speak("Selamat Malam Tuan...");
  }
}

window.addEventListener("load", () => {
  speak("Jarvis di sini..");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

// Set recognition language to Indonesian
recognition.lang = "id-ID";

recognition.onresult = (event) => {
  const currentIndex = event.resultIndex;
  const transcript = event.results[currentIndex][0].transcript;
  content.textContent = transcript;
  takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  content.textContent = "Mendengarkan....";
  recognition.start();
});

function takeCommand(message) {
  if (message.includes("hai") || message.includes("halo")) {
    speak("Halo Tuan, ada yang bisa jarvis bantu?");
  } else if (message.includes("buka google")) {
    window.open("https://google.com", "_blank");
    speak("Membuka Google...");
  } else if (message.includes("buka youtube")) {
    window.open("https://youtube.com", "_blank");
    speak("Membuka Youtube...");
  } else if (message.includes("buka instagram")) {
    window.open("https://instagram.com", "_blank");
    speak("Membuka Instagram...");
  } else if (message.includes("buka figma")) {
    window.open("https://figma.com", "_blank");
    speak("Membuka Figma...");
  } else if (message.includes("buka whatsapp")) {
    window.open("https://web.whatsapp.com/", "_blank");
    speak("Membuka Whatsapp...");
  } else if (message.includes("buka maps")) {
    window.open("https://www.google.co.id/maps", "_blank");
    speak("Membuka Google maps...");
  } else if (message.includes("buka spotify")) {
    window.open("https://open.spotify.com/", "_blank");
    speak("Membuka Spotify...");
  } else if (message.includes("buka tiktok")) {
    window.open("https://www.tiktok.com/", "_blank");
    speak("Membuka Tiktok...");
  } else if (
    message.includes("apa itu") ||
    message.includes("siapa itu") ||
    message.includes("apa saja")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "Ini yang saya temukan di internet mengenai " + message;
    speak(finalText);
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://id.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "Ini yang saya temukan di Wikipedia mengenai " + message;
    speak(finalText);
  } else if (message.includes("jam berapa")) {
    const time = new Date().toLocaleString("id-ID", {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = "Sekarang jam " + time;
    speak(finalText);
  } else if (message.includes("tanggal berapa")) {
    const date = new Date().toLocaleString("id-ID", {
      month: "long",
      day: "numeric",
    });
    const finalText = "Hari ini tanggal " + date;
    speak(finalText);
  } else if (message.includes("kalkulator")) {
    window.open("Calculator:///");
    const finalText = "Membuka Kalkulator";
    speak(finalText);
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText =
      "Saya menemukan beberapa informasi mengenai " + message + " di Google";
    speak(finalText);
  }
}
