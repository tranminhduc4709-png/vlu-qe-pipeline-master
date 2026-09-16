const { login } = require("./auth.js");


test("Smoke Test - Đăng nhập đúng", () => {

    expect(login("admin", "123")).toBe(true);

});
