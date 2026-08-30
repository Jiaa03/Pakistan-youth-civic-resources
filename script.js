document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resources = document.querySelectorAll(".resources section");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();

        resources.forEach(function (resource) {
            const resourceText = resource.textContent.toLowerCase();

            if (resourceText.includes(searchTerm)) {
                resource.style.display = "";
            } else {
                resource.style.display = "none";
            }
        });
    });
});
