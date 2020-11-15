import React, { useState, useEffect } from 'react';
import './App.css';
import coronaImg from './images/corona.png'

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import Cards from './components/Cards';
import CountryPicker from './components/CountryPicker';
import Chart from './components/Chart';

function App() {
  const URL = 'https://covid19.mathdro.id/api';

  /////////////////////STATES/////////////////////////

  const [data, setData] = useState({})

  const [dailyData, setDailyData] = useState([])

  const [countries, setCountries] = useState([])

  const [country, setCountry] = useState('')

  /////////////////////FETCH DATA FROM API///////////////////////////

  const fetchData = async (country) => {
    let modifiedURL = URL;

    if (country) {
      modifiedURL = `${URL}/countries/${country}`
    }

    const response = await fetch(modifiedURL);

    setData(await response.json());
  }

  const fetchDailyData = async () => {
    const response = await fetch(`${URL}/daily`);

    setDailyData(await response.json());
  }

  const fetchCountries = async () => {
    const response = await fetch(`${URL}/countries`);
    const data = await response.json();

    setCountries(data.countries)
  }

  useEffect(() => {
    fetchDailyData();
  }, [])

  useEffect(() => {
    fetchData();

    fetchCountries();
  }, [])

  ////////////////////STATE HANDLERS/////////////////
  const handleCountryChange = async (country) => {
    await fetchData(country)

    setCountry(country)
  }

  return (
    <div className="App">
      <div className='imgDiv'>
        <img src={coronaImg} alt="COVID-19" className='image' />
      </div>

      <Cards data={data} />
      <CountryPicker countries={countries} handleCountryChange={handleCountryChange} country={country} />
      <Chart dailyData={dailyData} data={data} country={country} />
    </div>
  );
}

export default App;
