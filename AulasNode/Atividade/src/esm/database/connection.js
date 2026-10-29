export const dbConfig = Object.freeze({
  host: "localhost",
  port: 5432,
});
 
export default async function conectarBanco() {
  console.log("Iniciando conexão simulada com o banco...");
 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Conexão simulada estabelecida com sucesso!");
    }, 1000);
  });
}