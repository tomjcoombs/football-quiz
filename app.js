const correctAnswers = ['B', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value];

  //more verbose approach
  // for (let i = 0; i < userAnswers.length; i++ ) {
  //   if (userAnswers[i] === correctAnswers[i]){
  //     score++;
  //   }
  //   else {
  //     continue;
  //   }
  // }

  userAnswers.forEach((currentAnswer, i) => {
    if (currentAnswer === correctAnswers[i]){
      score+= 25;
    }
  })

  scrollTo(0,0);
  //document.querySelector("#result").textContent = `${score}%`;
  result.classList.remove('d-none');

  let output = 0;

  const animateScore = setInterval(() => {

    result.querySelector("#result").textContent = `${output}%`;
    
    if (output === score){
      clearInterval(animateScore);
    } else {
      output++;
    }

  }, 10);




  // let i = 0;
  // const timer = setInterval(() => {
  //   console.log('hello');
  // }, 1000);
  
  

  

  

  //alert(`you scored ${score} points!`);
  console.log(score);
})