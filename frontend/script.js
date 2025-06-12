// Находим кнопку по ID
const lol_button = document.getElementById('lol_button');
const back_button = document.getElementById('back_button');

// Функция, которая будет выполняться при нажатии
function Lol() {
    console.log("LOL")
    window.location.href = './hotel.html';
}

function Back(){
    console.log("Go back")
    window.location.href = './index.html';
}
// Привязываем обработчик события к кнопке
lol_button.addEventListener('click', Lol);
back_button.addEventListener('click', Back);
