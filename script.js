document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Fecha o menu mobile ao clicar em um link.
  document.querySelectorAll("#menu .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("menu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // Envia os dados do formulário para o WhatsApp.
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", event => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    const texto =
      `Olá, Agiliane! Meu nome é ${nome}.%0A` +
      `Telefone: ${telefone}%0A` +
      `Tenho interesse em: ${servico}.%0A` +
      `Mensagem: ${mensagem}`;

    // TROQUE pelo número real de WhatsApp, no formato internacional.
    const whatsapp = "5575992640235";
    window.open(`https://wa.me/${whatsapp}?text=${texto}`, "_blank", "noopener");
  });
});
