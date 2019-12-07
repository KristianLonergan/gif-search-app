import React, { useState, useEffect, useRef } from "react";
import Tooltip from "react-bootstrap/Tooltip";
import Overlay from "react-bootstrap/Overlay";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { CONTAINS_SPECIAL_CHARS } from "../../constants/regex";
import classes from "./SearchBar.module.css";
import "./SearchBar.css";

const SearchBar = props => {
  const target = useRef(null);
  const inputClasses = [classes.Input];
  const [searchValue, setSearchValue] = useState("");
  const [tooltip, setTooltip] = useState("");
  const [validity, setValidity] = useState({
    isInvalid: false,
    touched: false
  });

  useEffect(() => {
    if (searchValue && validity.isInvalid) {
      setTooltip("Error: Must not contain special characters.");
    } else if (!searchValue && validity.touched) {
      setTooltip("Please enter something before searching...");
    }
  }, [searchValue, validity]);

  const onChangeValueHandler = event => {
    const value = event.target.value.trim();

    setSearchValue(value);
    setValidity({
      isInvalid: checkValidity(value),
      touched: true
    });
  };

  const checkValidity = value => {
    return CONTAINS_SPECIAL_CHARS.test(value);
  };

  const keyPressHandler = event => {
    if (event.key === "Enter") {
      onClickSearch();
    }
  };

  if (validity.isInvalid && validity.touched) {
    inputClasses.push(classes.Invalid);
  }

  const onClickSearch = () => {
    setValidity(prev => ({
      touched: true,
      isInvalid: searchValue && !prev.isInvalid ? false : true
    }));
    if (!validity.isInvalid && searchValue) {
      props.clicked(searchValue);
    }
  };

  return (
    <React.Fragment>
      <InputGroup ref={target} className="mb-3" data-test="input-group">
        <FormControl
          data-test="search-box"
          className={inputClasses}
          placeholder="Search for GIF"
          aria-label="Search for GIF"
          aria-describedby="basic-addon2"
          value={searchValue}
          onKeyUp={keyPressHandler}
          onChange={onChangeValueHandler}
        />
        <InputGroup.Append>
          <Button
            data-test="search-button"
            active={false}
            className={classes.SearchButton}
            onClick={onClickSearch}
          >
            Search
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <Overlay
        target={target.current}
        show={validity.isInvalid}
        placement="auto"
      >
        {props => <Tooltip data-test="tooltip" {...props}>{tooltip}</Tooltip>}
      </Overlay>
    </React.Fragment>
  );
};

export default SearchBar;
