class Donut {
    constructor(holder) {
        this.audio = new Audio("eatSound.mp3")
        this.view = document.createElement('a-entity')
        this.holder = holder
        let scale = {
            x: 0.1,
            y: 0.1,
            z: 0.1
        }
        const modelPath = "./models/donut/Donut.gltf"
        this.view.setAttribute('scale', scale);
        this.view.setAttribute('gltf-model', modelPath)
        // this.view.setAttribute('visible', false);
        this.view.setAttribute('visible', true);


        this.view.addEventListener("click", () => {
            console.log("TODO start animation")
            // this.play()
        })

        this.audio.addEventListener("ended", () => {
            console.log("TODO remove donut");
            // this.view.classList.add("hiddenDonut")
        })

        this.holder.appendChild(this.view)
    }
    play() {
        this.audio.pause()
        this.audio.currentTime = 0
        this.audio.play()
        // this.view.setAttribute('visible', true);

    }
}