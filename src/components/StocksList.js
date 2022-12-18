import React from 'react';

import Stock from './Stock';
import classes from './StocksList.module.css';

const StockList = (props) => {
  return (
    <ul className={classes['stocks-list']}>
      {props.stocks.map((stock) => (
        <Stock
          key={stock.id}
          title={stock.title}
          e_sum={stock.e_summary}
          e_fname={stock.e_fname}
          mktcap={(stock.mktcap/1000000).toFixed(2)}
          url={stock.url}
        />
      ))}
    </ul>
  );
};

export default StockList;
