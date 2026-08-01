// ===============================
// METODO VITTORIA - LESSON TOOLS
// Barra di ricerca
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const searchBox = document.getElementById("lessonSearch");

    if (!searchBox) return;

    const sections = document.querySelectorAll(".lesson-section");

    searchBox.addEventListener("input", function () {

        const text = this.value.toLowerCase();

        sections.forEach(section => {

            if (section.innerText.toLowerCase().includes(text)) {

                section.style.display = "block";

            } else {

                section.style.display = "none";

            }

        });

    });

});

