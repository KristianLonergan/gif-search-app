import React from "react";
import { shallow } from "enzyme";
import GifCardList from "./GifCardList";
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import Spinner from '../UI/Spinner/Spinner';
import GifCard from './GifCard/GifCard';
import { findByTestAttr } from '../../test/utils';

describe('GifCarList tests', () => {

  let wrapper;

  test('renders without error', () => {
    wrapper = shallow(<GifCardList />)
  });

  test('renders error component when an error is present', () => {
    wrapper = shallow(<GifCardList error="Test error" />)
    expect(wrapper.find(ErrorAlert)).toHaveLength(1);

    const title = findByTestAttr(wrapper, 'gif-title');
    expect(title).toHaveLength(1);
  });

  test('renders loading spinner', () => {
    wrapper = shallow(<GifCardList loading/>)
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  test('renders gif cards', () => {
    const giphyData = {
      data: [{
        url: 'https://test.com',
        title: 'test',
        images: {
          fixed_height: {
            url: 'https://test.com'
          }
        }
      }]
    };
    wrapper = shallow(<GifCardList giphyData={giphyData}/>)
    expect(wrapper.find(GifCard)).toHaveLength(1);

    const title = findByTestAttr(wrapper, 'gif-title');
    expect(title).toHaveLength(1);
  });

});