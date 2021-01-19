import React, { useState, useEffect } from "react";
import axios from "axios";


const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;




const Facebook = () => { 

  const [fbSymbol, setFbSymbol] = useState('');
  const [fbCompany, setFbCompany] = useState('');
  const [fbPercent, setFbPercent] = useState('');
  const [fbClose, setFbClose] = useState('');



//Facebook(fb)
useEffect(() => {
  const search = async () => {

    const { data } = await axios.get(`${STOCK_URL}/stable/stock/fb/quote?token=${API_KEY}`);
    setFbSymbol(data.symbol);
    setFbCompany(data.companyName);
    setFbPercent(data.changePercent * 100);
    setFbClose(data.close);
  }
  search()
}, []);
  

const colorChange = fbPercent < 0 ? "red" : "green";

return (
  <div className="stockCompany">
    <div className="flex">
      <p>{fbSymbol}</p>
      <p>{fbClose}</p>
   </div> 
    <div className="flex">
      <p>{fbCompany}</p>
      <p className={`${colorChange}`}>{fbPercent}%</p>
   </div>  
  </div>
  );
}


export default Facebook;