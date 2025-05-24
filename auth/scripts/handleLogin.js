const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("remember").checked;

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        showToast("Email hoặc mật khẩu không đúng!", "danger");
        return;
    }

    if (remember) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else {
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
    }

    showToast("Đăng nhập thành công!", "success");

    // này là reset lại form
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("remember").checked = false;

    // này là sau 2s quay về trang home
    setTimeout(() => {
        window.location.href = "../index.html";
    }, 1500);
});

function showToast(message, type = "success") {
    const toastBox = document.getElementById("toastBox");
    const toastMessage = document.getElementById("toastMessage");

    toastMessage.textContent = message;

    toastBox.classList.remove("bg-success", "bg-danger", "bg-warning");
    toastBox.classList.add(`bg-${type}`);

    const toast = new bootstrap.Toast(toastBox);
    toast.show();
}