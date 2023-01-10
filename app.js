//random number between 1, 2 or 3 as we are using 1 as rock, 2 as paper and 3 as scissor
const random = () => Math.floor(Math.random()*3) + 1;

//URLs for result images
const url = {
    'rock' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/325/rock_1faa8.png',
    'paper' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/htc/37/page-with-curl_1f4c3.png',
    'scissor' : 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/lg/307/scissors_2702-fe0f.png'
}

//show result lose or win( make the result div display visible by removing display: none;)
//and updating the score by changing the text of scoreboard
const showResult = decision =>{
    document.querySelector(`.${decision}`).style.display = ''; 
    document.querySelector(`.${decision}-score`).innerText = `${decision}: ${score[decision]}`;
    score[decision]++;
}
//hide result for the next round
const hideResult = () => document.querySelectorAll('.result').forEach(tag => tag.style.display = 'none');

//show image of computer's choice
const displayImage = selection => document.querySelector('.play').style = `background-image: url(${url[selection]});background-size: cover;`;

//check the result if its a win, draw or loss and update the score
function result(a,b){
    if(b==a+1||(a==3&&b==1)) showResult('loss');
    else if(a==b) showResult('draw');
    else showResult('win');
    displayImage(game[b-1]);
};

//map rock scissor and paper to index
const game = ['rock','paper','scissor'];

//object for keeping score
const score = {
    'win': 1,
    'loss': 1,
    'draw': 1
}

document.querySelectorAll('.signs>.cards').forEach(sign => {
    sign.onclick = () =>{
        hideResult();
        result(Number(sign.textContent),random());
    }
});
