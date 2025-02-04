let counterTime = 70000;

function setTime() {
  if (counterTime == 0) return;
  let h = Math.floor(counterTime / 3600);
  let m = Math.floor((counterTime % 3600) / 60);
  let s = (counterTime % 3600) % 60;
  document.querySelector('#hours').innerHTML = h;
  document.querySelector('#minutes').innerHTML = m;
  document.querySelector('#seconds').innerHTML = s;
}

setInterval(() => {
  counterTime -= 1;
  setTime();
}, 1000);