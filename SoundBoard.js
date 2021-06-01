let app = document.getElementById("app");
const sound0 = new Audio("Extras_soundboard_-_parametre_sounds_bubbles.mp3");
const sound1 = new Audio("Extras_soundboard_-_parametre_sounds_clay.mp3");
const sound2 = new Audio("Extras_soundboard_-_parametre_sounds_confetti.mp3");
const sound3 = new Audio("Extras_soundboard_-_parametre_sounds_glimmer.mp3");
const sound4 = new Audio("Extras_soundboard_-_parametre_sounds_moon.mp3");
const sound5 = new Audio("Extras_soundboard_-_parametre_sounds_ufo.mp3");


show()
function show() {
    let html = '';
    for (let i = 0; i <= 5; i++) {
        let first = i % 3 == 0 ? 'first' : '';
        html += `<div class="${first} cell" id="${i}" onclick="sound${i}.play()">Grusom lyd nr ${i + 1} </div>`;
    }
    app.innerHTML = html;
}