function showToast(message, type = "success") {
    const toastBox = document.getElementById("toastBox");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toastBox.classList.remove("bg-success", "bg-danger", "bg-warning");
    toastBox.classList.add(`bg-${type}`);

    const toast = new bootstrap.Toast(toastBox);
    toast.show();
}