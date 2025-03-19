document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Yamcho Market!");

    //  navigation for the Shop Now button
    const shopNowButton = document.querySelector('.shop-button');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', function() {
            window.location.href = 'products.html';
        });
    }

    // Handle clicking on product images to navigate to the product page
    const productContainer = document.querySelector('.product-container');
    if (productContainer) {
        productContainer.addEventListener('click', function(event) {
            if (event.target.closest('.product img')) {  // Checks if the click is on a product image
                window.location.href = 'products.html';  // Redirects to the products page
            }
        });
    }

    // Populate the invoice table 
    const tableBody = document.getElementById('invoiceTable') ? document.getElementById('invoiceTable').getElementsByTagName('tbody')[0] : null;
    if (tableBody) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;

        cart.forEach(item => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const quantityCell = row.insertCell(1);
            const priceCell = row.insertCell(2);
            const totalCell = row.insertCell(3);
            
            nameCell.textContent = item.name;
            quantityCell.textContent = item.quantity;
            priceCell.textContent = `$${item.price.toFixed(2)}`;
            const itemTotal = item.quantity * item.price;
            totalCell.textContent = `$${itemTotal.toFixed(2)}`;
            total += itemTotal;
        });

        document.getElementById('totalPrice').textContent = `$${total.toFixed(2)}`;
    }
});

function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

function clearInvoice() {
    localStorage.removeItem('cart');  // Clear the cart from storage
    const tableBody = document.getElementById('invoiceTable').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';  // Clear the table rows
    document.getElementById('totalPrice').textContent = '$0.00';  // Reset the total price
}

function checkout() {
    alert("Thanks for purchasing");  // Alert the user with a thank you message
    clearInvoice();  // Clear the invoice and cart
    window.location.href = 'home.html';  // Navigate back to the home page
}
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`You added ${name} to cart`);  // Alert showing the item was added
}

