function nextPage () {
  onclick = function () {
  this.location.href = "capture.html";
}
}

window.addEventListener('load', async () => {
  if('serviceWorker' in navigator){
      try {
          await navigator.serviceWorker.register('service-worker.js');
      } catch(err) {
          console.error('Whooopsie!', err)
      }
  }
});