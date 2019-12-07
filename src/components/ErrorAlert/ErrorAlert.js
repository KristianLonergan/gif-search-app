import React from "react";
import Alert from "react-bootstrap/Alert";
import classes from './ErrorAlert.module.css'

const ErrorAlert = props => <Alert className={classes.ErrorAlert} variant="danger" data-test="error-alert" >{props.message}</Alert>;

export default ErrorAlert;
