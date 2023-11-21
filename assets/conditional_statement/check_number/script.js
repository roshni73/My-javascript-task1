function checkNumber() {

    const userInput = document.getElementById('numberInput').value;

    
    const number = Number(userInput);

    if (number > 0) {
      document.getElementById('result').textContent = 'The number is positive.';
    } else if (number < 0) {
      document.getElementById('result').textContent = 'The number is negative.';
    } else {
      document.getElementById('result').textContent = 'The number is zero.';
    }
  }