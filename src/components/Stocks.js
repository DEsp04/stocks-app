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



  useEffect(() => {
    const search = async () => {
  
      const { data } = await axios.get(`${STOCK_URL}/stable/stock/${stockName}/quote?token=${API_KEY}`);

    }
    search()
  }, []);





  return (
    <div>
      <div className="flex">
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
    </div>
  );
}

export default Stocks;