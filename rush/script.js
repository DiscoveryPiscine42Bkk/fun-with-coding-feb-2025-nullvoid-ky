function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function setCookie(name, value, days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function handleNum() {
    const shownum = document.getElementById('shownum');
    let currentValue = parseInt(shownum.innerHTML) || 0;
    currentValue++; 
    shownum.innerHTML = currentValue;
    setCookie("likeCount", currentValue, 3650); // 10 years (effectively permanent)
}

// Load from cookie on page load
window.onload = function() {
    const savedCount = getCookie("likeCount");
    if (savedCount) {
        document.getElementById('shownum').innerHTML = savedCount;
    }
};