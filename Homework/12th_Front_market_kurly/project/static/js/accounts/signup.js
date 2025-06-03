/* signup page - JS */

console.log("연결성공");
document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const passwordConfirmInput = document.getElementById('passwordConfirm');
  const signupButton = document.querySelector('.form-submit');
  const signupButtonText = document.querySelector('.signup-button');

  function isValidPassword(password) {
    // 비밀번호: 8자 이상 + 영문대소문자 + 숫자 + 특수문자(@!?\-_)
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!?_\-])[A-Za-z\d@!?_\-]{8,}$/;
    return regex.test(password);
  }

  function isPasswordConfirmed() {
    return passwordInput.value === passwordConfirmInput.value;
  }

  function isFormValid() {
    return (
      usernameInput.value.trim() !== '' &&
      isValidPassword(passwordInput.value) &&
      isPasswordConfirmed()
    );
  }

  function updateButtonState() {
    if (isFormValid()) {
      signupButton.style.background = '#5E0080';
      signupButtonText.style.color = '#fff';
      signupButton.style.cursor = 'pointer';
    } else {
      signupButton.style.background = '#E2E2E2';
      signupButtonText.style.color = '#999';
      signupButton.style.cursor = 'default';
    }
  }

  // 입력값 변화 감지하여 실시간 검사
  usernameInput.addEventListener('input', updateButtonState);
  passwordInput.addEventListener('input', updateButtonState);
  passwordConfirmInput.addEventListener('input', updateButtonState);
});
