function changeBackgroundColor() {
  const colorContainer = document.getElementById('colorContainer');
  colorContainer.style.backgroundColor = 'orange'; 
}

document.getElementById('colorButton').addEventListener('click', changeBackgroundColor);
