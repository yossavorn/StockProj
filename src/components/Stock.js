import React from "react";

import classes from "./Stock.module.css";

const Stock = (props) => { 
  console.log(props.url);
  return (
    <li className={`${classes.stock} ${classes.desktop_grid} ${classes.tablet_grid} ${classes.phone_grid}`}>
      <div className={classes.title }>
        <h2>{props.title}</h2>
      </div>
      <div className={classes.fname}>
        <h3>{props.e_fname}</h3>
      </div>

      <div className={`${classes.sum} ${classes.desktop_text} ${classes.tablet_text} ${classes.phone_text}`}>
        <p>{props.e_sum}</p>
      </div>
      <div className={classes.url_label} >
        <p>Company website</p>
      </div>
      <div className={classes.url}>
        <p>{props.url ? <a href={props.url} target="_blank">{props.url}</a> : "-"}</p>
      </div>
      <div className={classes.mkt_label}>
        <p>Market Cap (MB)</p>
      </div>
      <div className={classes.mktcap}>
        <p>{props.mktcap}</p>
      </div>
    </li>
  );
};

export default Stock;
