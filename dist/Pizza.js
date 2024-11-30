"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
// Classe que representa o produto final - a Pizza
class Pizza {
    constructor() {
        this.tamanho = ""; // Tamanho da pizza
        this.massa = ""; // Tipo de massa
        this.ingredientes = []; // Lista de ingredientes adicionais
    }
    // Método que exibe os detalhes da pizza no console
    exibirDetalhes() {
        console.log(`Pizza:`);
        console.log(`- Tamanho: ${this.tamanho}`);
        console.log(`- Massa: ${this.massa}`);
        console.log(`- Ingredientes: ${this.ingredientes.join(", ")}`);
    }
}
exports.Pizza = Pizza;
