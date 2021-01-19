import React, { useState, useEffect } from "react";
import axios from "axios";



const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;



const Snap = () => { 

  const [snapSymbol, setSnapSymbol] = useState('');
  const [snapCompany, setSnapCompany] = useState('');
  const [snapPercent, setSnapPercent] = useState('');
  const [snapClose, setSnapClose] = useState('');


  useEffect(() => {
    const search = async () => {
  
      const { data } = await axios.get(`${STOCK_URL}/stable/stock/snap/quote?token=${API_KEY}`);
      setSnapSymbol(data.symbol);
      setSnapCompany(data.companyName);
      setSnapPercent(data.changePercent * 100);
      setSnapClose(data.close);
    }
    search()
  }, []);



  const colorChange = snapPercent < 0 ? "red" : "green";

  return (
    <div className="stockCompany">
      <div className="flex">
        <p>{snapSymbol}</p>
        <p>{snapClose}</p>
     </div> 
      <div className="flex">
        <p>{snapCompany}</p>
        <p className={`${colorChange}`}>{snapPercent}%</p>
     </div>  
    </div>
    );

}

export default Snap;