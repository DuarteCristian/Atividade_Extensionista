function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function fecharMenu() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

localStorage.setItem("nomeUsuario", nome);
localStorage.setItem("nomeUsuario", "Cristian");

