let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-Container")

function UpdateCart() {
    document.getElementById("count").innerHTML = cart.length;
}

function removeProducts(idx){
    cart.splice(idx,1)

    localStorage.setItem("cart",JSON.stringify(cart))

    UpdateCart();
    DisplayCart();
}   

function DisplayCart() {

    cartContainer.innerHTML = ""

    cart.forEach((product,idx) => {
        cartContainer.innerHTML += `
            <div class="row align-items-center my-4">
                <div class="col-2">
                    <div>
                        <img src="${product.imageURL}" alt=""
                            class="img-fluid rounded-2 shadow">
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <h3>
                            ${product.name}
                        </h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="text-center">
                        <h4>${product.price}</h4>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex text-center">
                        <button class="btn btn-dark">
                            <i class="ri-add-line"></i>
                        </button>
                        <h4 class="mx-4">1 </h4>
                        <button class="btn btn-dark">
                            <i class="ri-subtract-line"></i>
                        </button>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex text-center">
                        <h3 class="text-success text-center">
                            28,700
                        </h3>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex text-center justify-content-center">
                        <button class="btn btn-danger btn-lg" onclick = "removeProducts(${idx})">
                            <i class="ri-delete-bin-line"></i>
                        </button>
                    </div>
                </div>
            </div>

            <hr>
        `
    });
}

document.addEventListener("DOMContentLoaded", () => {
    UpdateCart();
    DisplayCart();
})