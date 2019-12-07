import React from "react";
import { shallow } from "enzyme";
import ErrorAlert from "./ErrorAlert";
import { findByTestAttr } from '../../test/utils';

describe('Error Alert tests', () => {
  test('renders without error', () => {
    const wrapper = shallow(<ErrorAlert />);
    expect(findByTestAttr(wrapper, 'error-alert')).toHaveLength(1);
  });
  
  test('verify correct test appears', () => {
    const testString = 'testString';
    const wrapper = shallow(<ErrorAlert message={testString}/>);
    const component = findByTestAttr(wrapper, 'error-alert');
    expect(component.text()).toEqual(testString);
  });
});