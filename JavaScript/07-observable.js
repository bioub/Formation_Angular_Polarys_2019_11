// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       console.log('3s');
//     }, 1000);
//   }, 1000);
// }, 1000);

// function timeout(delayMs) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, delayMs);
//   });
// }

// timeout(1000)
//   .then(() => timeout(1000))
//   .then(() => timeout(1000))
//   .then(() => console.log('3s'))
const { Observable } = require('rxjs');
const { take } = require('rxjs/operators');

function interval(delayMs) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next();
    }, delayMs);
  });
}

// -----|
// -----|
// -----|

// -----|
// ----------|
// ---------------|

// -----x-----x-----x|


interval(1000)
  .pipe(
    take(3)
  )
  .subscribe({
    complete() {
      console.log('3s')
    }
  })
