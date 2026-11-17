// 1 - Capturando os elementos do DOM
const button = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// 2 - Configurando evento de clique ao botão
button.addEventListener("click", () => {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
})