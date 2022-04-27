const clock = document.querySelector("h2")

function getClock() {
    const date = new Date() // new date로 날짜 생성
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    // getHours 같이 시간을 가져오는 함수들은 number 형식이라 string으로 감싸 문자열로 바꿔준 후
    // padStart로 한자릿수 숫자를 두자리로 변경해 미관에 신경씀..
    // padStart(n, "0")
    // n - n자릿수가 아니라면
    // "0" - 앞에 0을 n만큼 채워줌

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock()
setInterval(getClock, 1000);