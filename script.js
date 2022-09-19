window.addEventListener('deviceorientation', (event) => {
    let alpha = event.alpha; // Положение относильно оси Z (0...360)
    let beta = event.beta; // Положение относильно оси X (-180...180)
    let gamma = event.gamma; // Положение относильно оси Y (-90...90)

    document.querySelector("#alpha").innerHTML = Math.floor(alpha);
    document.querySelector("#beta").innerHTML = Math.floor(beta);
    document.querySelector("#gamma").innerHTML = Math.floor(gamma);

}, false);
