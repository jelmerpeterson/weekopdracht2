const movieList = movies["Movies"];
const ulList = document.getElementById("content-films");
const radiobuttons = document.getElementsByName("radiobtn");

const addMovies = (films) => {
  // maakt van alle titels een LI
  const makeLiFromData = films.map((item) => {
    const imdb = "https://www.imdb.com/title/" + item.imdbID;
    return (
      "<li class='li-items'><h2>" +
      item.Title +
      "</h2><a href=" +
      imdb +
      "><img src=" +
      item.Poster +
      "></a></li>"
    );
  });

  makeLiFromData.forEach((item) => {
    ulList.innerHTML += item;
  });
};
addMovies(movieList);

// functie die een event toevoegt aan alle radiobuttons
const handleOnChangeEvent = (event) => {
  if (radiobuttons[0].checked) {
    addMovies(movieList);
  } else if (radiobuttons[1].checked) {
    filterLatest();
  } else if (radiobuttons[2].checked) {
    // console.log("Avengers");
    filterMovies("Avengers");
  } else if (radiobuttons[3].checked) {
    console.log("x-men");
    filterMovies("X-Men");
  } else if (radiobuttons[4].checked) {
    console.log("princes");
    filterMovies("Princess");
  } else {
    console.log("batman");
    filterMovies("Batman");
  }
};

// Filter movie function
const filterMovies = (title) => {
  const filter = movieList.filter((item) => {
    return item.Title.includes(title);
  });
  liRemoved();
  addMovies(filter);
};

//filter latest
const filterLatest = () => {
  const latestMovies = movieList.filter((item) => {
    return item.Year > 2014;
  });

  liRemoved();
  addMovies(latestMovies);
};

// loop die een event toevoegt aan alle radiobuttons
radiobuttons.forEach((item) => {
  item.addEventListener("change", handleOnChangeEvent);
});

// Functie geven aan removeLi()
const liRemoved = () => {
  const liItems = document.querySelectorAll(".li-items");
  liItems.forEach((item) => item.remove());
};
