let s1 = 'Jean';
let s2 = s1;
s2 = 'Eric';
console.log(s1); // Jean

let o1 = { p: 'Jean' };
let o2 = o1;
o2.p = 'Eric';
console.log(o1.p); // Eric

let c1 = { p: 'Jean' };
let c2 = {...c1}; // ES9 (ES2018)
// let c2 = Object.assign({}, c1); // ES6
// ES3 :
// let c2 = {};
// for (const key in c1) {
//   c2[key] = c2[key];
// }
c2.p = 'Eric';
console.log(c1.p); // Jean

