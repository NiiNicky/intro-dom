const modal = document.querySelector('#modal-inscricao');
const modalFechar = document.querySelector('.modal-fechar');

window.addEventListener("load", () => {
  setTimeout(() => {
    modal.showModal();
  }, 5000)
})

modalFechar.addEventListener('click', () => {
  modal.close();
})

modal.addEventListener('click', (event) => {
  setTimeout(() => {
    if (event.target === modal) {
      modal.close();
    }
  }, 1000)
});