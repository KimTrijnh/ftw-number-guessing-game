let input = document.getElementById('guess');
let startBtn = document.getElementById('start');
let submitBtn = document.getElementById('submit');
let wrongAlert = document.getElementById('wrongBox');
let rightAlert = document.getElementById('rightBox');
let history = document.getElementById('historyBox');
let randomNum;
let count = 0;
let remaining = 10;
let guessArray = [];

//initial setting, submit button is deactived at the beginning
submitBtn.disabled = true;



function startOrReset() {
    //reset All
    submitBtn.disabled = false;
    count = 0;
    remaining = 10;
    history.innerText = '';
    input.value = '';
    wrongAlert.style.display = "none";
    rightAlert.style.display = "none";
    //Generate random number
    randomNum = Math.round(Math.random() * 100) + 1;
    return randomNum;
}


function compareAndFeedback() {
    let guessNum;
    let feedback;
    guessNum = input.value;
    guessArray.push(guessNum);
    count++;
    remaining--;
   
    
    if(count < 10) {
        if (isNaN(guessNum) || guessNum <= 0 || guessNum === '') {
            feedback = `your guess should be a number from 1 to 100`;
            wrongAlert.style.display = "block";
            rightAlert.style.display = "none";
            wrongAlert.innerText = feedback;
        }
        else if (guessNum > randomNum) {
            feedback = `OPP, TOO HIGH`;
            rightAlert.style.display = "none";
            wrongAlert.style.display = "block";
            wrongAlert.innerText = feedback;
    
        } else if (guessNum < randomNum) {
            feedback = `OPP, TOO LOW`;
            rightAlert.style.display = "none";
            wrongAlert.style.display = "block";
            wrongAlert.innerText = feedback;
    
        } else if (guessNum == randomNum) {
            feedback = `WOW, YOU TAKE TOO LONG TO MAKE IT LOL`;
            wrongAlert.style.display = "none";
            rightAlert.style.display = "block";
            rightAlert.innerText = feedback;
            submitBtn.disabled = true;
        }
        
    } else if (count == 10) {
        //disable guess button to stop human from playing
        submitBtn.disabled = true;
    
        if (guessNum == randomNum) {
            feedback = `WOW, YOU TAKE TOO LONG TO MAKE IT LOL`;
            wrongAlert.style.display = "none";
            rightAlert.style.display = "block";
            rightAlert.innerText = feedback;
        } else {
            feedback = `GAME OVER!! 
                Human, we are laughing at your face
                Press Start to play again`;
            wrongAlert.style.display = "block";
            rightAlert.style.display = "none";
            wrongAlert.innerText = feedback;
            }
    }
    

//clear the inputbox 
input.value = '';  
//update history area by adding paragraph to div#history
let p = document.createElement('P');
p.innerText = `your guess ${count}: ${guessNum}. Remaining guesses ${remaining}`;
history.appendChild(p);
return feedback;
}



startBtn.addEventListener('click', startOrReset);
submitBtn.addEventListener('click', compareAndFeedback);


//function under progress of testing
function checkArr(a) {
    guessArray.find((x) => x === a);

}

