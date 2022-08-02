const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const resultado = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrada) => {
    if (entrada.age < 18) {
      resultado.child += 1;
    }
    if (entrada.age >= 18 && entrada.age < 50) {
      resultado.adult += 1;
    }
    if (entrada.age >= 50) {
      resultado.senior += 1;
    }
  });
  return resultado;
}

//   const criancas = entrants.reduce((acc, actualElement) => {
//     if (actualElement.age < 18) {
//       acc[entrants.age] = entrants.child;
//     }
//     return criancas;
//   }, {});
//   const adultos = entrants.reduce((acc, actualElement) => {
//     if (actualElement.age >= 18 && actualElement.age < 50) {
//       acc[entrants.age] = entrants.adults;
//     }
//     return adultos;
//   }, {});
//   const senior = entrants.reduce((acc, actualElement) => {
//     if (actualElement.age >= 50) {
//       acc[entrants.age] = entrants.senior;
//     }
//     return senior;
//   }, {});
// }

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const p = countEntrants(entrants);
  return (p.child * prices.child) + (p.adult * prices.adult) + (p.senior * prices.senior);
}
module.exports = { calculateEntry, countEntrants };
