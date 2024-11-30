// Classe que representa o produto final - a Pizza
export class Pizza {
  tamanho: string = ""; // Tamanho da pizza
  massa: string = ""; // Tipo de massa
  ingredientes: string[] = []; // Lista de ingredientes adicionais

  // Método que exibe os detalhes da pizza no console
  exibirDetalhes(): void {
    console.log(`Pizza:`);
    console.log(`- Tamanho: ${this.tamanho}`);
    console.log(`- Massa: ${this.massa}`);
    console.log(`- Ingredientes: ${this.ingredientes.join(", ")}`);
  }
}
