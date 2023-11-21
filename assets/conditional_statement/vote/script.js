function checkEligibility() {
    const age = document.getElementById('ageInput').value;

    if (age >= 18) {
      document.getElementById('result').textContent = 'You are eligible to vote!';
    } else {
      document.getElementById('result').textContent = 'You are not eligible to vote yet.';
    }
  }