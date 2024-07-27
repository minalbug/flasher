function checkLimit() {
  const amount = document.getElementById('amount').value;
  if (amount > 50000) {
    document.getElementById('popup').style.display = 'block';
  }
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}