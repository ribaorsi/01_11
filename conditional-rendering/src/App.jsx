import './App.css';
import {useState} from 'react';


const cars = [
  {brand: "Toyota", model: "yaris", topSpeed: "190 km/h"},
  {brand: "Mercedes", model: "c63", topSpeed: "260 km/h"},
  {brand: "Mazda", model: "6", topSpeed: "210 km/h"},
  {brand: "Mazda", model: "Civic", topSpeed: "200 km/h"},
  {brand: "Audi", model: "A4", topSpeed: "220 km/h"}
]

const App = () => {
  
  let [pageName, setpageName] = useState ("");

  let[inputValue, setinputValue] = useState ("Orsi");
  console.log("rerender");


  
  return (
    <div className="App">
            
      <button onClick={() => setpageName('Home')}>Home</button>
      <button onClick={() => setpageName('Landing')}>Landing</button>
      <button onClick={() => setpageName('About')}>About</button>

      {pageName === 'Home' &&<div>Homepage</div>}
      {pageName === 'Landing' &&<div>Landing page</div>}
      {pageName === 'About' &&<div>About page</div>}

      <input onChange={(e)=> setinputValue(e.target.value)} type = "text" value = {inputValue}></input>

      {inputValue.length <3 && <p>Min 3 characters!</p>}
      
      <button disabled={inputValue.length < 3}>Submit</button>

      {/* {cars.map((props) =>
        <div key={cars.index}>
          <p>{props.brand} - {props.model} ({props.topSpeed})</p>
      </div>
)
      } */}

    {cars.filter(car => car.brand.startsWith(inputValue)).map((props) =>
        <div key={cars.index}>
          <p>{props.brand} - {props.model} ({props.topSpeed})</p>
      </div>)
}
    </div>
  );
}

export default App;
