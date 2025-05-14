const checkboxes = document.querySelectorAll("input[type='checkbox'][name='check_group']");
const foodDisplay = document.getElementById('food');
const genderDisplay = document.getElementById('gender');
const dayDisplay = document.getElementById('day');
const submitButton = document.querySelector('button');

foodDisplay.textContent = '좋아하는 음식: 제출 버튼을 눌러주세요.';
genderDisplay.textContent ='성별: 제출 버튼을 눌러주세요.';
dayDisplay.textContent = "요일: 제출 버튼을 눌러주세요."

checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", (e) => { //e로 이벤트를 감지
        if (e.target.checked) { //e.target은 이벤트가 발생한 객체 (체크 표시가 변하는 객체)
            console.log(`${e.target.value}가 선택됨`);
        } else {
            console.log(`${e.target.value}가 해제됨`);
        }
    });
});


submitButton.addEventListener('click',()=>{
  updateFoodDisplay();
  updateGenderDisplay();
  updateDayDisplay();
  alert('선택한 내용이 제출되었습니다!');
}
);

function updateFoodDisplay(){
  const selectedFood = document.querySelector("input[type='radio'][name='food']:checked");

  if(selectedFood){
    foodDisplay.textContent=`좋아하는 음식: ${selectedFood.value}`;
  } else {
    foodDisplay.textContent='좋아하는 음식: 선택 없음';
  }
}

function updateGenderDisplay(){
  const selectedGender = document.querySelector("input[type='radio'][name='gender']:checked");

  if(selectedGender){
    genderDisplay.textContent=`성별: ${selectedGender.value}`;
  } else {
    genderDisplay.textContent='성별: 선택 없음';
  }
}


function updateDayDisplay(){
  const selectedOption = select.options[select.selectedIndex];
  dayDisplay.textContent=`요일: ${selectedOption.text} (${selectedOption.value})`;
}

