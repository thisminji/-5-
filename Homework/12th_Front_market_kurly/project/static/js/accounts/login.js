document.addEventListener("DOMContentLoaded", () => {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const loginButton = document.querySelector(".login-button");

  function updateButtonState() {
    const isFilled =
      usernameInput.value.trim() !== "" &&
      passwordInput.value.trim() !== "";

    if (isFilled) {
      loginButton.classList.add("active");
      loginButton.disabled = false;
    } else {
      loginButton.classList.remove("active");
      loginButton.disabled = true;
    }
  }

  usernameInput.addEventListener("input", updateButtonState);
  passwordInput.addEventListener("input", updateButtonState);

  updateButtonState(); // 초기 상태에서도 체크
});
