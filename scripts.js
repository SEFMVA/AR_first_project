var DONUT = null
var AUDIO = new Audio("eatSound.mp3")

document.addEventListener("markerFound", () => {
    console.log("Marker found!");
    if (DONUT === null) {
        console.log("TODO create donut")

        DONUT.addEventListener("click", () => {
            console.log("TODO start animation")
            AUDIO.play()
        })

    }
})

AUDIO.addEventListener("ended", () => {
    console.log("TODO delete donut")
    DONUT = null
})