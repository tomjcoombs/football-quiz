const correctAnswers = ['B', 'B', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  let userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  userAnswers.forEach((currentAnswer, i) => {
    if (currentAnswer === correctAnswers[i]){
      score+= 25;
    }
  })

  scrollTo(0,0);
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
})