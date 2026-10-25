document.addEventListener("DOMContentLoaded", function () {

    const submitReviewBtn = document.getElementById("submitReviewBtn");
    if (submitReviewBtn) {
        submitReviewBtn.addEventListener("click", function (event) {
            event.preventDefault();
            const name = document.getElementById("customerName").value.trim();
            const comment = document.getElementById("comment").value.trim();
            const selectedRating = document.querySelector('input[name="rating"]:checked');

            if (!name || !comment || !selectedRating) {
                alert("Please fill in your name, leave a comment, and select a star rating!");
                return;
            }

            alert("✓ Thank you, " + name + "! Your review has been successfully submitted.");
            document.getElementById("customerName").value = "";
            document.getElementById("comment").value = "";
            if (selectedRating) selectedRating.checked = false;
        });
    }
    const confirmBtn = document.getElementById("confirm");
    const customModal = document.getElementById("customModal");
    const modalCloseBtn = document.getElementById("modalCloseBtn");

    if (confirmBtn) {
        confirmBtn.addEventListener("click", function () {
            
            customModal.style.display = "flex";

            document.querySelector(".summary").hidden = true;
            document.querySelector(".note").hidden = true;
            confirmBtn.hidden = true;
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener("click", function () {
            customModal.style.display = "none";
            document.getElementById("success").hidden = false;
        });
    }

});