/* main page - JS */
console.log("✅ main_page.js 연결됨!");

document.addEventListener("DOMContentLoaded", () => {
  const resetButton = document.querySelector(".reset-box");
  const checkboxes = document.querySelectorAll(".filter-check");
  const selectedBox = document.getElementById("selectedCategoryBox");

  // ✅ 초기화 버튼 누르면 모든 체크 해제 + 태그 제거 + 총 개수 복구
  resetButton.addEventListener("click", () => {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    selectedBox.innerHTML = "";
    selectedBox.classList.add("hidden");

    updateTotalCount(); // 총 개수 초기화
  });

  // ✅ 체크박스 체크/해제 감지
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const category = checkbox.getAttribute("data-category");

      if (checkbox.checked) {
        if (!document.querySelector(`[data-selected="${category}"]`)) {
          const tag = document.createElement("span");
          tag.className = "selected-tag";
          tag.setAttribute("data-selected", category);
          tag.innerHTML = `
            ${category}
            <button class="remove-btn">✕</button>
          `;
          selectedBox.appendChild(tag);
          selectedBox.classList.remove("hidden");
        }
      } else {
        const toRemove = document.querySelector(`[data-selected="${category}"]`);
        if (toRemove) toRemove.remove();
      }

      if (selectedBox.children.length === 0) {
        selectedBox.classList.add("hidden");
      }

      updateTotalCount(); // ✅ 체크 변경 시 총 개수 갱신
    });
  });

  // ✅ ❌버튼 클릭 시 태그 제거 + 체크 해제 + 총 개수 갱신
  selectedBox.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const tag = e.target.closest(".selected-tag");
      const category = tag.getAttribute("data-selected");
      const relatedCheckbox = document.querySelector(`.filter-check[data-category="${category}"]`);

      if (relatedCheckbox) {
        relatedCheckbox.checked = false;
      }

      tag.remove();

      if (selectedBox.children.length === 0) {
        selectedBox.classList.add("hidden");
      }

      updateTotalCount(); // ❌ 누를 때도 총 개수 갱신
    }
  });
});

// ✅ 선택된 카테고리들의 data-count 합산해서 총 개수 표시
function updateTotalCount() {
  const selectedCheckboxes = document.querySelectorAll(".filter-check:checked");
  let total = 0;

  selectedCheckboxes.forEach((checkbox) => {
    const count = parseInt(checkbox.getAttribute("data-count"), 10);
    if (!isNaN(count)) {
      total += count;
    }
  });

  const countSpan = document.getElementById("total-count");
  countSpan.textContent = total > 0 ? total : "508"; // ← 기본값은 전체 상품 수
}
