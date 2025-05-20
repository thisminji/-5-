/* product detail page - JS */
console.log('연결');
document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.querySelector(".minus-btn");
  const plusBtn = document.querySelector(".plus-btn");
  const quantitySpan = document.getElementById("quantity");
  const totalPriceSpan = document.getElementById("total-price");
  const unitPrice = parseInt(document.getElementById("unit-price").dataset.unitPrice); // 숫자만 추출

  let quantity = 1;

  function updateDisplay() {
    quantitySpan.textContent = quantity;
    totalPriceSpan.textContent = (unitPrice * quantity).toLocaleString(); // 총 금액 포맷팅
  }

  plusBtn.addEventListener("click", function () {
    quantity += 1;
    updateDisplay();
  });

  minusBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity -= 1;
      updateDisplay();
    }
  });
});
