class Produto {
    name: string;
    price: number;
    tax: number;

    constructor(name: string, price: number, tax: number) {
        this.name = name;
        this.price = price;
        this.tax = tax;
    }

    calcularPrecoFinal(): number {
        return this.price * (1 + this.tax / 100);
    }

    formatarPrecoFinal(): string {
        return `R$ ${this.calcularPrecoFinal().toFixed(2)}`;
    }

    exibirProduto(): string {
        return `${this.name} - R$ ${this.price.toFixed(2)} | Imposto: ${this.tax}% | Preço Final: ${this.formatarPrecoFinal()}`;
    }
}

const form = document.getElementById('product-form') as HTMLFormElement;
const productNameInput = document.getElementById('product-name') as HTMLInputElement;
const productPriceInput = document.getElementById('product-price') as HTMLInputElement;
const productTaxInput = document.getElementById('product-tax') as HTMLInputElement;
const productList = document.getElementById('product-list') as HTMLUListElement;
const finalPriceSpan = document.getElementById('final-price') as HTMLSpanElement;

const products: Produto[] = [];

function addProduct(product: Produto) {
    const li = document.createElement('li');
    li.textContent = product.exibirProduto();
    productList.appendChild(li);
    products.push(product);
    updateFinalPrice();
}

function updateFinalPrice() {
    let total = 0;
    products.forEach(product => {
        total += product.calcularPrecoFinal();
    });
    finalPriceSpan.textContent = total.toFixed(2);
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const productName = productNameInput.value.trim();
    const productPrice = parseFloat(productPriceInput.value);
    const productTax = parseFloat(productTaxInput.value);

    if (productName && !isNaN(productPrice) && !isNaN(productTax) && productPrice > 0 && productTax >= 0) {
        const newProduct = new Produto(productName, productPrice, productTax);
        addProduct(newProduct);
        
        productNameInput.value = '';
        productPriceInput.value = '';
        productTaxInput.value = '';
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});