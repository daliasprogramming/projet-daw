document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".product-select").forEach(function(select) {
        var card = select.closest(".product-card");
        var button = document.querySelector(select.dataset.buttonSelector) || card.querySelector(".add-to-cart-btn");
        var title = card.querySelector(".product-title");
        var quantityInput = card.querySelector("input[type='number']");

        function updateSelectedBook() {
            var option = select.selectedOptions[0];
            if (!option || !button || !title) return;
            title.textContent = option.textContent;
            button.dataset.productName = option.value;
            button.dataset.productId = option.dataset.id || button.dataset.productId;
            button.dataset.productPrice = option.dataset.price || button.dataset.productPrice;
            if (quantityInput) {
                quantityInput.dataset.productId = option.dataset.id || quantityInput.dataset.productId;
            }
        }

        select.addEventListener("change", updateSelectedBook);
        updateSelectedBook();
    });
});
