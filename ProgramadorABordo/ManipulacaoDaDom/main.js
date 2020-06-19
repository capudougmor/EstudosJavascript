const keys = document.querySelectorAll(".key")

function playNote(event) {

    let audioKeyCode = getKeyCode(event)
    
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFoundAnykey = !key

    if(cantFoundAnykey) {
        return
    }

    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
    console.log(audio)
}

function getKeyCode(event) {
    let keyCode;

    const iskeyboard = event.type === "keydown"
    if(iskeyboard) {
        keyCode = event.keyCode
    } else {
        keyCode = event.target.dataset.key
    }

    return keyCode
}

keys.forEach((key) => {
   key.addEventListener('click', playNote)
})

window.addEventListener("keydown", playNote) 