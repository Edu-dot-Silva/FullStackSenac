import conectarBanco, { dbConfig } from "./database/connection.js";
 
async function iniciarAplicacao() {
  const { host, port } = dbConfig;
  console.log(`Configuração do banco: ${host}:${port}`);
 
  try {
    const status = await conectarBanco();
    console.log(status);
    console.log("Aplicação pronta.");
  } catch (error) {
    console.error("Erro ao iniciar a aplicação:", error);
    process.exitCode = 1;
  }
}

iniciarAplicacao();