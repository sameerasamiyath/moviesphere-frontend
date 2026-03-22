import { useEffect,useState } from "react";
import MovieRow from "../components/MovieRow";

function Home(){

const [movies,setMovies] = useState([]);

useEffect(()=>{

fetch("https://moviesphere-backend-2-rlh4.onrender.com/api/movies/")
.then(res=>res.json())
.then(data=>setMovies(data))
.catch(err=>console.log(err));

},[]);


const moviesByLanguage = movies.reduce((acc,movie)=>{

if(!acc[movie.language]){
acc[movie.language] = [];
}

acc[movie.language].push(movie);

return acc;

},{});


return(

<div style={{background:"#111",minHeight:"100vh"}}>

{Object.keys(moviesByLanguage).map(language => (

<MovieRow
key={language}
title={language + " Movies"}
movies={moviesByLanguage[language]}
/>

))}

</div>

);

}

export default Home;