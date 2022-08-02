// const { species } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const semParamento = species.reduce((acc, valorCorrente) => {
    acc[valorCorrente.name] = valorCorrente.residents.length;
    return acc;
  }, {});
  if (animal === undefined) {
    return semParamento;
  }
  if (animal.sex === undefined) {
    const pegaSpecie = species.find((elemento) => elemento.name === animal.specie);
    return pegaSpecie.residents.length;
  }
  const pegaSpecie = species.find((elemento) => elemento.name === animal.specie);
  const mascFem = pegaSpecie.residents.filter((elemento) => elemento.sex === animal.sex);
  return mascFem.length;
};

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
module.exports = countAnimals;
