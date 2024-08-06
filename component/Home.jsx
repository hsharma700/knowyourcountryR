import React, {useState } from 'react';
import Search from './Search'
import Filter from './Filter'
import CountriesContainer from './CountriesContainer'

const Home = () => {
    const [query, setQuery] = useState(localStorage.getItem('input')||"")
    const [region, setRegion] = useState("");

  return (
    <>
    <div className="main-container">
      <div className="navigation-container">
        <Search setRequest={setQuery}/>
        <Filter setRegion={setRegion}/>
      </div>
    <CountriesContainer request={query} region={region}/>
    </div>
    </>
  )
}

export default Home