import { Pizza } from "./Pizza";

// Interface que define os passos para construir uma Pizza
export interface PizzaBuilder {
  reiniciar(): this; // Reseta a construção da pizza para um novo estado
  definirTamanho(tamanho: string): this; // Define o tamanho da pizza
  definirMassa(massa: string): this; // Define o tipo de massa
  adicionarIngrediente(ingrediente: string): this; // Adiciona um ingrediente à pizza
  obterResultado(): Pizza; // Retorna a pizza construída
}

// Builder concreto para construir uma Pizza Margherita
export class MargheritaPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza; // A instância de Pizza sendo construída

  constructor() {
    this.pizza = new Pizza(); // Inicializa a pizza no estado padrão
  }

  reiniciar(): this {
    this.pizza = new Pizza(); // Reseta para uma nova pizza
    return this;
  }

  definirTamanho(tamanho: string): this {
    this.pizza.tamanho = tamanho;
    return this; // Permite encadeamento de métodos
  }

  definirMassa(massa: string): this {
    this.pizza.massa = massa;
    return this;
  }

  adicionarIngrediente(ingrediente: string): this {
    this.pizza.ingredientes.push(ingrediente);
    return this;
  }

  obterResultado(): Pizza {
    return this.pizza; // Retorna a pizza construída
  }
}

// Builder concreto para construir uma Pizza Pepperoni
export class PepperoniPizzaBuilder implements PizzaBuilder {
  private pizza: Pizza;

  constructor() {
    this.pizza = new Pizza();
  }

  reiniciar(): this {
    this.pizza = new Pizza();
    return this;
  }

  definirTamanho(tamanho: string): this {
    this.pizza.tamanho = tamanho;
    return this;
  }

  definirMassa(massa: string): this {
    this.pizza.massa = massa;
    return this;
  }

  adicionarIngrediente(ingrediente: string): this {
    this.pizza.ingredientes.push(ingrediente);
    return this;
  }

  obterResultado(): Pizza {
    return this.pizza;
  }
}
