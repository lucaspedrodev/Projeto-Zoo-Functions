const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function retornarDadosEspecie(listaEspecies) {
  const nomesEspecies = [];
  const locaisEspecies = [];
  listaEspecies.forEach((idEspecie) => {
    nomesEspecies.push(species.find((s) => s.id === idEspecie).name);
    locaisEspecies.push(species.find((s) => s.id === idEspecie).location);
  });
  return { nomes: nomesEspecies, locais: locaisEspecies };
}

function retornarDadosColaborador(colaborador) {
  const dadosEspecies = retornarDadosEspecie(colaborador.responsibleFor);
  return {
    id: colaborador.id,
    fullName: `${colaborador.firstName} ${colaborador.lastName}`,
    species: dadosEspecies.nomes,
    locations: dadosEspecies.locais,
  };
}

function getEmployeesCoverage(dados) {
  if (dados != null) {
    const colaborador = employees.find((e) => e.id === dados.id
      || e.firstName === dados.name || e.lastName === dados.name);
    if (colaborador == null) {
      throw new Error('Informações inválidas');
    }
    return retornarDadosColaborador(colaborador);
  }
  const list = [];
  employees.forEach((colaborador) => [
    list.push(retornarDadosColaborador(colaborador)),
  ]);
  return list;
}
module.exports = getEmployeesCoverage;
