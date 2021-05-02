let count = 0; //initial count

const countVal = document.querySelector('.countval');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const list = e.currentTarget.classList;
    if (list.contains('decrease')) {
      count--;
    } else if (list.contains('reset')) {
      count = 0;
    } else if (list.contains('increase')) {
      count++;
    }

    if (count > 0) {
      countVal.style.color = 'green';
    } else if (count < 0) {
      countVal.style.color = 'red';
    } else if (count === 0) {
      countVal.style.color = 'black';
    }

    countVal.textContent = count;
  });
});
