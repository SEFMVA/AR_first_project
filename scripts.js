const scene = document.querySelector("a-scene")

var DONUT = new Donut({
    holder: scene,
    scale: {
        x: 1,
        y: 1,
        z: 1
    }
})

scene.addEventListener("markerFound", () => {
    console.log("Marker found!");
    if (DONUT.isHidden === true) {
        console.log("show donut");
        DONUT.show()
    }
})

scene.addEventListener("onefingermove", (event) => {
    console.log(event);

    if (DONUT.isHidden === false) {
        DONUT.rotate({
            x: event.detail.positionChange.x * 1,
            y: event.detail.positionChange.y * 1
        })

    }
});

scene.addEventListener("twofingerend", (event) => {
    console.log(event);

    if (DONUT.isHidden === false) {
        // DONUT.view.dispatchEvent(new CustomEvent('touchend'))

    }
});

scene.addEventListener("threefingerend", (event) => {
    console.log(event);

    if (DONUT.isHidden === false) {
        DONUT.view.dispatchEvent(new CustomEvent('makeBackflip'))

    }
});