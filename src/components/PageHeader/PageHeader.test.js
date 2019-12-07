import React from "react";
import { shallow } from "enzyme";
import PageHeader from "./PageHeader";
import { findByTestAttr } from '../../test/utils';

describe('Page Header tests', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageHeader />);
  });

  test('renders without error', () => {
    expect(findByTestAttr(wrapper, 'page-header')).toHaveLength(1);
  });

  test('verify logo is rendered', () => {
    expect(findByTestAttr(wrapper, 'header-image')).toHaveLength(1);
  });

  test('verify header (<h1>) is rendered', () => {
    expect(findByTestAttr(wrapper, 'heading')).toHaveLength(1);
  });

  test('verify paragraph is rendered', () => {
    expect(findByTestAttr(wrapper, 'paragraph')).toHaveLength(1);
  });
});


