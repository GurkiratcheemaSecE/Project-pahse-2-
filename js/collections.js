$(document).ready(function() {
    // data for the products
    const products = [
        { id: 1, name: "Nike Dunk Low Retro", description: "Men's Shoe", category: "dunk", price: "$150", imageUrl: "../collections_img/j1.jpg" },
        { id: 2, name: "Nike Dunk SE", description: "Easy On/Off", category: "dunk",price: "$310", imageUrl: "../collections_img/j12.png" },
        { id: 3, name: "Nike Dunk Low Retro (Black)", description: "Men's Shoe", category: ["dunk", "new"],price: "$250", imageUrl: "../collections_img/j2.png" },
        { id: 4, name: "Nike Dunk Low Retro (PRO)", description: "Skate Shoe", category: "dunk",price: "$150", imageUrl: "../collections_img/j3.png" },
        { id: 5, name: "Nike Dunk Low Retro SE", description: "Skate Shoe", category: "dunk", price: "$153",imageUrl: "../collections_img/j4.png" },
        { id: 6, name: "Nike Dunk Low Retro UNLOCK BY YOU", description: "Men's Shoe", category: "dunk",price: "$310", imageUrl: "../collections_img/j5.png" },
        { id: 7, name: "Nike Dunk Low Retro XXX3", description: "Men's Shoe", category: ["dunk", "new"], price: "$1520",imageUrl: "../collections_img/j6.png" },
        { id: 8, name: "Nike Dunk Low Retro KARASHTH", description: "Men's Shoe", category: "dunk", price: "$140",imageUrl: "../collections_img/j7.png" },
        { id: 9, name: "Nike Dunk Low Retro SE", description: "Men's Shoe", category: "dunk", price: "$350", imageUrl: "../collections_img/j8.png" },
        { id: 10, name: "Nike Dunk Low ", description: "Men's Shoe", category: ["dunk", "new"], price: "$110", imageUrl: "../collections_img/j9.png" },
        { id: 11, name: "Nike Dunk Low KKS", description: "Men's Shoe", category: ["dunk", "new"], price: "$542", imageUrl: "../collections_img/j10.png" },
        { id: 12, name: "Nike Dunk Low KKXS", description: "Men's Shoe", category: "dunk", price: "$512", imageUrl: "../collections_img/j11.png" },
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
    ]; 
    // Function to display products
    function displayProducts(filter = 'all') {
        const filteredProducts = products.filter(product => 
            filter === 'all' || product.category.includes(filter) 
        );
    
        const productHTML = filteredProducts.map(product => `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text"><strong>Price: ${product.price}</strong></p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        `).join('');
    
        $('.product-grid').html(productHTML);
    }
    
    // Initial display of all products
    displayProducts();
    
    // Filter buttons functionality
    $('.filter-btn').on('click', function() {
        const filter = $(this).data('filter');
        displayProducts(filter);
    });
});
