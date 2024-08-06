import React from "react";
import { Link, useParams } from "react-router-dom";

const Card = ({data}) => {
  return (
    <Link className="country-card" to={`/${data.name.common}`} state={data}>
      <img src={data.flags.svg} alt={data.name.common} />
      <h3>{data.name.common}</h3>
      <p>
        <b>Population : </b>{data.population}
      </p>
      <p>
        <b>Region : </b>{data.region}
      </p>
      {data.capital?<p>
        <b>Capital : </b>{data.capital}
      </p>:''}
    </Link>
  );
};

export default Card;
