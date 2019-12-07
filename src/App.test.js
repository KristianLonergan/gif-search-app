import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe('App tests', () => {

  test('app renders without error', () => {
    shallow(<App />);
  });

});