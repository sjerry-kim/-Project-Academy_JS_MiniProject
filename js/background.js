// 2022.09.30.(금)
// 배경을 랜덤으로 바꾸기
// 랜덤 함수의 특징 - 0~1사이의 실수 > 0~원하는 숫자까지의 정수
// 이미지에 숫자를 붙여줘서... 0~2사이의 랜덤한 수를 나오게 함수 작성
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능
// 1) 배경이미지 이름을 배열에 저장
const images = ["back0.jpg","back1.jpg","back2.jpg"]
// 2) 랜덤숫자를 가져오기
const randomNum = Math.floor(Math.random()*images.length) // 원하는 정수를 랜덤으로 출력함
const chooseImage = images[randomNum];

// 바디 객체를 가져옴
const bodyBackground = document.querySelector("body");

// 바디에 이미지 추가
// css에서 이미지 추가하는 방식과 동일
bodyBackground.style.background = `url(./img/${chooseImage})`