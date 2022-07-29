const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName) {
    return {};
  }
  const nomeSobrenome = employees.find(
    (elemento) =>
      employeeName === elemento.firstName || employeeName === elemento.lastName,
  );
  return nomeSobrenome;
}

module.exports = getEmployeeByName;
