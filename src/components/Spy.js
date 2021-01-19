import React, { useState, useEffect } from "react";
import axios from 'axios';



const STOCK_URL = `${process.env.REACT_APP_STOCK_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;


const Spy = () => { 

  const [spySymbol, setSpySymbol] = useState('');
  const [spyCompany, setSpyCompany] = useState('');
  const [spyPercent, setSpyPercent] = useState('');
  const [spyClose, setSpyClose] = useState('');


  useEffect(() => {
    const search = async () => {

      const { data } = await axios.get(`${STOCK_URL}/stable/stock/spy/quote?token=${API_KEY}`);
      setSpySymbol(data.symbol);
      setSpyCompany(data.companyName);
      setSpyPercent(data.changePercent * 100);
      setSpyClose(data.close);
    }
    search()
  }, []);



  const colorChange = spyPercent < 0 ? "red" : "green";
  
  return (
    <div>
     <div className="flex">
        <p>{spySymbol}</p>
        <p>{spyClose}</p>
     </div> 
     <div className="flex">
        <p>{spyCompany}</p>
        <p className={`${colorChange}`}>{spyPercent}%</p>
      </div>  
    </div>
  );


}



export default Spy;