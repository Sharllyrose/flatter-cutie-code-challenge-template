// Your code here
document.addEventListener("DOMContentLoaded", () => {
    const baseURL = "http://localhost:3000/characters";
    const characterBar = document.getElementById("character-bar");
    const detailedInfo = document.getElementById("detailed-info");
    const characterName = document.getElementById("name");
    const characterImage = document.getElementById("image");
    const characterVotes = document.getElementById("vote-count");
    const votesForm = document.getElementById("votes-form");
    
    // Fetch and display characters in character-bar
    fetch(baseURL)
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const span = document.createElement("span");
                span.textContent = character.name;
                span.addEventListener("click", () => displayCharacterDetails(character));
                characterBar.appendChild(span);
            });
        });
    
    function displayCharacterDetails(character) {
        characterName.textContent = character.name;
        characterImage.src = character.image;
        characterVotes.textContent = character.votes;
        detailedInfo.dataset.id = character.id;
    }
    
    votesForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const votesInput = document.getElementById("votes");
        const newVotes = parseInt(votesInput.value) || 0;
        characterVotes.textContent = parseInt(characterVotes.textContent) + newVotes;
        votesInput.value = "";
    });
});
