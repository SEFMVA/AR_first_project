class Donut {
    constructor({
        holder,
        scale = {
            x: 0.1,
            y: 0.1,
            z: 0.1
        }
    }) {
        this.audio = new Audio("eatSound.mp3")
        this.view = document.createElement('a-entity')
        this.holder = holder

        const modelPath = "./models/donut/Donut.gltf"
        this.view.setAttribute('scale', scale);
        this.view.setAttribute('gltf-model', modelPath)
        this.view.setAttribute('visible', false);
        // this.view.setAttribute('animation-mixer', "clip: Scene")

        this.view.addEventListener("click", () => {
            console.log("TODO start animation")
            this.play()
        })

        this.audio.addEventListener("ended", () => {
            this.view.setAttribute('visible', false);
        })

        this.holder.appendChild(this.view)
    }
    play() {
        this.audio.pause()
        this.audio.currentTime = 0
        this.audio.play()

    }
    show() {
        this.view.setAttribute('visible', true);
    }
}