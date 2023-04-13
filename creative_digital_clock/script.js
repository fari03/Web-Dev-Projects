function updateClock() {
  const clock = document.getElementById('clock');
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const pattern1 = document.querySelector('.pattern1');
  const pattern2 = document.querySelector('.pattern2');
  const pattern3 = document.querySelector('.pattern3');

  if (hours >= 0 && hours < 6) {
    clock.textContent = `${hours}:${minutes}:${seconds} Dawn`;
    pattern1.style.display = 'block';
    pattern2.style.display = 'none';
    pattern3.style.display = 'none';
  } else if (hours >= 6 && hours < 18) {
    clock.textContent = `${hours}:${minutes}:${seconds} Day`;
    pattern1.style.display = 'none';
    pattern2.style.display = 'block';
    pattern3.style.display = 'none';
  } else {
    clock.textContent = `${hours}:${minutes}:${seconds} Night`;
    pattern1.style.display = 'none';
    pattern2.style.display = 'none';
    pattern3.style.display = 'block';
  }
}

updateClock();
setInterval(updateClock, 1000);
