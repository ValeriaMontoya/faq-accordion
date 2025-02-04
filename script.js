const container = document.getElementById('faq__container');
const questions = container.querySelectorAll('.faq__question');
const answers = container.querySelectorAll('.faq__answer');
const icons = container.querySelectorAll('.faq__icon');

questions.forEach((question, i) => {
  questions[i].addEventListener('click', () => {
    answers[i].classList.toggle('visible');
    icons[i].classList.toggle('open');

    for (const answer of answers) {
      if (answer !== answers[i])
        answer.classList.remove('visible');
    }
    
    for (const icon of icons) {
      if (icon !== icons[i])
        icon.classList.remove('open');
    }
  });
});