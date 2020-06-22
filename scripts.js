document.addEventListener("markerFound", () => {
    console.log("Marker found!");

})

// AFRAME.registerComponent('createDonut', {
//     init: function () {
//         const el = this.el;
//         const donut = new Donut(this.el)


//         el.addEventListener('click', function () {
//             console.log("click event");
//             donut.view.dispatchEvent(new CustomEvent('click'))

//         });

//         el.addEventListener('touchend', function () {
//             console.log("touchEnd event");
//             donut.view.dispatchEvent(new CustomEvent('touchend'))
//         });
//     }
// })