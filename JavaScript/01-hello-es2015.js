const prenoms = ['Jean', 'Pierre'];

function hello(name) {
  return `Hello ${name}`;
}

prenoms.forEach((prenom) => {
  console.log(hello(123));
});

// for (let i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];
//   console.log(hello(prenom));
// }
