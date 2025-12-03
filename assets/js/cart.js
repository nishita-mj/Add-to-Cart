let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartContainer = document.getElementById("cart-Container")

function UpdateCart() {
    document.getElementById("count").innerHTML = cart.length;
}

function removeProducts(idx) {
    cart.splice(idx, 1)

    localStorage.setItem("cart", JSON.stringify(cart))

    Swal.fire({
        icon: 'error',
        title: 'Removed!',
        text: 'Item removed from the cart',
        timer: 1500,
        showConfirmButton: false
    });

    UpdateCart();
    DisplayCart();
}

function updateQuantity(idx, qty) {
    cart[idx].quantity += qty;

    if (cart[idx].quantity <= 0) {
        removeProducts(idx);
    } else {
        localStorage.setItem("cart", JSON.stringify(cart))
        DisplayCart();
    }
}

function DisplayCart() {

    cartContainer.innerHTML = ""
    let mainTotal = 0;

    let totalBox = document.getElementById("totalBox");
    let totalLabel = document.getElementById("totalLabel");

    if (cart.length === 0) {
        totalBox.classList.add("d-none");
        totalLabel.classList.add("d-none");
    } else {
        totalBox.classList.remove("d-none");
        totalLabel.classList.remove("d-none");
    }

    cart.forEach((product, idx) => {

        let subTotal = product.price * product.quantity;
        mainTotal += subTotal;

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
                        <button class="btn btn-dark" onclick="updateQuantity(${idx},1)">
                            <i class="ri-add-line"></i>
                        </button>
                        <h4 class="mx-4"> ${product.quantity} </h4>
                        <button class="btn btn-dark" onclick="updateQuantity(${idx},-1)">
                            <i class="ri-subtract-line"></i>
                        </button>
                    </div>
                </div>
                <div class="col-2">
                    <div class="d-flex text-center">
                        <h3 class="text-success">
                            $ ${subTotal}
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

    document.getElementById("total").innerHTML = `$ ${mainTotal}`;
}

document.addEventListener("DOMContentLoaded", () => {
    UpdateCart();
    DisplayCart();
})