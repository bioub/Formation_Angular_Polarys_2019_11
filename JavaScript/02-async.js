// setTimeout(() => {
//   console.log('A');
// }, 1000);
setTimeoutSync(() => {
  console.log('A');
}, 1000);

console.log('B');

function setTimeoutSync(callback, delayMs) {
  const debut = Date.now();
  while (debut + delayMs > Date.now()) {}
  callback();
}



// ^
// |
// |                                  log
// |setTimeout - log ↻ ...            =>
// +----------------------------------1000--------->
//               B                    A

// File d'attente (990ms) :
// File d'attente (1000ms) : =>
// File d'attente (1001ms) :

// Jake Archibald: In The Loop - JSConf.Asia
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
