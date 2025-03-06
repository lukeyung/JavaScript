const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 5.1, text: "I can't seem to face up to the facts" },
    { time: 10.3, text: "I'm tense and nervous and I can't relax" },
    { time: 15.5, text: "I can't sleep 'cause my bed's on fire" },
    { time: 20.7, text: "Don't touch me, I'm a real live wire" },
    { time: 25.9, text: "Psycho Killer" },
    { time: 30.0, text: "Qu'est-ce que c'est?" },
    { time: 35.2, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 40.4, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 45.6, text: "Psycho Killer" },
    { time: 50.8, text: "Qu'est-ce que c'est?" },
    { time: 55.0, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 60.2, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 65.4, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 70.6, text: "You start a conversation, you can't even finish it" },
    { time: 75.8, text: "You're talking a lot, but you're not saying anything" },
    { time: 81.0, text: "When I have nothing to say, my lips are sealed" },
    { time: 86.2, text: "Say something once, why say it again?" },
    { time: 91.4, text: "Psycho Killer" },
    { time: 96.6, text: "Qu'est-ce que c'est?" },
    { time: 101.8, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 107.0, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 112.2, text: "Ce que j'ai fait, ce soir-là" },
    { time: 117.4, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 122.6, text: "Réalisant mon espoir" },
    { time: 127.8, text: "Je me lance vers la gloire, okay" },
    { time: 133.0, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 138.2, text: "We are vain and we are blind" },
    { time: 143.4, text: "I hate people when they're not polite" },
    { time: 148.6, text: "Psycho Killer" },
    { time: 153.8, text: "Qu'est-ce que c'est?" },
    { time: 159.0, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 164.2, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 169.4, text: "Psycho Killer" },
    { time: 174.6, text: "Qu'est-ce que c'est?" },
    { time: 179.8, text: "Fa-fa-fa-fa, fa-fa-fa-fa-fa-fa, better" },
    { time: 185.0, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 190.2, text: "Ai-ya-ya-ya-ya-ya, ooh" }
];

let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricElement = document.getElementById("lyric");

audio.addEventListener("play", () => {
    setInterval(displayLyrics, 100); // Update lyrics every 100ms for better accuracy
});

function displayLyrics() {
    const currentTime = audio.currentTime;
    if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
        lyricElement.textContent = lyrics[currentLyricIndex].text;
        currentLyricIndex++;
    }
}
