// id가 clock인 문서객체를 들고옴
const clock = document.querySelector("#clock");


// setInterval 함수의 콜백함수로 넣어주기 위함
function getClock (){
    // 현재 시간을 가져오는 객체
    const date = new Date();

    // 00:00:00 포맷을 맞추기 위해 String의 padStart메소드 사용
    // 숫자형을 문자형으로 바꿀 때 앞으로 숫자로 연산할 일이 있는지 생각하고 바꾸는 게 좋다
    const hours = String(date.getHours()).padStart(2,"0"); // 총 두 자리의 문자열이어야 하고, 앞에서 부터 0을 채움
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");

    // return을 통해서 현재 시간을 내보내줌
    // 리턴해주면, 문자열로 내보내기 때문에 변수에 담아서 사용이 가능하다
    return `${hours}:${minutes}:${seconds}` 

}


// 함수를 통해 시간 문자열을 할당
clock.innerHTML = getClock();
// 인터벌 함수를 사용하여 1초마다 함수가 반복하도록 함
setInterval(()=>{clock.innerHTML = getClock();},1000);