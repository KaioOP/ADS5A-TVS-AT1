
// Função que recebe Nome e RA, e exibe uma mensagem com esses dados
function dadosEstudante(nome, RA) {
  if (!Nome || !RA) {
    throw new Error("Nome e RA são obrigatórios.");
  }

  console.log(`Dados recebidos - Nome: ${Nome}, RA: ${RA}`);
  return `Dados recebidos - Nome: ${Nome}, RA: ${RA}`; // Retorna uma string com os dados recebidos
}

module.exports = dadosEstudante;
''