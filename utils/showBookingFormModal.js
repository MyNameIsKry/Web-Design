document.addEventListener('DOMContentLoaded', function () {
const roomNameInput = document.getElementById('roomName');

document.querySelectorAll('.book-btn').forEach(button => {
    button.addEventListener('click', function () {
    const card = this.closest('.card');
    if (card) {
        const roomTitle = card.querySelector('.card-title')?.innerText || 'Không rõ tên phòng';
        roomNameInput.value = roomTitle;
        roomNameInput.disabled = true;
    }
    });
});
});