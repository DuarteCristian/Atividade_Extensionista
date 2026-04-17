function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
    document.getElementById("overlay").classList.toggle("active");
}

function fecharMenu() {
    document.getElementById("sidebar").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

function cadastrar() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;

    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);

    window.location.href = "perfil.html"; // ✅ correto
}
function carregarPerfil() {
    let nome = localStorage.getItem("nome");
    let email = localStorage.getItem("email");

    document.getElementById("nomePerfil").innerText = nome;
    document.getElementById("emailPerfil").innerText = email;
}

// 👇 AGORA FORA DA FUNÇÃO
window.onload = function () {
    carregarPerfil();
}