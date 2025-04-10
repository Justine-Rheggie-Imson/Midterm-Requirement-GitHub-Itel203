document.addEventListener("DOMContentLoaded", () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Save cart to localStorage and optionally update cart icon
    const saveCart = () => {
        localStorage.setItem("cart", JSON.stringify(cart));
    };

    // If we're on a product page with add-to-cart buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");

            cart.push({ name, price });
            saveCart();

            alert(`${name} added to cart!`);
        });
    });
});
