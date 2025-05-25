const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const name = document.getElementById("name").value;

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(user => user.email === email);

    if (userExists) {
        showToast("Email đã tồn tại!", "danger");
        return;
    }

    if (password !== confirmPassword) {
        showToast("Mật khẩu không khớp!", "warning");
        return;
    }

    const newUser = {
        email,
        password,
        name,
        role: "user",
        registeredAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Đăng ký thành công!", "success");

    // này là reset lại form
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

    // này là sau 2s quay về trang login
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 2000); 
});