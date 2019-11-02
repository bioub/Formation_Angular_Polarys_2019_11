// Basés sur des classes (modèle statique) :
// Java, Python, PHP, C#, C++

// Basés sur des prototypes (modèle dynamique) :
// JavaScript

console.log('Math.sum', Math.sum); // undefined

// (Mauvaise pratique d'étendre les objets qu'on a pas déclaré, language, api web, lib externe)
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

delete Math.sum;
console.log('Math.sum', Math.sum); // undefined

// L'objet JS est un dictionnaire :
// système clé/valeur

// Object literal
// Soit l'objet n'est créé qu'une fois
const MyMath = {
  sum: (a, b) => a + b,
};

// Soit l'objet est créé plusieurs fois, mais il faut éviter d'y mettre
// des fonctions
const coords1 = {
  x: 1,
  y: 2,
  // sumXY() { return this.x + this.y; }
};

const coords2 = {
  x: 1,
  y: 2,
  // sumXY() { return this.x + this.y; }
};

console.log('coords1.x', coords1.x); // 1
console.log('coords1.y', coords1.y); // 2

console.log('coords1.z', coords1.z); // undefined
coords1.z = 3;
console.log('coords1.z', coords1.z); // 3

for (const key in coords1) {
  const value = coords1[key];
  console.log('key', key);
  console.log('value', value);
}

// Pour accéder au contenu d'un objet :
console.log('coords1.z', coords1.z); // 3
console.log('coords1[\'z\']', coords1['z']); // 3


// constructor function
// function Coords(x, y) {
//   // pseudo variable (créée au moment de l'appel)
//   this.x = x;
//   this.y = y;
// }
// Coords.prototype.sumXY = function() { return this.x + this.y; }

class Coords {
  
  constructor(x, y) {
    // pseudo variable (créée au moment de l'appel)
    this.x = x;
    this.y = y;
  }
  sumXY() { return this.x + this.y; }
}

console.log('typeof Coords', typeof Coords); // function

const coordsA = new Coords(1, 2);
const coordsB = new Coords(3, 4);
console.log('coordsA.x', coordsA.x); // 1
console.log('coordsA.sumXY()', coordsA.sumXY()); // 3
console.log('coordsB.sumXY()', coordsB.sumXY()); // 7

