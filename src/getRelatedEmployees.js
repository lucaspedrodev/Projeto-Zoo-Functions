const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const findId = employees
    .find((elemento) => elemento.id === id)
    .managers.every(
      (element) =>
        element.includes('9e7d4524-363c-416a-8759-8aa7e50c0992')
        || element === [],
    );
  return findId;
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// A função isManager será responsável por verificar se uma pessoa colaboradora é gerente:

// Deve retornar true se o id passado for de uma pessoa gerente;
// Deve retornar false se o id passado não for de uma pessoa gerente.

// Implemente a função getRelatedEmployees para verificar se uma pessoa colaboradora
// é gerente e quais pessoas ela lidera.

// Considerando a boa prática de dividir o código em partes menores, o arquivo terá duas funções:

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return employees
      .filter((elemento) => elemento.managers.includes(managerId))
      .map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

// tenho que jogar o ID das pessoas gerentes e retornar o nome e sobrenome
// das pessoas que sõ geridas por ela
module.exports = { isManager, getRelatedEmployees };
