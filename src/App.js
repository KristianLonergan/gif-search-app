import React, { useEffect } from "react";
import Row from "react-bootstrap/Row";
import GifCardList from './components/GifCardList/GifCardList';
import SearchBar from "./components/SearchBar/SearchBar";
import PageHeader from './components/PageHeader/PageHeader';

import useGiphy from "./hooks/giphyApi";

import "bootstrap/dist/css/bootstrap.min.css";

const App = (props) => {

  const {
    getGif: getGifs,
    error: searchError,
    data: searchData,
    isLoading: isSearchLoading
  } = useGiphy('search');
  
  const {
    getGif: getTrendingGifs,
    error: trendingError,
    data: trendingData,
    isLoading: isTrendingLoading
  } = useGiphy('trending');

  useEffect(() => {
    const params = { limit: 5 };
    getTrendingGifs(params);
  }, [getTrendingGifs]);

  const getGifsHandler = searchValue => {
    getGifs({
      q: searchValue,
      limit: 5
    });
  };

  return (
    <React.Fragment>

      <PageHeader />

      <Row>
        <SearchBar clicked={getGifsHandler} />
      </Row>

      <Row>
        <GifCardList title="Results:" error={searchError} loading={isSearchLoading} giphyData={searchData}/>
      </Row>

      <Row>
        <GifCardList title="Currently trending:" error={trendingError} loading={isTrendingLoading} giphyData={trendingData}/>
      </Row>

    </React.Fragment>
  );
};

export default App;
