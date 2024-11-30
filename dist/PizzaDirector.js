"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PizzaDirector = void 0;
// Classe que define o diretor responsável por controlar a construção de pizzas
class PizzaDirector {
    constructor(builder) {
        this.builder = builder; // Inicializa o diretor com um Builder específico
    }
    // Permite alterar o Builder durante a execução
    definirBuilder(builder) {
        this.builder = builder;
    }
    // Sequência de passos para construir uma pizza Margherita
    criarMargherita() {
        this.builder
            .reiniciar()
            .definirTamanho("Grande")
            .definirMassa("Fina")
            .adicionarIngrediente("Queijo")
            .adicionarIngrediente("Tomate")
            .adicionarIngrediente("Manjericão");
    }
    // Sequência de passos para construir uma pizza Pepperoni
    criarPepperoni() {
        this.builder
            .reiniciar()
            .definirTamanho("Média")
            .definirMassa("Tradicional")
            .adicionarIngrediente("Queijo")
            .adicionarIngrediente("Pepperoni");
    }
}
exports.PizzaDirector = PizzaDirector;
