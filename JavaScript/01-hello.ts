const noms = ['Jean', 'Pierre'];

function bonjour(name: string) {
  return `Hello ${name}`;
}

noms.forEach((nom) => {
  console.log(bonjour(nom));
});

// for (let i = 0; i < prenoms.length; i++) {
//   const prenom = prenoms[i];
//   console.log(hello(prenom));
// }
