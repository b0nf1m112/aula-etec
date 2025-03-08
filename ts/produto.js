var Produto = /** @class */ (function () {
    function Produto(name, price, tax) {
        this.name = name;
        this.price = price;
        this.tax = tax;
    }
    Produto.prototype.calcularPrecoFinal = function () {
        return this.price * (1 + this.tax / 100);
    };
    Produto.prototype.formatarPrecoFinal = function () {
        return "R$ ".concat(this.calcularPrecoFinal().toFixed(2));
    };
    Produto.prototype.exibirProduto = function () {
        return "".concat(this.name, " - R$ ").concat(this.price.toFixed(2), " | Imposto: ").concat(this.tax, "% | Pre\u00E7o Final: ").concat(this.formatarPrecoFinal());
    };
    return Produto;
}());
var form = document.getElementById('product-form');
var productNameInput = document.getElementById('product-name');
var productPriceInput = document.getElementById('product-price');
var productTaxInput = document.getElementById('product-tax');
var productList = document.getElementById('product-list');
var finalPriceSpan = document.getElementById('final-price');
var products = [];
function addProduct(product) {
    var li = document.createElement('li');
    li.textContent = product.exibirProduto();
    productList.appendChild(li);
    products.push(product);
    updateFinalPrice();
}
function updateFinalPrice() {
    var total = 0;
    products.forEach(function (product) {
        total += product.calcularPrecoFinal();
    });
    finalPriceSpan.textContent = total.toFixed(2);
}
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var productName = productNameInput.value.trim();
    var productPrice = parseFloat(productPriceInput.value);
    var productTax = parseFloat(productTaxInput.value);
    if (productName && !isNaN(productPrice) && !isNaN(productTax) && productPrice > 0 && productTax >= 0) {
        var newProduct = new Produto(productName, productPrice, productTax);
        addProduct(newProduct);
        productNameInput.value = '';
        productPriceInput.value = '';
        productTaxInput.value = '';
    }
    else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
