console.log("연결성공");

document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const password2Input = document.getElementById('password2');
  const signupButton = document.querySelector('.form-submit');
  const signupButtonText = document.querySelector('.signup-button');

  // ✅ 비밀번호 확인 에러 메시지 생성
  const password2Wrap = password2Input.parentElement;
  const passwordMismatchError = document.createElement('p');
  passwordMismatchError.className = 'password-error-message';
  passwordMismatchError.style.display = 'none';
  passwordMismatchError.textContent = '비밀번호가 일치하지 않습니다!';
  password2Wrap.appendChild(passwordMismatchError);

  function isValidPassword(password) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!?_\-])[A-Za-z\d@!?_\-]{8,}$/;
    return regex.test(password);
  }

  function isPasswordConfirmed() {
    return passwordInput.value === password2Input.value;
  }

  function isFormValid() {
    return (
      usernameInput.value.trim() !== '' &&
      isValidPassword(passwordInput.value) &&
      isPasswordConfirmed()
    );
  }

  function updatePasswordErrors() {
    if (password2Input.value && !isPasswordConfirmed()) {
      passwordMismatchError.style.display = 'block';
    } else {
      passwordMismatchError.style.display = 'none';
    }
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

  // ✅ 이벤트 등록
  usernameInput.addEventListener('input', updateButtonState);
  passwordInput.addEventListener('input', () => {
    updatePasswordErrors();
    updateButtonState();
  });
  password2Input.addEventListener('input', () => {
    updatePasswordErrors();
    updateButtonState();
  });
});
