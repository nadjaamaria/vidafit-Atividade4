// Teste de funcionamento
console.log("FitLife carregado com sucesso!");

document.addEventListener("DOMContentLoaded", function() {
  // =========================
  // MENU HAMBÚRGUER MOBILE
  // =========================
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function() {
      navLinks.classList.toggle("active");
      // alterna o aria-expanded para acessibilidade
      const expanded = this.getAttribute("aria-expanded") === "true" || false;
      this.setAttribute("aria-expanded", !expanded);
    });
  }

  // =========================
  // FORMULÁRIO DE CADASTRO
  // =========================
  const form = document.getElementById("formCadastro");
  const mensagem = document.getElementById("mensagem");

  if (form && mensagem) {
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // impede envio real
      mensagem.style.display = "block"; // exibe a mensagem
      form.reset(); // limpa o formulário
      // opcional: esconder a mensagem depois de alguns segundos
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 5000);
    });
  }
});