import React from "react";
import { shallow } from "enzyme";
import GifCard from "./GifCard";
import { findByTestAttr } from '../../../test/utils';

describe('GifCard tests', () => {

  test('renders without error', () => {
    const props = {
      url: 'test',
      imageUrl: 'test image',
      title: 'test title'
    };
    const wrapper = shallow(<GifCard {...props}/>)

    const component = findByTestAttr(wrapper, 'gif-card');
    expect(component).toHaveLength(1);
  });

});