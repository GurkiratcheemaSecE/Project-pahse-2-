$(document).ready(function() {
    // data for the products
    const products = [
        { id: 0, name: "Nike Dunk Low Retro", description: "Men's Shoe", category: "dunk", price: "$150", imageUrl: "../collections_img/j1.png" },
        { id: 1, name: "Nike Dunk SE", description: "Easy On/Off", category: "dunk",price: "$310", imageUrl: "../collections_img/j12.png" },
        { id: 2, name: "Nike Dunk Low Retro (Black)", description: "Men's Shoe", category: ["dunk", "new"],price: "$250", imageUrl: "../collections_img/j2.png" },
        { id: 3, name: "Nike Dunk Low Retro (PRO)", description: "Skate Shoe", category: "dunk",price: "$150", imageUrl: "../collections_img/j3.png" },
        { id: 4, name: "Nike Dunk Low Retro SE", description: "Skate Shoe", category: "dunk", price: "$153",imageUrl: "../collections_img/j4.png" },
        { id: 5, name: "Nike Dunk Low Retro UNLOCK BY YOU", description: "Men's Shoe", category: "dunk",price: "$310", imageUrl: "../collections_img/j5.jpg" },
        { id: 6, name: "Nike Dunk Low Retro XXX3", description: "Men's Shoe", category: ["dunk", "new"], price: "$1520",imageUrl: "../collections_img/j6.png" },
        { id: 7, name: "Nike Dunk Low Retro KARASHTH", description: "Men's Shoe", category: "dunk", price: "$140",imageUrl: "../collections_img/j7.png" },
        { id: 8, name: "Nike Dunk Low Retro SE", description: "Men's Shoe", category: "dunk", price: "$350", imageUrl: "../collections_img/j8.png" },
        { id: 9, name: "Nike Dunk Low ", description: "Men's Shoe", category: ["dunk", "new"], price: "$110", imageUrl: "../collections_img/j9.png" },
        { id: 10, name: "Nike Dunk Low KKS", description: "Men's Shoe", category: ["dunk", "new"], price: "$542", imageUrl: "../collections_img/j10.png" },
        { id: 11, name: "Nike Dunk Low KKXS", description: "Men's Shoe", category: "dunk", price: "$512", imageUrl: "../collections_img/j11.png" },
        { id: 12, name: "Nike Air Force 1", description: "Men's Shoe", category: "af", price: "$120", imageUrl: "../collections_img/A1.png" },
        { id: 13, name: "Nike Air Force 1 '07", description: "Unisex", category: "af",price: "$210", imageUrl: "../collections_img/A2.png" },
        { id: 14, name: "Nike Air Force 1 X", description: "Men's Shoe", category: "af",price: "$210", imageUrl: "../collections_img/A3.png" },
        { id: 15, name: "Nike Air Force 1VX", description: "Skate Shoe", category: ["af", "new"],price: "$110", imageUrl: "../collections_img/A4.png" },
        { id: 16, name: "Nike Air Force 12-0", description: "Unisex", category: ["af", "new"], price: "$121",imageUrl: "../collections_img/A5.png" },
        { id: 17, name: "Nike Air Force 1 M", description: "Men's Shoe", category: "af",price: "$124", imageUrl: "../collections_img/A6.png" },
        { id: 18, name: "Nike Air Force 1", description: "Men's Shoe", category: "af", price: "$212",imageUrl: "../collections_img/A7.png" },
        { id: 19, name: "Nike Air Force 1", description: "Men's Shoe", category: "af", price: "$222",imageUrl: "../collections_img/A8.png" },
        { id: 20, name: "Nike Air Force 1 XX1", description: "Men's Shoe", category: "af", price: "$121", imageUrl: "../collections_img/A9.png" },
        { id: 21, name: "Nike Air Force 1 ", description: "Men's Shoe", category: ["af", "new"], price: "$153", imageUrl: "../collections_img/A10.png" },
        { id: 22, name: "Nike Air Force 1 V", description: "Men's Shoe", category: "af", price: "$321", imageUrl: "../collections_img/A11.png" },
        { id: 23, name: "Nike Air Force 1XZ1", description: "Unisex", category: ["af", "new"], price: "$125", imageUrl: "../collections_img/A12.png" },
        { id: 24, name: "Nike Air MAX", description: "Men's Shoe", category: "max", price: "$142", imageUrl: "../collections_img/B1.png" },
        { id: 25, name: "Nike Air MAX MAX", description: "Men's Shoe", category: "max",price: "$254", imageUrl: "../collections_img/B2.png" },
        { id: 26, name: "Nike Air MAX Plus", description: "Unisex", category: "max",price: "$321", imageUrl: "../collections_img/B3.png" },
        { id: 27, name: "Nike Air MAX Heart", description: "Skate Shoe", category: "max",price: "$1140", imageUrl: "../collections_img/B4.png" },
        { id: 28, name: "Nike Air MAX Pulse", description: "Unisex", category: "max", price: "$444",imageUrl: "../collections_img/B5.png" },
        { id: 29, name: "Nike Air MAX 97", description: "Men's Shoe", category: "max",price: "$321", imageUrl: "../collections_img/B6.png" },
        { id: 30, name: "Nike Air MAX 98", description: "Men's Shoe", category: "max", price: "$241",imageUrl: "../collections_img/B7.png" },
        { id: 31, name: "Nike Air MAX Vip", description: "Men's Shoe", category: "max", price: "$163",imageUrl: "../collections_img/B8.png" },
        { id: 32, name: "Nike Air MAX S0S", description: "Unisex", category: "max", price: "$164", imageUrl: "../collections_img/B9.png" },
        { id: 33, name: "Nike Air MAX ", description: "Men's Shoe", category: "max", price: "$265", imageUrl: "../collections_img/B10.png" },
        { id: 34, name: "Nike Air MAX V", description: "Men's Shoe", category: "max", price: "$421", imageUrl: "../collections_img/B11.png" },
        { id: 35, name: "Nike Air MAX 21", description: "Men's Shoe", category: "new", price: "$231", imageUrl: "../collections_img/B12.png" },
        { id: 36, name: "Nike AM Plus (W)", description: "Men's Shoe", category: ["max", "sale"], price: "$250", sale: true, originalPrice: "$331", imageUrl: "../collections_img/S1.png" },
        { id: 37, name: "Nike Air Max PulseV", description: "Unisex", category: ["sale", "new"], price: "$212", sale: true, originalPrice: "$314", imageUrl: "../collections_img/S2.png" },
        { id: 38, name: "Nike Air Force 1 SAWX", description: "Men's Shoe", category: ["sale", "new"], price: "$150", sale: true, originalPrice: "$300", imageUrl: "../collections_img/S3.png" },
        { id: 39, name: "Nike Dunk Low Retro ", description: "Men's Shoe", category: ["sale", "new"], price: "$130", sale: true, originalPrice: "$240", imageUrl: "../collections_img/S4.png" },
        { id: 40, name: "Nike DunkVaporMax React ", description: "Men's Shoe", category: ["sale", "new"], price: "$120", sale: true, originalPrice: "$210", imageUrl: "../collections_img/S5.png" },
        { id: 41, name: "Nike Blazer React", description: "Men's Shoe", category: ["sale", "new"], price: "$250", sale: true, originalPrice: "$340", imageUrl: "../collections_img/S6.png" },
        { id: 42, name: "Nike Blazer X", description: "Men's Shoe", category: ["sale", "new"], price: "$440", sale: true, originalPrice: "$600", imageUrl: "../collections_img/S7.png" },
        { id: 43, name: "Nike Pegasus Ultra", description: "Men's Shoe", category: ["sale", "new"], price: "$420", sale: true, originalPrice: "$740", imageUrl: "../collections_img/S8.png" },
        { id: 44, name: "Nike Pegasus Elite", description: "Men's Shoe", category: ["sale", "new"], price: "$650", sale: true, originalPrice: "$880", imageUrl: "../collections_img/S9.png" },
        { id: 45, name: "Nike Blazer One", description: "Men's Shoe", category: ["sale", "new"], price: "$220", sale: true, originalPrice: "$420", imageUrl: "../collections_img/S10.png" },
        { id: 46, name: "Nike Agehaozero", description: "Men's Shoe", category: ["sale", "new"], price: "$210", sale: true, originalPrice: "$360", imageUrl: "../collections_img/S11.png" },

    ]; 
    // Function to display products
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function displayProducts(filter = 'all') {
        const filteredProducts = products.filter(product => filter === 'all' || product.category.includes(filter));
        const productHTML = filteredProducts.map(product => `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        ${product.sale ? `<p class="card-text"><strike>${product.originalPrice}</strike> <strong>${product.price}</strong></p>` : `<p class="card-text"><strong>${product.price}</strong></p>`}
                        <button onclick="addToCart(${product.id})" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        `).join('');
        $('.product-grid').html(productHTML);
    }    
    // Cart Function
    function updateCart() {
        let cartHTML = cart.map(item => {
            const product = products.find(p => p.id === item.id);
            return `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${product.name}
                    <span>${item.quantity} x ${parseFloat(product.price.substring(1))}</span>
                    <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
                </li>
            `;
        }).join('');
        $('#cart').html(cartHTML);
        updateTotal();
    }
    
    function updateTotal() {
        const total = cart.reduce((acc, item) => {
            const product = products.find(p => p.id === item.id);
            const itemPrice = parseFloat(product.price.replace('$', ''));
            return acc + (itemPrice * item.quantity);
        }, 0);
        $('#total').text(total.toFixed(2));
    }
    

    window.toggleCart = function() {
        const cartSection = document.getElementById('cartSection');
        const cartStatus = document.getElementById('cartStatus');  
    
        if (cartSection.style.display === 'none' || cartSection.style.display === '') {
            cartSection.style.display = 'block';
            cartStatus.textContent = 'Cart ON';  
            cartStatus.style.color = 'green';    // Change color to green
        } else {
            cartSection.style.display = 'none';
            cartStatus.textContent = 'Cart OFF'; 
            cartStatus.style.color = 'red';      // Change color to red
        }
    }
    
    
    window.addToCart = function(productId) {
        const cartItem = cart.find(item => item.id === productId);
        if (cartItem) {
            cartItem.quantity += 1;
        } else {
            cart.push({ id: productId, quantity: 1 });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };

    window.removeFromCart = function(productId) {
        const newCart = cart.filter(item => item.id !== productId);
        cart = newCart;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCart();
    };
    
    displayProducts();
    updateCart();
    toggleCart();
    // Filter buttons 
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        displayProducts(filter);
    });
});
