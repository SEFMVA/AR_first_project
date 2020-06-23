document.addEventListener("markerFound", () => {
    console.log("Marker found!");
})

var DONUT = new Donut({
    holder: document.querySelector("a-scene"),
    scale: {
        x: 0.3,
        y: 0.3,
        z: 0.3
    }
})

AFRAME.registerComponent('createdonut', {
    init: function () {
        if (DONUT.isHidden === true) {
            // const el = this.el;
            console.log("show donut");
            DONUT.show()

            // el.addEventListener('click', function () {
            //     console.log("click event");
            //     DONUT.view.dispatchEvent(new CustomEvent('click'))

            // });

            // el.addEventListener('touchend', function () {
            //     console.log("touchEnd event");
            //     DONUT.view.dispatchEvent(new CustomEvent('click'))
            // });
        }
    }
})