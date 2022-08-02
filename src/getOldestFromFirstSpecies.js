const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const encontraPessoa = employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const encontraAnimal = species.find((animal) => encontraPessoa === animal.id);
  return Object.values(encontraAnimal.residents.sort((a, b) => b.age - a.age)[0]);
}
console.log(getOldestFromFirstSpecies('fdb2543b-5662-46a7-badc-93d960fdc0a8'));
module.exports = getOldestFromFirstSpecies;
