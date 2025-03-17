const lyrics = [
    { time: 0, text: "Introduction - David Byrne" },
    { time: 33, text: "I can't seem to face up to the facts" },
    { time: 36, text: "I'm tense and nervous and I can't relax" },
    { time: 40, text: "I can't sleep 'cause my bed's on fire" },
    { time: 45, text: "Don't touch me, I'm a real live wire" },
    { time: 50, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 55, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 60, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 67, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 72, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 78, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 85, text: "Ay-ya-ya-ya-ya-ya, ooh" },
    { time: 90, text: "You start a conversation, you can't even finish it" },
    { time: 95, text: "You're talking a lot, but you're not saying anything" },
    { time: 100, text: "When I have nothing to say, my lips are sealed" },
    { time: 105, text: "Say something once, why say it again?" },
    { time: 110, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 115, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 122, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 130, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 135, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 142, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 150, text: "Ay-ya-ya-ya-ya-ya" },
    { time: 155, text: "Ce que j'ai fait, ce soir-là" },
    { time: 160, text: "Ce qu'elle a dit, ce soir-là" },
    { time: 165, text: "Réalisant mon espoir" },
    { time: 170, text: "Je me lance vers la gloire, okay" },
    { time: 175, text: "Yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah, yeah" },
    { time: 180, text: "We are vain and we are blind" },
    { time: 185, text: "I hate people when they're not polite" },
    { time: 190, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 195, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 202, text: "Run, run, run, run, run, run, run away, oh-oh-oh" },
    { time: 210, text: "Psycho Killer, qu'est-ce que c'est?" },
    { time: 215, text: "Fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa fa..." },
    { time: 222, text: "Run, run, run, run, run, run, run away, oh, oh, oh, oh" },
    { time: 230, text: "Ai-ya-ya-ya-ya-ya, ooh" },
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