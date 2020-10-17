const gameProperties = document.querySelector(".container");

const url =
	"https://api.rawg.io/api/games?dates=1999-01-01,1999-12-31&ordering=-rating";

async function getFromApi() {
	try {
		let response = await fetch(url);
		let json = await response.json();

		console.log(json);

		const results = json.results;
		gameProperties.innerHTML = "";
		for (let i = 0; i < results.length; i++) {
			gameProperties.innerHTML +=
				`<div class="card">` +
				`  <h4>Name: ${results[i].name}</h4>` +
				`  <h5>Slug: ${results[i].slug}</h5>` +
				`  <h6>Playtime: ${results[i].playtime}</h6>` +
				`  <img src="${results[i].background_image}" alt="${results.game_image}" />` +
				`  <a href="question3.html?id=${results[i].id}">Link to Game Details </a>` +
				`</div>`;
		}
	} catch (error) {
		const resultsContainer = document.querySelector(".results");
		resultsContainer.innerHTML = displayError("An error occured! " + error);
	}
}
getFromApi();
