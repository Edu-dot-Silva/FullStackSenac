const TAXA_ENTREGA = 5.5;
 
// Membro privado: só pode ser usado dentro deste módulo.
function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}
 
function calcularTotal(subtotal) {
  return formatarMoeda(subtotal + TAXA_ENTREGA);
}
 
function validarPedido(itens) {
  return Array.isArray(itens) && itens.length > 0;
}
 
// Exporta vários membros do módulo, mas não expõe formatarMoeda.
module.exports = {
  TAXA_ENTREGA,
  calcularTotal,
  validarPedido,
};