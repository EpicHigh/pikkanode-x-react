import React from "react";
import Card from "./Card";


const CardList = ({ Pikkas,loading,loaded }) => {
  return Pikkas.map(pikka => {
    return (
      <Card
        key={pikka.id}
        caption={pikka.caption}
        url={pikka.url}
        name={pikka.name}
        loading={loading}
        loaded={loaded}
      />
    );
  });
};

export default CardList;
