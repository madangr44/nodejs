import React,{useEffect,useState} from 'react';
import Reciepe from "./recipe"
function App() {

  const APP_ID="ff67556a";
  const APP_KEY="5f6c5cdf07129f719649c78ed269c3e9"
 // const exampleReq=`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
 
  var [reciepes,setReciepes]=useState([])
  useEffect(()=>getRecipes(),[]);

  var getRecipes =async()=>{
    const response=await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data=await response.json()
    setReciepes(data.hits);
    console.log(data.hits)
  }
 

  return (  
    <div className="App">
    <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button"  type="submit">search</button>
    </form>
    {reciepes.map((reciepe)=>(
      <Reciepe
        title={reciepe.recipe.label}
     calories={reciepe.recipe.calories}
       image={reciepe.recipe.image}
       />

    ))}
    </div>
  );
    };
    export default App;

  
