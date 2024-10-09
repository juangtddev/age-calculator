const dateInput = document.getElementById("date")
const btn = document.getElementById("btn")
const result = document.getElementById("result")

dateInput.max = new Date().toISOString().split("T")[0]

btn.addEventListener("click", calculateAge)

function calculateAge() {
    const dateOfBirth = new Date(dateInput.value);

    const birthDay = dateOfBirth.getDate();
    const birthMonth = dateOfBirth.getMonth() + 1;
    const birthYear = dateOfBirth.getFullYear();

    const today = new Date();

    const todayDay = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();

    let yearAge = todayYear - birthYear;
    let monthAge = todayMonth - birthMonth;
    if (todayMonth < birthMonth) {
        yearAge--;
        monthAge = monthAge + 12;
    }

    let dayAge = todayDay - birthDay - 1
    if (dayAge < 0) {
        monthAge--;
        dayAge = dayAge + getDaysInMonth(birthYear, birthMonth)
    }

    if (monthAge < 0) {
        monthAge += 12;
        yearAge--;
    }

    result.innerHTML = `You are <span> ${yearAge} </span> years, <span> ${monthAge} </span> months and <span> ${dayAge} </span> days old.`
}

function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}