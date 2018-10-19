import template from './cardMenu.html';

let cardMenuComponent = {
  bindings: {
    nome: '<',
    ingrediente: '<',
    preco: '<'
  },
  template,
}

export default cardMenuComponent;