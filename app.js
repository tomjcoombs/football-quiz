const correctAnswers = ['B', 'B', 'A'];
const form = document.querySelector('.quiz-form');

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
      score++;
    }
  })

  alert(`you scored ${score} points!`);
  console.log(score);
})