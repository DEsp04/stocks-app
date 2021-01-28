import React, { useState, useEffect } from "react";
import axios from 'axios';



const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;




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
      setNasdaqPercent((data.changePercent * 100).toFixed(2));
      setNasdaqClose(data.close);
    }
    search()
  }, []);


  const colorChange = nasdaqPercent < 0 ? "red" : "green";
  
  return (
    <div className="stockCompany">
     <div className="flex">
      <h2>{nasdaqSymbol}</h2>
      <p>{nasdaqClose}</p>
    </div> 
      <div className="flex bottom">
      <p>{nasdaqCompany}</p>
      <p className={`${colorChange}`}>{nasdaqPercent}%</p>
    </div>  
    </div>
  );
}

export default Nasdaq