import React from "react";
import { shallow } from "enzyme";
import SearchBar from "./SearchBar";
import { findByTestAttr } from '../../test/utils';

describe('Search Bar tests', () => {

  let wrapper;
  let clickedFn;

  beforeEach(() => {
    clickedFn = jest.fn()
    wrapper = shallow(<SearchBar clicked={clickedFn}/>);
  });

  test('renders without error', () => {
    expect(findByTestAttr(wrapper, 'input-group')).toHaveLength(1);
  });

  test('verify search box is rendered', () => {
    expect(findByTestAttr(wrapper, 'search-box')).toHaveLength(1);
  });

  test('verify search button is rendered', () => {
    expect(findByTestAttr(wrapper, 'search-button')).toHaveLength(1);
  });

  test('test search function is called when valid value passed', () => {
    const searchBox = findByTestAttr(wrapper, 'search-box');
    searchBox.prop('onChange')({ target: { value: 'dogs' } });

    const button = findByTestAttr(wrapper, 'search-button');
    button.simulate('click');

    expect(clickedFn).toHaveBeenCalled();
  });

  test('test search function is not called when invalid value passed', () => {
    const searchBox = findByTestAttr(wrapper, 'search-box');
    searchBox.prop('onChange')({ target: { value: '$@#$%' } });

    const button = findByTestAttr(wrapper, 'search-button');
    button.simulate('click');

    expect(clickedFn).toHaveBeenCalledTimes(0);
  });

  test('test search function is not called when blank value passed', () => {
    const button = findByTestAttr(wrapper, 'search-button');
    button.simulate('click');
    expect(clickedFn).toHaveBeenCalledTimes(0);
  });
});