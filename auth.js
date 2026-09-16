function login(username, password) {

    // Kiểm tra username và password rỗng
    if (username === "" || password === "") {
        return false;
    }

    // Tài khoản bị khóa
    if (username === "lockeduser") {
        return false;
    }

    // Tài khoản và mật khẩu đúng
    if (username === "admin" && password === "123") {
        return true;
    }

    // Các trường hợp còn lại
    return false;
}


if (typeof module !== "undefined") {
    module.exports = { login };
}
