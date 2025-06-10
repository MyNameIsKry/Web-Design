const registerForm = document.getElementById("registerForm");

const validateName = (name) => {
    if (name.length < 10) {
        return 'Họ tên phải có ít nhất 10 ký tự';
    }
    return '';
};

const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Email không hợp lệ (ví dụ: example@domain.com)';
    }
    return '';
};

const validatePassword = (password) => {
    const minLength = 5;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    
    if (!hasUpperCase || !hasSpecialChar || password.length <= minLength) {
        return 'Mật khẩu phải chứa ít nhất 1 chữ hoa và 1 kí tự đặc biệt\nMật khẩu phải dài hơn 5 kí tự';
    }

    return '';
};

const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
        return 'Mật khẩu nhập lại không khớp';
    }
    return '';
};

registerForm.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const name = document.getElementById("name").value;

    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    const confirmPasswordError = validateConfirmPassword(password, confirmPassword);

    if (nameError) {
        showToast(nameError, "warning");
        return;
    }
    if (emailError) {
        showToast(emailError, "warning");
        return;
    }
    if (passwordError) {
        showToast(passwordError, "warning");
        return;
    }
    if (confirmPasswordError) {
        showToast(confirmPasswordError, "warning");
        return;
    }

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
    document.getElementById('name').value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";

    // này là sau 2s quay về trang login
    setTimeout(() => {
        window.location.href = "./login.html";
    }, 2000); 
});