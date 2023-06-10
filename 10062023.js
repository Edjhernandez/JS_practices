const interval = setInterval(() => {
  console.log(new Date().toLocaleTimeString());
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);