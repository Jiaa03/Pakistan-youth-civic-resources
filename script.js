document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const resources = document.querySelectorAll(".resources section");
    const noResults = document.getElementById("noResults");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let visibleResources = 0;

        resources.forEach(function (resource) {
            const resourceText = resource.textContent.toLowerCase();

            if (resourceText.includes(searchTerm)) {
                resource.style.display = "";
                visibleResources++;
            } else {
                resource.style.display = "none";
            }
        });

        if (visibleResources === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }
    });
});

