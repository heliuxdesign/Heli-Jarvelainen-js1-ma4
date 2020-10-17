var gameDetails = document.querySelector(".results");

let queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

const url = "https://api.rawg.io/api/games/" + id;

function createHTML(details) {
	console.log(gameDetails);
	console.log(details.game_image);
	gameDetails.innerHTML =
		`<div class="card"><h2>${details.name}</h2>` +
		`  <img src="${details.background_image}" alt="Background image" />` +
		`  <h4>Rating: ${details.rating}</h4>` +
		`  <h4>Tba: ${details.tba}</h4>` +
		`  <h4>Added: ${details.added}</h4>` +
		`  <h4>Clip: ${details.clip}</h4>` +
		`</div>`;
}

async function getFromApi() {
	try {
		let response = await fetch(url);
		let details = await response.json();

		console.log(details);

		createHTML(details);
	} catch (error) {
		const resultsContainer = document.querySelector(".results");
		resultsContainer.innerHTML = displayError("An error occured! " + error);
	}
}
getFromApi();
