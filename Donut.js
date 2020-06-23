class Donut {
    constructor({
        holder,
        scale = {
            x: 0.1,
            y: 0.1,
            z: 0.1
        },
        position = {
            x: 0,
            y: 0,
            z: -5
        },
        model = "#donut-asset"
    }) {
        this.audio = new Audio("eatSound.wav")
        this.view = document.createElement('a-entity')
        this.holder = holder

        this.view.setAttribute('scale', scale)
        this.view.setAttribute('gltf-model', model)
        this.view.setAttribute('visible', false)
        this.isHidden = true
        this.view.setAttribute('class', "clickable")
        this.view.setAttribute('position', `${position.x} ${position.y} ${position.z}`)
        this.view.setAttribute('emitevents', "true")

        // this.view.setAttribute('animation__mouseenter', "property: rotation; to: 0 360 0; loop: true; dur: 10000 startEvents: mouseenter;")
        // this.view.setAttribute('animation__mouseleave', "property: rotation; to: 360 0 0; loop: true; dur: 10000 startEvents: mouseleave;")

        this.view.addEventListener("click", () => {
            console.log("click!");
            this.view.setAttribute('animation', "property: object3D.position.y; to: 0.1; dir: alternate; dur: 200; loop: true")
            this.play()
        })

        this.audio.addEventListener("ended", () => {
            this.view.setAttribute('animation', "")
            this.view.setAttribute('visible', false);
            this.isHidden = true
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
        this.isHidden = false
    }
}