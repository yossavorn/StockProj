import React from "react";

import StocksList from "./components/StocksList";
import "./App.css";
import { useState } from "react";

function App() {
  const [StocksRender, setStocksRender] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const fetchStockHandler = async () => {
    setIsLoading(true);
    setIsError(null);
    try {
      const parseData = await fetch("https://stockradars.co/assignment/data.php");
      if (!parseData.ok) {
        throw new Error("Error, Something wrongs!");
      }
      console.log(parseData);
      const data = await parseData.json();
      console.log(data);

      const StocksData = data.map((stock) => {
        return {
          id: stock.N_name,
          title: stock.N_name,
          e_fname:  stock.N_COMPANY_E,
          e_summary: stock.N_BUSINESS_TYPE_E,
          t_fname:  stock.N_COMPANY_T,
          t_summary: stock.N_BUSINESS_TYPE_T,
          url: stock.N_URL,
          mktcap: stock.marketcap
        };
      });
      setStocksRender(StocksData);
      console.log(StocksData);
    } catch (error) {
      setIsError(error.message);
    }

    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchStockHandler}>Fetch Stocks</button>
      </section>
      <section>
        {!isLoading && StocksRender.length > 0 && (
          <StocksList stocks={StocksRender} />
        )}
        {!isLoading && StocksRender.length === 0 && !isError && <p>No Stocks</p>}
        {!isLoading && isError && <p>{isError}</p>}
        {isLoading && <p>Now Loading .....</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
