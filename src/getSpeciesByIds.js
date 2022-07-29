const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const newSpecie = species.filter((elemento) => ids.includes(elemento.id));

  return newSpecie;
}

console.log(species[1].id);
module.exports = getSpeciesByIds;

/* function getSpeciesByIds(...ids) {
  const newSpecie = species.filter((elemento) => {
    if (ids.includes(elemento.id)) {
      return elemento;
    }
    faltou um retorno aqui, logo refatorei em cima <----;
    });
  return newSpecie;   } */
