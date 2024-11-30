"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PepperoniPizzaBuilder = exports.MargheritaPizzaBuilder = void 0;
const Pizza_1 = require("./Pizza");
// Builder concreto para construir uma Pizza Margherita
class MargheritaPizzaBuilder {
    constructor() {
        this.pizza = new Pizza_1.Pizza(); // Inicializa a pizza no estado padrão
    }
    reiniciar() {
        this.pizza = new Pizza_1.Pizza(); // Reseta para uma nova pizza
        return this;
    }
    definirTamanho(tamanho) {
        this.pizza.tamanho = tamanho;
        return this; // Permite encadeamento de métodos
    }
    definirMassa(massa) {
        this.pizza.massa = massa;
        return this;
    }
    adicionarIngrediente(ingrediente) {
        this.pizza.ingredientes.push(ingrediente);
        return this;
    }
    obterResultado() {
        return this.pizza; // Retorna a pizza construída
    }
}
exports.MargheritaPizzaBuilder = MargheritaPizzaBuilder;
// Builder concreto para construir uma Pizza Pepperoni
class PepperoniPizzaBuilder {
    constructor() {
        this.pizza = new Pizza_1.Pizza();
    }
    reiniciar() {
        this.pizza = new Pizza_1.Pizza();
        return this;
    }
    definirTamanho(tamanho) {
        this.pizza.tamanho = tamanho;
        return this;
    }
    definirMassa(massa) {
        this.pizza.massa = massa;
        return this;
    }
    adicionarIngrediente(ingrediente) {
        this.pizza.ingredientes.push(ingrediente);
        return this;
    }
    obterResultado() {
        return this.pizza;
    }
}
exports.PepperoniPizzaBuilder = PepperoniPizzaBuilder;
