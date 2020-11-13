import React, { useState, useEffect } from 'react';

import './App.css';
import help from './services/help';

function App() {
  const array = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "120",
    "123",
    "125",
    "127",
    "136",
    "140",
    "147",
    "149",
    "152",
    "153",
    "154",
    "156",
    "157",
    "161",
    "163",
    "165",
    "167",
    "168",
    "170",
    "171",
    "177",
    "182",
    "183",
    "185",
    "186",
    "189",
    "190",
    "195",
    "199",
    "207",
    "208",
    "211",
    "214",
  ]
  const [brands, setBrands] = useState([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    help.get(`${array[i]}.json`).then(response => {
      setBrands(response.data);
    });
  }, [])

  function sumI() {
    setI(i + 1);
    help.get(`${array[i]}.json`).then(response => {
      setBrands(response.data);
    });
  }
  return (
    <>
      <ul>
        {brands.sort((a, b) => a.id > b.id ? 1 : -1).map(brand => <li key={brand.id}>{brand.id},{brand.fipe_marca},{brand.name};</li>)}
      </ul>
      <button onClick={sumI}>Próxima marca</button>
    </>
  );
}

export default App;
