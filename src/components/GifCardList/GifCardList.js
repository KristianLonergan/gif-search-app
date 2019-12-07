import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import ErrorAlert from '../ErrorAlert/ErrorAlert';
import GifCard from "./GifCard/GifCard";
import Spinner from "../UI/Spinner/Spinner";

const GifCardLists = props => {
  let content = null;
  const title = <p className="lead" data-test="gif-title">{props.title}</p>;

  if (props.error) {
    return (
      <React.Fragment>
        {title}
        <ErrorAlert message={props.error}/>
      </React.Fragment>
    );
  }
  else if (props.loading) {
    return <Spinner />;
  }
  else if (props.giphyData) {
    const content = props.giphyData.data.map((el, index) => {
      const { url, title, images } = el;

      return (
        <GifCard
          key={index}
          url={url}
          title={title}
          imageUrl={images.fixed_height.url}
        />
      );
    });

    return (
      <React.Fragment>
        {title}
        <CardDeck>{content}</CardDeck>
      </React.Fragment>
    );
  }
  return content;
};

export default GifCardLists;
