import React, { useState, useEffect } from "react";
import Nasdaq from "./Nasdaq";
import Spy from "./Spy";
import Facebook from "./Facebook";
import Snap from "./Snap";
import axios from 'axios'



const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;




const Stocks = () => { 


  const [stockName, setStockName] = useState('');
  const [result, setResult] = useState('');



  useEffect(() => {
    const search = async () => {
  
      const { data } = await axios.get(`${STOCK_URL}/stable/stock/${stockName}/quote?token=${API_KEY}`);

      setResult(data)
      console.log(data)
    }


    const timeoutId = setTimeout(() => {
      search();
    }, 500);

    // console.log(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
    
  }, [stockName]);


  const displayResult = () => { 
    const colorChange = result.changePercent < 0 ? "red" : "green";
   if(result) {
      return (
        <div className="stockCompany">
          <div className="flex">
          <h2>{result.symbol}</h2>
          <p>{result.close}</p>
      </div> 
      <div className="flex bottom">
          <p>{result.companyName}</p>
          <p className={`${colorChange}`}>{(result.changePercent * 100).toFixed(2)}%</p>
        </div>  
        </div>
      );
   }
  }


  return (
    <div className="stocks">
      <div className="">
        <Nasdaq />
        <Spy />
        <Facebook />
        <Snap />
        <input
          value={stockName}
          onChange={e => setStockName(e.target.value)}
          type="Search"
          placeholder="Search"
        />
      </div>
      <div>
        {displayResult()}
      </div>
    </div>
  );
}

export default Stocks;