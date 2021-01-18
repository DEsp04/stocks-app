import React, { useState, useEffect } from "react";
import Nasdaq from "./Nasdaq";
import Facebook from "./Facebook";
// import axios from 'axios'
// import dotenv from "dotenv";
// dotenv.config();


// const SEARCH_ADVICE_URL = process.env.SEARCH_ADVICE_URL;
// const API_KEY = process.env.API_KEY;

// const response = `${SEARCH_ADVICE_URL}/stable/stock/${value}/quote?token=${API_KEY}`;





const Stocks = () => { 







  return (
    <div>
      <div className="flex">
        <Nasdaq />
        <Facebook />
      </div>
    </div>
  );
}

export default Stocks;