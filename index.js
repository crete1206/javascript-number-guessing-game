const min = 0;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1));
//console.log(answer)

let guess;
let running = true;
let attempts = 0;



while(running){
    guess = window.prompt(`Guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess)){
     window.alert('please enter a valid number');
    }
    if(guess < min || guess > max){
        window.alert('please enter a valid number')
        break;
    }
    if(guess==answer){
        alert(`Your value is correct with ${attempts} total attempts`) 
        break;       
    }else if(guess>answer){
         window.alert('TOO HIGH, TRY AGAIN!');
         attempts++
       
    }else{
         window.alert('TOO LOW, TRY AGAIN!');
         attempts++
    }
   
}



// let city = 'lagos';
// let country = 'Ngeria';
// const geoLocation = city + ',' + ' ' + country;

// console.log(geoLocation)