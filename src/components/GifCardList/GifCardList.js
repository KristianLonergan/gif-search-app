import React from "react";
import GifCard from "./GifCard/GifCard";
import CardDeck from "react-bootstrap/CardDeck";
import Spinner from "../UI/Spinner/Spinner";

const GifCardLists = props => {
  let content = null;

  if (props.error) {
    return <div>Error</div>;
  } else if (props.loading) {
    return <Spinner />;
  } else if (props.data) {
    const content = props.data.data.map((el, index) => {
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
        <p className="lead">{props.title}</p>
        <CardDeck>{content}</CardDeck>
      </React.Fragment>
    );
  }
  return content;
};

export default GifCardLists;
