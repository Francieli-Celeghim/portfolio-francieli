// Validação simples do formulário
document.getElementById("contatoForm").addEventListener("submit", function(e) {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Por favor, insira um email válido.");
    e.preventDefault();
  }
});

// Efeito jQuery: fadeIn do título
$(document).ready(function(){
  $("h1").hide().fadeIn(2000);
});

// Botão voltar ao topo
window.addEventListener("scroll", function() {
  const botao = document.getElementById("voltarTopo");
  if (window.scrollY > 200) {
    botao.style.display = "block";
  } else {
    botao.style.display = "none";
  }
});

function voltarTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
