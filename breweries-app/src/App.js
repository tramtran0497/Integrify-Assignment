import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BreweryList from './Components/BreweryList';
import BreweryDetail from './Components/BreweryDetail';

function App() {
  const [breweries, setBreweries] = useState([])
  const [displayBreweries, setDisplayBreweries] = useState([])

  useEffect(() => {
    const url = "https://api.openbrewerydb.org/breweries"
    async function fetchData(){
      try{
        const responseUrl = await fetch(url);
        const responseJson = await responseUrl.json();
        setBreweries(responseJson)
      } catch(err){
        console.error(err)
      }
    }

    fetchData()
  }, [])

  useEffect(()=>{
    if(breweries){
      setDisplayBreweries(breweries)
    }
  },[breweries])

  return (
    <Router>
      <div className="App">
        <Routes>
            <Route path="/" element={<BreweryList breweries={displayBreweries}/>}/>
            <Route path="/:id" element={<BreweryDetail breweries={displayBreweries}/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
