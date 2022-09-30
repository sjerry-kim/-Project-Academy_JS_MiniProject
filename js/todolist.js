// todo 입력 공간
const todoInput = document.querySelector("#todo-form #todo");

// todo button : click 이벤트 실행
// button에 아이디를 주지 않있기 때문에 노드로 접근하거나,
// qureySelector를 이용해서 선택자로 접근하여 객체를 가져오기
const todoButton = todoInput.nextElementSibling;
todoButton.addEventListener("click",addTodo)

// todo-board 객체 가져오기
const todoBoard = document.querySelector("#todo-board")

function addTodo(){
    // console.log("확인") // 정상 출력 확인
    // todoInput의 value값을 가져오기
    const text = todoInput.value;

    // 새로운 요소를 생성
    // li, input type=checkBox, textNode, button
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox"; // type 속성 추가
    const textNode = document.createTextNode(text);
    const button = document.createElement("button");

    // li요소 - input, textNode, button 추가
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    // todoBoard - li 추가
    todoBoard.appendChild(li);

    li.style.fontFamily = "Roboto";
    li.style.fontFamily = "Nanum Gothic"

    // todoInput.value 값을 빈값으로 만들기
    todoInput.value = "";

    // button의 'X' 문자열 추가
    button.textContent = "X";

    // 체크박스를 눌렀을 때 이벤트 리스너 실행 : click
    checkbox.addEventListener("click", todoCheck); // 함수를 안에서 작성해도 되지만, 바깥에 작성해도 된다

    // X버튼을 눌렀을 때 이벤트 리스너 실행 : click
    button.addEventListener("click", todoDelete);
}

// 체크박스 이벤트 리스너에 들어가는 함수
function todoCheck(e){
    const li = e.target.parentNode;
    if(e.target.checked){
        li.style.textDecorationLine = "line-through";
        li.style.fontStyle = "italic";
        li.style.color = "rgb(180,180,180)" // 여러 속성을 바꾸고 싶을 때는 css에 class를 추가해서 작성해도 됨
    }else{
        li.style.textDecorationLine = "none";
        li.style.fontStyle = "normal";
        li.style.color = "ivory";
    }
}

// X버튼 리스너에 들어갈 함수
function todoDelete(e){
    // li요소를 삭제
    const li = e.target.parentNode;
    li.remove();
}