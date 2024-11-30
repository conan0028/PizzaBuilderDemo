import { PizzaBuilder } from "./PizzaBuilder";

// Classe que define o diretor responsável por controlar a construção de pizzas
export class PizzaDirector {
  private builder: PizzaBuilder; // Builder atual usado pelo diretor

  constructor(builder: PizzaBuilder) {
    this.builder = builder; // Inicializa o diretor com um Builder específico
  }

  // Permite alterar o Builder durante a execução
  definirBuilder(builder: PizzaBuilder): void {
    this.builder = builder;
  }

  // Sequência de passos para construir uma pizza Margherita
  criarMargherita(): void {
    this.builder
      .reiniciar()
      .definirTamanho("Grande")
      .definirMassa("Fina")
      .adicionarIngrediente("Queijo")
      .adicionarIngrediente("Tomate")
      .adicionarIngrediente("Manjericão");
  }

  // Sequência de passos para construir uma pizza Pepperoni
  criarPepperoni(): void {
    this.builder
      .reiniciar()
      .definirTamanho("Média")
      .definirMassa("Tradicional")
      .adicionarIngrediente("Queijo")
      .adicionarIngrediente("Pepperoni");
  }
}
