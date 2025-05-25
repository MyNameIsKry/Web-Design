const loginForm = document.getElementById("loginForm");

const adminAccount = {
    email: "admin@gmail.com",
    password: "admin123",
};

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

    if (user.email === adminAccount.email && user.password === adminAccount.password) {
        user.role = "admin";
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