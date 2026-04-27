function alternarModo() {
    const corpo = document.body;
    if (corpo.style.backgroundColor === "black") {
        corpo.style.backgroundColor = "white";
        corpo.style.color = "black";
    } else {
        corpo.style.backgroundColor = "black";
        corpo.style.color = "white";
    }
}