if (document.getElementById('modalBtn')) {
    const startButton = document.getElementById('modalBtn');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeButton = document.getElementById('modalCloseBtn');
    
    startButton.addEventListener("click", function(event) {
        modal.classList.add('visible');
    }, false);
    
    closeButton.addEventListener("click", function (event) {
        modal.classList.remove('visible');
    }, false);

    modalContent.addEventListener("click", function (event) {
        event.stopPropagation();
    }, false);

    modal.addEventListener("click", function (event) {
        modal.classList.remove('visible');
    }, false);
}