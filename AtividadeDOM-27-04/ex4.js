function mudarCor() {
    const cores = ["red", "blue", "green", "yellow", "purple"];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = corAleatoria;
}