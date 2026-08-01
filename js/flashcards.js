/*
==========================================
FLASHCARDS.JS
Metodo Vittoria
Versione 1.0
==========================================
*/

function inizializzaFlashcards() {

    console.log("Flashcards inizializzate.");

    const carte = document.querySelectorAll(".flashcard");

    carte.forEach(carta => {

        carta.addEventListener("click", () => {

            carta.classList.toggle("flipped");

        });

    });

}

