const scene = document.querySelector("a-scene")
const nft=document.querySelector("#nft-holder")

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
    console.log(nft.getAttribute('position'));
    if (DONUT.isHidden === true) {
        console.log("show donut");
        DONUT.show()
    }
})

// scene.addEventListener("markerLost", () => {
//     console.log("Marker lost!");
//     if (DONUT.isHidden === false) {
//         console.log("hide donut");
//         DONUT.hide()
//     }
// })

scene.addEventListener("onefingermove", (event) => {
    // console.log(event);

    if (DONUT.isHidden === false) {
        DONUT.rotate({
            x: event.detail.positionChange.x * 2,
            y: event.detail.positionChange.y * 2
        })

    }
});

scene.addEventListener("twofingerend", (event) => {
    console.log(event);

    if (DONUT.isHidden === false && DONUT.eatingLock === false) {
        DONUT.view.dispatchEvent(new CustomEvent('touchend'))

    }
});

// scene.addEventListener("threefingerend", (event) => {
//     console.log(event);
//     if (DONUT.isHidden === false) {
//         DONUT.makeBackflip()
//     }
// });