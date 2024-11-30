"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PizzaBuilder_1 = require("./PizzaBuilder");
const PizzaDirector_1 = require("./PizzaDirector");
// Inicializa o Builder para pizzas Margherita
const builderMargherita = new PizzaBuilder_1.MargheritaPizzaBuilder();
// Inicializa o Builder para pizzas Pepperoni
const builderPepperoni = new PizzaBuilder_1.PepperoniPizzaBuilder();
// Cria o diretor, que controlará os Builders
const diretor = new PizzaDirector_1.PizzaDirector(builderMargherita);
// Construção de uma Pizza Margherita usando o diretor
diretor.criarMargherita();
const pizzaMargherita = builderMargherita.obterResultado();
console.log("Pizza Margherita:");
pizzaMargherita.exibirDetalhes(); // Exibe os detalhes da pizza no console
// Construção de uma Pizza Pepperoni usando o diretor
diretor.definirBuilder(builderPepperoni); // Altera o Builder para Pepperoni
diretor.criarPepperoni();
const pizzaPepperoni = builderPepperoni.obterResultado();
console.log("\nPizza Pepperoni:");
pizzaPepperoni.exibirDetalhes(); // Exibe os detalhes da pizza no console
// Construção de uma pizza personalizada sem o diretor
const builderPersonalizada = new PizzaBuilder_1.MargheritaPizzaBuilder(); // Inicializa um novo Builder
const pizzaPersonalizada = builderPersonalizada
    .reiniciar()
    .definirTamanho("Pequena") // Configurações personalizadas
    .definirMassa("Recheada")
    .adicionarIngrediente("Queijo")
    .adicionarIngrediente("Frango")
    .adicionarIngrediente("Cebola")
    .obterResultado();
console.log("\nPizza Personalizada:");
pizzaPersonalizada.exibirDetalhes(); // Exibe os detalhes da pizza personalizada no console
