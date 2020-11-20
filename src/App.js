import React, { useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Popup from "./Components/Popup";



function App() {
  const [Movieslist, setMovieslist] = useState([
  {id:"1", name: "The Godfather", description:"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.", image:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg", rating:"9"},
  {id:"2", name: "The Godfather: Part II", description:"The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.", image:"https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", rating:"9"},
  {id:"3", name: "The Godfather: Part III", description:"In the midst of trying to legitimize his business dealings in New York City and Italy in 1979, aging Mafia Don Michael Corleone seeks to avow for his sins, while taking his nephew Vincent Mancini under his wing.", image:"https://m.media-amazon.com/images/M/MV5BNTc1YjhiNzktMjEyNS00YmNhLWExYjItZDhkNWJjZjYxOWZiXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg", rating:"7"},
  {id:"4", name: "Scarface", description:"In 1980 Miami, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.", image:"https://i.pinimg.com/736x/9e/35/14/9e35144ffc01d001cbed59029728115f.jpg", rating:"8"},
  {id:"5", name: "Goodfellas", description:"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.", image:"https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", rating:"8"},
  {id:"6", name: "A Bronx Tale", description:"A father becomes worried when a local gangster befriends his son in the Bronx in the 1960s.", image:"https://m.media-amazon.com/images/M/MV5BOGU5MmQzMzYtZjQ4MS00YmU1LWEzYmYtMzdlNjI4OWE4M2YwXkEyXkFqcGdeQXVyNDY2MTk1ODk@._V1_.jpg", rating:"8"},
  {id:"7", name: "Heat", description:"A group of professional bank robbers start to feel the heat from police when they unknowingly leave a clue at their latest heist.", image:"https://m.media-amazon.com/images/M/MV5BNGMwNzUwNjYtZWM5NS00YzMyLWI4NjAtNjM0ZDBiMzE1YWExXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg", rating:"8"},
  {id:"8", name: "Carlito's Way", description:"A Puerto Rican former convict, just released from prison, pledges to stay away from drugs and violence despite the pressure around him and lead on to a better life outside of N.Y.C.", image:"https://m.media-amazon.com/images/M/MV5BN2I2N2Q1YmMtMzZkMC00Y2JjLWJmOWUtNjc2OTM2ZTk1MjUyXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg", rating:"8"},
])
const [Keyword, setKeyword] = useState("")
const [Rating, setRating] = useState("")
const setSearchKeyword=(word)=>{
  setKeyword(word)
}
const setSearchRating=(x)=>{
  setRating(x+"") 
}
const addToMovieslist=(name,description,image,rating)=> {
setMovieslist([...setMovieslist,{name:name,description:description,image:image,rating:rating}])
}
  return (
    <div className="App">
      <Header addToMovieslist={addToMovieslist} setSearchKeyword={setSearchKeyword} setSearchRating={setSearchRating}/>
      <Main Movies={Movieslist} Keyword={Keyword} setSearchRating={Rating}/>
      <Footer/>
    </div>
  );
}

export default App;
