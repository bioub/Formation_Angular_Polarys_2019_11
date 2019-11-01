var prenoms = ['Jean', 'Pierre'];

function hello(name) {
  return 'Hello ' + name;
}

prenoms.forEach(function (prenom) {
  console.log(hello(prenom));
});

// for (let i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];
//   console.log(hello(prenom));
// }
