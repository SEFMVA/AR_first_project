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
        this.view.setAttribute('gesture-handler', "")

        this.eatingLock = false
        // this.view.setAttribute('animation__mouseenter', "property: rotation; to: 0 360 0; loop: true; dur: 10000 startEvents: mouseenter;")
        // this.view.setAttribute('animation__mouseleave', "property: rotation; to: 360 0 0; loop: true; dur: 10000 startEvents: mouseleave;")

        this.view.addEventListener("click", () => {
            if (this.isHidden === false) {
                console.log("click!");
                this.view.setAttribute('animation', "property: object3D.position.y; to: 0.1; dir: alternate; dur: 200; loop: true")
                this.play()
                this.eatingLock = true
            }
        })

        this.view.addEventListener("touchend", () => {
            if (this.isHidden === false) {
                console.log("touchend!");
                this.view.setAttribute('animation', "property: object3D.position.y; to: 0.1; dir: alternate; dur: 200; loop: true")
                this.play()
                this.eatingLock = true
            }
        })

        this.audio.addEventListener("ended", () => {
            this.view.removeAttribute('animation')
            this.view.setAttribute('visible', false);
            this.isHidden = true
            this.eatingLock = false
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
        this.makeBackflip()
    }
    makeBackflip() {
        if (this.isHidden === false) {
            console.log("backflip!");
            // this.view.removeAttribute('animation-mixer')
            this.view.setAttribute('animation-mixer', {
                clip: 'DonutFlip',
                loop: 'once'
            });
            // setTimeout(this.makeIdle(), 10000);
        }
    }
    makeIdle() {
        console.log("Donut Idle!");

        this.view.removeAttribute('animation-mixer')
        this.view.setAttribute('animation-mixer', {
            clip: 'DonutIdle',
            loop: 'repeat'
        });
    }
    rotate({
        x = 0,
        y = 0
    }) {
        this.view.object3D.rotation.x += y;
        this.view.object3D.rotation.y += x;
    }
}