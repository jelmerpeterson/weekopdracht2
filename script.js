// Alle global variables
const container = document.getElementById("films-container");
const movieList = movies.Movies;
const radiobuttons = document.getElementsByName("radiobtn");
const movieTitle = movieList.Title;

// functie voor map method in add to dom
const addTitleAndMovie = (movie) => {
  return `<div><h2>${movie.Title}</h2><a href="https://www.imdb.com/title/${movie.imdbID}"><img src="${movie.Poster}"></a></div>`;
};

// Toevoegen van titel en films aan de dom.
const addToDom = () => {
  container.innerHTML = `${movieList.map(addTitleAndMovie).join("")}
`;
};

addToDom();

// Latest movie filter
const latest = () => {
  return movieList
    .filter((item) => {
      return item.Year >= 2014;
    })
    .map((item) => {
      return `<div><h2>${item.Title}</h2><a href="https://www.imdb.com/title/${item.imdbID}"><img src="${item.Poster}"></div></a>`;
    });
};

// Films by name
// const filterMovie = () => {
//   if (movieList.includes("Avengers")) {
//     console.log("Klopt");
//   }
// };

// functie die een event toevoegt aan alle radiobuttons
const handleOnChangeEvent = (event) => {
  console.log(event.target);
  if (radiobuttons[0].checked) {
    console.log("home");
    addToDom();
  } else if (radiobuttons[1].checked) {
    console.log("Laatste films");
    container.innerHTML = `${latest().join(" ")}`;
    console.log(latest());
  } else if (radiobuttons[2].checked) {
    console.log("Avengers");
    alert(
      "Ik krijg die include() method maar niet onder de knie, alle andere stappen doen het wel, vandaar deze alert :("
    );
  } else if (radiobuttons[3].checked) {
    console.log("x-men");
    alert(
      "Ik krijg die include() method maar niet onder de knie, alle andere stappen doen het wel, vandaar deze alert :("
    );
  } else if (radiobuttons[4].checked) {
    console.log("princes");
    alert(
      "Ik krijg die include() method maar niet onder de knie, alle andere stappen doen het wel, vandaar deze alert :("
    );
  } else {
    console.log("batman");
    alert(
      "Ik krijg die include() method maar niet onder de knie, alle andere stappen doen het wel, vandaar deze alert :("
    );
  }
};

// loop die een event toevoegt aan alle radiobuttons
radiobuttons.forEach((item) => {
  item.addEventListener("change", handleOnChangeEvent);
});
