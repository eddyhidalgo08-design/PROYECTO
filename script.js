document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("main section, header, footer, article");

    elementos.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(15px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 150 * index);
    });

    
    let cart = [];
    const cartIcon = document.getElementById("cart-icon");
    const cartBox = document.getElementById("cart-box");
    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const clearCartBtn = document.getElementById("clear-cart");

    if (cartIcon) {
        cartIcon.addEventListener("click", () => {
            cartBox.classList.toggle("hidden");
        });
    }

    document.querySelectorAll(".add-cart").forEach(btn => {
        btn.addEventListener("click", () => {
            const product = btn.dataset.product;
            cart.push(product);
            updateCart();
            cartBox.classList.remove("hidden"); 
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            cartItems.appendChild(li);
        });

        cartCount.textContent = cart.length;

        if (cart.length === 0 && cartBox) {
            cartBox.classList.add("hidden"); 
        }
    }

    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", () => {
            cart = [];
            updateCart();
        });
    }

    
    const tarjetas = document.querySelectorAll("section article");

    function mostrarTarjetas() {
        const trigger = window.innerHeight * 0.85;

        tarjetas.forEach(tarjeta => {
            const top = tarjeta.getBoundingClientRect().top;
            
            if (top < trigger) {
                tarjeta.style.opacity = "1";
                tarjeta.style.transform = "scale(1)";
            }
        });
    }

    tarjetas.forEach(t => {
        t.style.opacity = "0";
        t.style.transform = "scale(0.9)";
        t.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    });

    window.addEventListener("scroll", mostrarTarjetas);
    mostrarTarjetas();
});

