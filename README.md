# Projeto: PizzaBuilderDemo
## Disciplina: CMP1063 - Arquitetura e Desenho de Software
### Universidade: PUC Goiás

## Descrição
Este projeto acadêmico demonstra a aplicação do padrão de projeto **Builder** na criação de pizzas. O objetivo é criar um sistema que permita a construção de pizzas passo a passo, com receitas predefinidas e opções personalizáveis. 

A implementação segue os princípios discutidos na disciplina CMP1063, enfatizando a separação de responsabilidades e a reutilização de código.

---

## Estrutura do Projeto
- **Pizza**: Classe principal que representa o produto final.
- **PizzaBuilder**: Interface que define os passos para criar uma pizza.
- **Builders Concretos**: 
  - `MargheritaPizzaBuilder`: Implementa a receita de uma pizza Margherita.
  - `PepperoniPizzaBuilder`: Implementa a receita de uma pizza Pepperoni.
- **PizzaDirector**: Gerencia a construção de pizzas predefinidas usando os Builders.
- **index.ts**: Código principal que demonstra o uso do padrão Builder para criar diferentes pizzas.

---

### Funcionalidades
1. **Pizzas Predefinidas**:
   - **Margherita**: Grande, massa fina, ingredientes: Queijo, Tomate, Manjericão.
   - **Pepperoni**: Média, massa tradicional, ingredientes: Queijo, Pepperoni.
2. **Pizzas Personalizadas**:
   - O cliente pode definir o tamanho, tipo de massa e ingredientes adicionais.

---

### Requisitos
- Node.js instalado no sistema.
- TypeScript configurado para compilar e executar o projeto.

---

### Como Executar
1. Clone o repositório:
```bash
   git clone https://github.com/conan0028/PizzaBuilderDemo.git
   cd PizzaBuilderDemo
```
2. Instale dependências:
```bash
npm install
```
3. Compile o projeto:
```bash
tsc
```
4. Execute o arquivo principal: 
```bash
node dist/index.js
```
5. Acompanhe a saída no console para verificar as pizzas criadas.

**Exemplo de saÍda**:

```txt
Pizza Margherita:
- Tamanho: Grande
- Massa: Fina
- Ingredientes: Queijo, Tomate, Manjericão

Pizza Pepperoni:
- Tamanho: Média
- Massa: Tradicional
- Ingredientes: Queijo, Pepperoni

Pizza Personalizada:
- Tamanho: Pequena
- Massa: Recheada
- Ingredientes: Queijo, Frango, Cebola
```


