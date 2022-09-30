// 입력폼 가져오기 - form의 submit 이벤트를 사용하기 위해 
const loginForm = document.querySelector("#login-form");

// name 값을 가져오기 위한 input
const loginInput = document.querySelector("#login-form #name");

// name값을 가질 h1태그를 가져오기
const title = document.querySelector("#title");

// 이벤트 리스너 연결
// form에서 submit을 사용할 경우 click 이벤트가 아니라
// form의 "submit" 이라는 이벤트로 연결해주어야 한다 (!buttom과의 차이점!).
loginForm.addEventListener("submit",onLoginSubmit)

function onLoginSubmit(e){
    e.preventDefault(); // 새로고침 저지 ❤ 콘솔에서 확인 했을 때 잠깐 출력되고 바로 사라졌었음

    // if문을 사용해서, name값이 없을 때, 아래 내용이 실행되지 않게 해줌
    // 함수에서 return을 사용하면 함수가 종료됨
    if(loginInput.value === ""){
        // alert("닉네임을 입력하세요"); // 이름을 입력할 수 있게 안내 -> html에서는 required로 동일한 동작 가능
        return loginForm;
    }else{
    // LoginInput의 value값을 가져옴
    const name = loginInput.value;

    // value값을 title에 넣어줌
    // console.log(name); // 깂이 제대로 들어갔는지 확인용
    title.innerHTML = "Welcome " + name + "!";

    // loginFrom, hidden 클래스 추가 😡😡😡
    loginForm.classList.add("hidden");
 
    // todo-form을 가져와서 hidden 클래스 제거 😡😡😡
    document.querySelector("#todo-form").classList.remove("hidden");
    }
}