import React from 'react';
import classes from './Spinner.module.css';

const Spinner = (props) => (
  <div className={classes.loader} data-test="loading-spinner" >Loading...</div>
);

export default Spinner;