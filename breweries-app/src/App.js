import { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import _ from 'lodash';
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
        console.log(err)
      }
    }

    fetchData()
  }, [])

  useEffect(()=>{
    if(breweries){
      setDisplayBreweries(breweries)
    }
  },[breweries])

  function handleSearching(value){
    const cloneBreweries = [...breweries]
    const searchList = cloneBreweries.filter(brewery => {
      for(const property in brewery ){
        if(brewery[property] && brewery[property].toLowerCase().includes(value.toLowerCase().toString())){
          return true;
        }
      } 

      return false;
    })

    setDisplayBreweries(searchList) 
  }

  return (
    <Router>
      <div className="App">
        <Search onSearch={handleSearching}/>
        <Routes>
            <Route path="/" element={<BreweryList breweries={displayBreweries}/>}/>
            <Route path="/:id" element={<BreweryDetail breweries={displayBreweries}/>}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
