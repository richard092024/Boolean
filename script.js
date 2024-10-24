// Funksjon som kjøres når skjemaet sendes inn
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Hindrer siden fra å oppdatere ved innsending

    // Henter brukerinput fra skjemaet
    let userName = document.getElementById("username").value;
    let userAge = parseInt(document.getElementById("age").value);
    let userIsBlocked = document.getElementById("blocked").value === "true";

    // Variabler som brukes til å styre påloggingen
    let userIsLoggedIn = false;
    let goToPage = "";

    // IF/ELSE Conditional
    if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
      userIsLoggedIn = true;
      goToPage = "/home";
      document.getElementById("message").textContent =
        "Velkommen, " + userName + "!";
    } else {
      document.getElementById("message").textContent =
        "Feil: Kan ikke logge inn. Vennligst sjekk informasjonen.";
    }

    // Viser resultatene i konsollen
    console.log("Bruker er logget inn: " + userIsLoggedIn);
    console.log("Gå til side: " + goToPage);
  });
