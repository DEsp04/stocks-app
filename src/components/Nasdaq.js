import React, { useState, useEffect } from "react";
import axios from 'axios';



const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;

console.log(STOCK_URL);


const Nasdaq = () => { 

  const [nasdaqSymbol, setNasdaqSymbol] = useState('');
  const [nasdaqCompany, setNasdaqCompany] = useState('');
  const [nasdaqPercent, setNasdaqPercent] = useState('');
  const [nasdaqClose, setNasdaqClose] = useState('');



//NASDAQ(ndaq)
useEffect(() => { 
  const search = async () => { 

    const { data } = await axios.get(`${STOCK_URL}/stable/stock/ndaq/quote?token=${API_KEY}`);    
    setNasdaqSymbol(data.symbol);
    setNasdaqCompany(data.companyName);
    setNasdaqPercent(data.changePercent * 100);
    setNasdaqClose(data.close);
  }
  search()
},[])


  const colorChange = nasdaqPercent < 0 ? "red" : "green";
  
  return (
    <div>
     <div className="flex">
      <p>{nasdaqSymbol}</p>
      <p>{nasdaqCompany}</p>
    </div> 
    <div className="flex">
      <p className={`${colorChange}`}>{nasdaqPercent}%</p>
      <p>{nasdaqClose}</p>
    </div>  
    </div>
  );
}

export default Nasdaq