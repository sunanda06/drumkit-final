var drumbuttons = document.querySelectorAll(".drum").length;
for (var index = 0; index < drumbuttons; index++) {
    document.querySelectorAll('.drum')[index].addEventListener('click', function () {
        drumSounds(this.innerHTML);
        drumButtonAnimation(event.key);
    })
}
document.addEventListener('keydown', function (event) {
    drumSounds(event.key);
    drumButtonAnimation(event.key);
})
function drumSounds(drumSelecter) {
    switch (drumSelecter) {
        case 'w':
            var drumaudio = new Audio('sounds/tom-1.mp3');
            drumaudio.play();
            break;
        case 's':
            var drumaudio = new Audio('sounds/tom-2.mp3');
            drumaudio.play();
            break;
        case 'a':
            var drumaudio = new Audio('sounds/tom-3.mp3');
            drumaudio.play();
            break;
        case 'd':
            var drumaudio = new Audio('sounds/tom-4.mp3');
            drumaudio.play();
            break;
        case 'j':
            var drumaudio = new Audio('sounds/snare.mp3');
            drumaudio.play();
            break;
        case 'k':
            var drumaudio = new Audio('sounds/crash.mp3');
            drumaudio.play();
            break;
        case 'l':
            var drumaudio = new Audio('sounds/kick-bass.mp3');
            drumaudio.play();
            break;
        default:
            console.log(this.innerHTML);
            break;
    }

}
function drumButtonAnimation(currentkey) {
    var pressedButton = document.querySelector('.' + currentkey);
    pressedButton.classList.add("pressed");
    setTimeout(function () { pressedButton.classList.remove('pressed'); }, 100);
}
