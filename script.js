let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const verde = document.querySelector('.verde');
const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const azul = document.querySelector('.azul');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.lenght] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

