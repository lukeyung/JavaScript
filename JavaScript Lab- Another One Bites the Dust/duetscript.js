const lyrics = [
  { time: 0, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
  { time: 2, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
  { time: 4, text: "I need a break beat, uh", singer: "others" },
  { time: 5, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
  { time: 6, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
  { time: 8, text: "I need a break beat, uh", singer: "others" },
  { time: 9, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
  { time: 11, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
  { time: 13, text: "I need a break beat, uh", singer: "others" },
  { time: 14, text: "Outta the doorway the bullets rip", singer: "freddie" },
  { time: 16, text: "Repeating to the sound of the beat, hey", singer: "freddie" },

  { time: 18, text: "Yo, a for the kids in the club that's ready to get bugged", singer: "others" },
  { time: 20, text: "Another one bites the dust", singer: "freddie" },
  { time: 22, text: "And for the thugs with the burners that wanna blast off", singer: "others" },
  { time: 25, text: "Another one bites the dust", singer: "freddie" },
  { time: 28, text: "And for the kids on the blocks, shootin' at the crooked cops—blaow!", singer: "others" },
  { time: 30, text: "Another one bites the dust", singer: "freddie" },
  { time: 32, text: "And another one gone", singer: "freddie" },
  { time: 33, text: "And another one gone", singer: "freddie" },
  { time: 34, text: "Another one bites the dust", singer: "freddie" },
  { time: 36, text: "Young Free, Freddie where you at?", singer: "others" },

  { time: 38, text: "Steve walks wearily down the street", singer: "freddie" },
  { time: 40, text: "With the brim pulled way down low", singer: "freddie" },
  { time: 42, text: "Some cat up in Brooklyn just got robbed with a Kangol", singer: "others" },
  { time: 45, text: "Are you ready, hey, are you ready for this?", singer: "freddie" },
  { time: 47, text: "Are you hanging on the edge of your seat?", singer: "freddie" },
  { time: 49, text: "Out of the doorway, the bullets rip", singer: "freddie" },
  { time: 52, text: "Repeating to the sound of the beat, hey", singer: "freddie" },
  { time: 54, text: "My man got shot, and the block got hot", singer: "others" },
  { time: 57, text: "Another one bites the dust", singer: "freddie" },
  { time: 59, text: "Yo, hey I hear more shots, this is like Fort Knox, kid", singer: "others" },
  { time: 61, text: "Another one bites the dust", singer: "freddie" },
  { time: 63, text: "Yo, hold your breath", singer: "others" },
  { time: 64, text: "And another one gone", singer: "freddie" },
  { time: 65, text: "Hold your breath", singer: "others" },
  { time: 65.5, text: "And another one gone", singer: "freddie" },
  { time: 66.5, text: "Hold your breath", singer: "others" },
  { time: 67, text: "Another one bites the dust", singer: "freddie" },
  { time: 68, text: "Yo, check it", singer: "others" },

  { time: 69, text: "If you're a soldier at ease", singer: "others" },
{ time: 70, text: "My military style is known to murder Nazis", singer: "others" },
{ time: 71, text: "Brooklyn to Germany", singer: "others" },
{ time: 73, text: "My kamikaze will blow the U2", singer: "others" },
{ time: 75, text: "They hire Idi Amin in Timbuktu", singer: "others" },
{ time: 77, text: "Whether you Hindu, or do the Voodoo", singer: "others" },
{ time: 79, text: "You can't foresee this unless I bring the previews, yeah, yeah", singer: "others" },
{ time: 83.5, text: "Yo, it's the number one rappin' band", singer: "others" },
{ time: 85.5, text: "Yo, this review will be critically acclaimed", singer: "others" },
{ time: 87.5, text: "Leave you in critical pain, clinically insane", singer: "others" },
{ time: 89, text: "The name Wyclef Jean, with a yes, yes y'all", singer: "others" },
{ time: 91, text: "Better have a vest y'all, I'll blast, and bless y'all", singer: "others" },
{ time: 93, text: "Oh yeah", singer: "freddie" },
{ time: 95, text: "F-y'all, the mark of the beast, the triple six", singer: "others" },
{ time: 97, text: "Time running out, listen to the tick", singer: "freddie" },
{ time: 99, text: "Oh yeah", singer: "freddie" },
{ time: 101, text: "If you see what I saw, then you seen what I seen", singer: "others" },
{ time: 103, text: "If you know what I know, you know what I mean", singer: "others" },
{ time: 105, text: "Oh yeah", singer: "freddie" },
{ time: 107, text: "Commanding officer of the Navy SEAL team", singer: "others" },
{ time: 109, text: "Once I give the orders, you feel the infrared beam", singer: "others" },
{ time: 111, text: "Oh yeah", singer: "freddie" },
{ time: 113, text: "Blaow!", singer: "others" },
{ time: 115, text: "For all you critics, sayin' 'another remake'", singer: "others" },
{ time: 117, text: "Another one bites the dust", singer: "freddie" },
{ time: 119, text: "Yo, if you know the deal, this is the master reel, kid", singer: "others" },
{ time: 121, text: "Another one bites the dust", singer: "freddie" },
{ time: 123, text: "Oh yeah", singer: "freddie" },
{ time: 125, text: "And another one gone", singer: "freddie" },
{ time: 127, text: "Right", singer: "others" },
{ time: 129, text: "And another one gone", singer: "freddie" },
{ time: 131, text: "Right", singer: "others" },
{ time: 133, text: "Another one bites the dust, hey", singer: "freddie" },
{ time: 135, text: "Freddie Mercury, where you at yo?", singer: "others" },

{ time: 137, text: "How do you think I'm gonna get along", singer: "freddie" },
{ time: 139, text: "Without you when you're gone", singer: "freddie" },
{ time: 141, text: "Oh yeah", singer: "freddie" },
{ time: 143, text: "I need a break yo", singer: "others" },
{ time: 145, text: "If you're ready for the first of the month", singer: "others" },
{ time: 147, text: "For that welfare check, come on", singer: "others" },
{ time: 149, text: "Kicked me out on my own", singer: "freddie" },
{ time: 151, text: "I need a break beat", singer: "others" },
{ time: 153, text: "Are you happy, are you satisfied?", singer: "freddie" },
{ time: 155, text: "How long can you stand the heat?", singer: "freddie" },
{ time: 157, text: "I need a break beat", singer: "others" },
{ time: 159, text: "Outta the doorway, the bullets rip", singer: "freddie" },
{ time: 161, text: "To the sound of the beat, look out", singer: "freddie" },
{ time: 163, text: "Yo, bulletproof vests, like the wild, wild west", singer: "others" },
{ time: 165, text: "Another one bites the dust", singer: "freddie" },
{ time: 167, text: "Yo, this is a stickup, now take off your Rolex", singer: "others" },
{ time: 169, text: "Another one bites the dust", singer: "freddie" },
{ time: 171, text: "Yo, dirty money, good money, yo it's all money-money", singer: "others" },
{ time: 173, text: "Another one bites the dust", singer: "freddie" },
{ time: 175, text: "Yo, Dirty Cash", singer: "others" },
{ time: 177, text: "And another one gone", singer: "freddie" },
{ time: 179, text: "Dirty Cash", singer: "others" },
{ time: 181, text: "And another one gone", singer: "freddie" },
{ time: 183, text: "The adventures of Dirty Cash", singer: "others" },
{ time: 185, text: "Another one bites the dust", singer: "freddie" }

];


let currentLyricIndex = 0;
const audio = document.getElementById("audio");
const lyricFreddie = document.getElementById("lyric-freddie");
const lyricOthers = document.getElementById("lyric-others");

audio.addEventListener("play", () => {
  setInterval(displayLyrics, 100);
});

function displayLyrics() {
  const currentTime = audio.currentTime;

  if (currentLyricIndex < lyrics.length && currentTime >= lyrics[currentLyricIndex].time) {
    const currentLyric = lyrics[currentLyricIndex];

    if (currentLyric.singer === "freddie") {
      lyricFreddie.textContent = currentLyric.text;
      lyricOthers.textContent = ""; 
    } else {
      lyricOthers.textContent = currentLyric.text;
      lyricFreddie.textContent = "";
    }

    currentLyricIndex++;
  }
}