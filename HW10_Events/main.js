// Необхідно написати програму, яка буде зчитувати з клавіатури натискання клавіш та відтворювати унікальний звук для кожної
// клавіши (клавіши можуть бути будь-які, звуки можуть бути будь-які, тільки вкажіть у верстці – які кнопки натискати).

window.addEventListener('keydown',keydownPlayingPiano);
window.addEventListener('click',clickPlayingPiano);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function keydownPlayingPiano(e) {
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function clickPlayingPiano (e){
    const audio = document.querySelector(`audio[data-key = "${e.srcElement.dataset.key}"]`);
    const key = document.querySelector(`.key[data-key = "${e.srcElement.dataset.key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}


