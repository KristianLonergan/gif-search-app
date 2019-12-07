import React from "react";
import { shallow } from "enzyme";
import Spinner from "./Spinner";
import { findByTestAttr } from '../../../test/utils';

describe('Spinner tests', () => {
  test('renders without error', () => {
    const wrapper = shallow(<Spinner />);
    expect(findByTestAttr(wrapper, 'loading-spinner')).toHaveLength(1);
  });
});