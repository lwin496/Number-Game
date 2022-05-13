const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3= document.getElementById("option3");
const scoreval = document.getElementById("scoreboard"); 


var answer = 0; 
var score = 0; 

let equationmaker = () =>{ 
      let num1 = Math.floor(Math.random() * 51);
      let num2 = Math.floor(Math.random() * 51);
      let fakeAnswer1 = Math.floor(Math.random() * 51);
      let fakeAnswer2 = Math.floor(Math.random() * 51); 
      let allAnswers = [];
      let switchAnswers = [];

      answer = num1 - num2; 

      document.getElementById("num1").innerHTML = num1;
      document.getElementById("num2").innerHTML = num2;

      allAnswers =  [answer, fakeAnswer1, fakeAnswer2];
      // FUTURE LOUIS THIS LOOP PUSHES ANSWERS RANDOMLY DONT FORGOR
      for(i = allAnswers.length; i--;){ 
            switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i + 1)), 1) [0])
      }

      option1.innerHTML = switchAnswers[0];
      option2.innerHTML =  switchAnswers[1];
      option3.innerHTML =  switchAnswers[2];
      
     
     
}



option1.addEventListener("click", function(){
      if(option1.innerHTML == answer){ 
            equationmaker(); 
            score++
            
           
      }else{ 
            score = 0
      }
      console.log(score)
      scoreval.innerHTML = 'Score: ' + score;
})
option2.addEventListener("click", function(){
      if(option2.innerHTML == answer){ 
            equationmaker(); 
            score++
            
      }else{ 
            score = 0
      }
      console.log(score)
      scoreval.innerHTML = 'Score: ' + score;
})
option3.addEventListener("click", function(){
      if(option3.innerHTML == answer){ 
            equationmaker();
            score++ 
            
      }else{ 
            score = 0
      }
      console.log(score)

      scoreval.innerHTML = 'Score: ' + score;
})


equationmaker()