// =============================
// TOGGLE TEMA (CLARO / ESCURO)
// =============================

// Botão que alterna o tema
const botaoTema = document.getElementById("toggleTema");

// Evento de clique no botão de tema
botaoTema.addEventListener("click", () => {

  // Alterna a classe "dark" no body
  document.body.classList.toggle("dark");

  // Salva preferência no localStorage (memória do navegador)
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("tema", "dark");
  } else {
    localStorage.setItem("tema", "light");
  }
});

//
// Mantém o tema salvo ao recarregar a página
//
window.addEventListener("load", () => {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
  }
});


// =========================
// VALIDAÇÃO DO FORMULÁRIO
// =========================

const form = document.getElementById("formContato");

// Só executa se o formulário existir na página
if (form) {

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // impede envio automático

    // =========================
    // CAPTURA DOS CAMPOS
    // =========================
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const mensagem = document.getElementById("mensagem");

    // elementos de erro
    const erroNome = document.getElementById("erroNome");
    const erroEmail = document.getElementById("erroEmail");
    const erroMensagem = document.getElementById("erroMensagem");

    let valido = true;

    // =========================
    // VALIDA NOME
    // =========================
    
    if (nome.value.trim() === "") {
      erroNome.textContent = "Digite seu nome";
      nome.classList.add("input-erro");
      nome.classList.remove("input-sucesso");
      valido = false;
    } else {
      erroNome.textContent = "";
      nome.classList.remove("input-erro");
      nome.classList.add("input-sucesso");
    }

    
    // =========================
    // VALIDA EMAIL
    // =========================
   
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.value.trim() === "") {
      erroEmail.textContent = "Digite seu e-mail";
      email.classList.add("input-erro");
      email.classList.remove("input-sucesso");
      valido = false;

    } else if (!regexEmail.test(email.value)) {
      erroEmail.textContent = "E-mail inválido";
      email.classList.add("input-erro");
      email.classList.remove("input-sucesso");
      valido = false;

    } else {
      erroEmail.textContent = "";
      email.classList.remove("input-erro");
      email.classList.add("input-sucesso");
    }

    
    // =========================
    // VALIDA MENSAGEM
    // =========================
    
    if (mensagem.value.trim().length < 5) {
      erroMensagem.textContent = "Mensagem deve ter pelo menos 5 caracteres";
      mensagem.classList.add("input-erro");
      mensagem.classList.remove("input-sucesso");
      valido = false;

    } else {
      erroMensagem.textContent = "";
      mensagem.classList.remove("input-erro");
      mensagem.classList.add("input-sucesso");
    }

    
    // =========================
    // SE TUDO ESTIVER OK
    // =========================
   
    if (valido) {
      alert("Mensagem enviada com sucesso!");

      // limpa formulário
      form.reset();

      // remove estilos de sucesso
      nome.classList.remove("input-sucesso");
      email.classList.remove("input-sucesso");
      mensagem.classList.remove("input-sucesso");
    }
  });
}


// =========================
// TOGGLE DE INFORMAÇÃO EXTRA
// ===========================

// pega elementos da página
const caixa = document.querySelector(".caixa");
const infoExtra = document.getElementById("infoExtra");

// só executa se os elementos existirem
if (caixa && infoExtra) {

  caixa.addEventListener("click", () => {
    infoExtra.classList.toggle("ativo");
  });

}
