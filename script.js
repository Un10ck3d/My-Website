let title = '';
let letterIndex = 0;
let fullTitle = "Welcome, im Jonathan!";

const id = setInterval(()=> {
    if (letterIndex >= fullTitle.length) {
        clearInterval(id);
    } else {
        title += fullTitle[letterIndex];
        letterIndex++;
    }
    text = document.getElementById("welcometext").innerText = title;
}, 100)

