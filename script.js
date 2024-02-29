function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    // Convert hours to 12-hour format
    if (hour >= 12) {
        am_pm = "PM";
        if (hour > 12) hour -= 12;
    } else if (hour === 0) {
        hour = 12;
    }

    // Add leading zeros to single-digit minutes and seconds
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    // Construct the current time string
    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    // Update the clock container
    document.getElementById('clock').innerHTML = currentTime;
}

// Update the clock every second
setInterval(showTime, 1000);

// Initial call to display the clock immediately
showTime();