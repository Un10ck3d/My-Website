let title = '';
let letterIndex = 0;
let fullTitle = "Welcome, i'm Jonathan!";

const id = setInterval(()=> {
    if (letterIndex >= fullTitle.length) {
        clearInterval(id);
    } else {
        title += fullTitle[letterIndex];
        letterIndex++;
    }
    document.getElementById("welcometext").innerText = title;
    var fragment = document.createElement('span');
    fragment.innerHTML = " ▋";
    fragment.id = 'type';
    document.getElementById('welcometext').appendChild(fragment);
}, 100)

