let word = document.querySelector(".word");
let meaning = document.querySelector(".meaning");

const searchBtn = document.querySelector(".search-btn");

async function getMeaning() {
    let response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word.value);
    let data = await response.json();

    meaning.innerHTML = data[0].meanings[0].definitions[0].definition;
}

searchBtn.addEventListener("click", async () => {
    getMeaning();
});

window.addEventListener("keydown", (e) => {
        if(e.key === "Enter") {
           getMeaning();
        }
});



