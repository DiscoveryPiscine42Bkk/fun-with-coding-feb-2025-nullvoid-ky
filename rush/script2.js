function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Days until expiration
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/"; // path=/ makes it available across the site
}

function handleNum() {
    const shownum = document.getElementById('shownum');
    let currentValue = parseInt(shownum.innerHTML) || 0;

    currentValue++; // Increment the value

    shownum.innerHTML = currentValue;

    // Save to cookie (using a very long time for "never expire" effect)
    setCookie("likeCount2", currentValue, 3650); // 10 years (effectively permanent)
}

// Load from cookie on page load
window.onload = function() {
    const savedCount = getCookie("likeCount2");
    if (savedCount) {
        document.getElementById('shownum').innerHTML = savedCount;
    }
};