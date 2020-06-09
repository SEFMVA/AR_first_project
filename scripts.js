console.error(AFRAME);
document.addEventListener("camera-init", () => {
    console.log("Camera init event");
})

document.addEventListener("markerFound", () => {
    console.log("Marker found!");
})