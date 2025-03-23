// Your code here
document.addEventListener("DOMContentLoaded", () => {
    // Fetch character data from the server
    fetch("http://localhost:3000/characters")
      .then((response) => response.json()) // Parse JSON response
      .then((characters) => {
        const characterBar = document.getElementById("character-bar");
  
        characters.forEach((character) => {
          // Create a new span element for each character
          const span = document.createElement("span");
          span.textContent = character.name;
          span.style.cursor = "pointer"; // Make it look clickable
  
          // Append the span to the character bar
          characterBar.appendChild(span);
        });
      })
      .catch((error) => console.error("Error fetching characters:", error));
  });
  