document.getElementById('btn').addEventListener('click', calc);
let card = document.querySelector('.card');
let result = document.createElement('p')
card.appendChild(result);

function calc(){
    let score = Math.random() * 100;
    score = Math.floor(score) + 1;
    
    if (score > 70){
        result.textContent = 'Your score is '+ score + '%. WOWOOOOOOW';
    } 

    if (score > 30 && score <= 70){
        result.textContent = 'Your score is '+ score + '%.';
    }

    if (score <= 30){
        result.textContent = `OH NO!!! Your score is only ${score}%.`;
    }
}