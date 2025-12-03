let product = [
    {
        id: 1,
        name: "Puff chair",
        price: 287,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img01.jpg"
    },
    {
        id: 2,
        name: "Bombi chair",
        price: 399,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img02.jpg"
    },
    {
        id: 3,
        name: "Wood chair",
        price: 198,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img03.jpg"
    },
    {
        id: 4,
        name: "Bombi chair",
        price: 200,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img04.jpg"
    },
    {
        id: 5,
        name: "Bombi chair",
        price: 200,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img05.jpg"
    },
    {
        id: 6,
        name: "Easy chair with armrests",
        price: 287,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img06.jpg"
    },
    {
        id: 7,
        name: "Upholstered chair",
        price: 399,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img07.jpg"
    },
    {
        id: 8,
        name: "Trestle-based chair",
        price: 198,
        imageURL: "https://htmlbeans.com/html/schon/images/products/img08.jpg"
    }
]

let cartCount = document.getElementById("count");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const productRow = document.getElementById("productRow");

function addToCart(productId) {
    const products = product.find((pro) => {
        return pro.id === productId;
    })

    products.quantity = 1;

    cart.push(products);
    localStorage.setItem("cart", JSON.stringify(cart))
    UpdateCart();

    Swal.fire({
        title: "Added to Cart!",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
    });
}

function UpdateCart() {
    cartCount.innerHTML = cart.length;
}

product.forEach((pro, idx) => {
    productRow.innerHTML += `
        <div class="col-xl-3 col-md-4 col-sm-6">
            <div>   
                <a href="">
                    <img src="${pro.imageURL}" alt="">
                </a>
                <ul class="star d-flex mx-5">
                    <li>
                        <i class="ri-star-fill"></i>
                    </li>
                    <li>
                        <i class="ri-star-fill"></i>
                    </li>
                    <li>
                        <i class="ri-star-fill"></i>
                    </li>
                    <li>
                        <i class="ri-star-line"></i>
                    </li>
                </ul>
                <div class="txt mx-5">
                    <strong class="">
                        <a href="product-detail.html" tabindex="0" class="puff-chair">
                            ${pro.name}
                        </a>
                    </strong>
                    <span class="euro">
                        <i class="ri-money-euro-circle-line"></i>
                        <span class="">${pro.price}</span>
                        <button class="btn btn-dark mt-3" onclick="addToCart(${pro.id})">
                            <i class="ri-shopping-cart-line"></i>   
                            Add to Cart
                        </button>
                    </span>
                </div>
            </div> 
        </div>
    `
});

UpdateCart();