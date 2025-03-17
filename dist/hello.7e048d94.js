var today = new Date();
var hourNow = today.getHours();
var minutesNow = today.getMinutes();
var secondsNow = today.getSeconds();
var greeting;
if (hourNow > 18) greeting = 'Good evening';
else if (hourNow > 12) greeting = 'Good afternoon';
else if (hourNow > 0) greeting = 'Good morning';
else greeting = 'Welcome';
// Format the time to always display two digits for minutes and seconds
var formattedTime = hourNow + ":" + (minutesNow < 10 ? "0" + minutesNow : minutesNow) + ":" + (secondsNow < 10 ? "0" + secondsNow : secondsNow);
document.write(greeting);
document.write("<br>");
document.write("Current time: " + formattedTime);

//# sourceMappingURL=hello.7e048d94.js.map
