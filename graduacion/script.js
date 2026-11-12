
function abrirCarta() {
    document.getElementById("inicio").style.display = "none";

    const carta = document.getElementById("carta");
    carta.classList.remove("oculta");

    lluviaDeAmor();
}

function masSorpresa() {
    const mensaje = document.getElementById("extra");

    mensaje.classList.remove("oculta");

    lluviaDeAmor();
}

function lluviaDeAmor() {
    const simbolos = ["❤️", "💕", "🌸", "✨", "💗", "🌷"];

    for (let i = 0; i < 35; i++) {
        const particula = document.createElement("div");

        particula.classList.add("particula");
        particula.textContent =
            simbolos[Math.floor(Math.random() * simbolos.length)];

        particula.style.left = Math.random() * 100 + "vw";
        particula.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        particula.style.fontSize =
            (14 + Math.random() * 18) + "px";

        document.body.appendChild(particula);

        setTimeout(() => {
            particula.remove();
        }, 7500);
    }
}

// Pequeños destellos de vez en cuando
setInterval(() => {
    const brillo = document.createElement("div");

    brillo.classList.add("particula");
    brillo.textContent = "✨";
    brillo.style.left = Math.random() * 100 + "vw";
    brillo.style.animationDuration = "5s";

    document.body.appendChild(brillo);

    setTimeout(() => {
        brillo.remove();
    }, 5000);

}, 1800);
