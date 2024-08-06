import React, { useEffect, useState } from "react";
import "./CountryDetail.css";
import LoadingDetail from "./LoadingDetail";
import { Link, useLocation, useParams } from "react-router-dom";

const CountryDetail = () => {
  const params = useParams();
  const searchUrl = params.country;
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [borderCountries, setBorderCountries] = useState([]);
  const { state } = useLocation();
  function setData(country) {
    setCountry({
      name: country.name.common,
      image: country.flags.svg,
      nativeName: country.name.official,
      population: country.population.toLocaleString(),
      region: country.region,
      subRegion: country.subregion,
      capital: country.capital.join(", "),
      tld: country.tld.join(", "),
      currency: country.currencies?.[Object.keys(country.currencies)]?.name,
      symbol: country.currencies?.[Object.keys(country.currencies)]?.symbol,
      languages: Object.values(country.languages).join(", "),
      borders: country.borders,
    });

    //border country
    if (country.borders) {
      async function allBorderCountry() {
        const allBorderC = await Promise.all(
          country.borders.map(async (single) => {
            const fetching = await fetch(
              `https://restcountries.com/v3.1/alpha/${single}`
            );
            const response = await fetching.json();
            const result = await response[0].name;
            return result;
          })
        );
        return setBorderCountries(allBorderC);
      }
      allBorderCountry();
    }
  }

  useEffect(() => {
    //default window position
    window.scrollTo(0, 0);

    //check if state is present
    if (state) {
      setData(state);
      setLoading(false);
      return;
    }
    fetch(`https://restcountries.com/v3.1/name/${searchUrl}?fullText=true`)
      .then((res) => res.json())
      .then(([country]) => {
        setData(country);
        setLoading(false);
        //handling error
      })
      .catch((error) => {setLoading(false); console.log(error)});
  }, [searchUrl, state]);

  //if country data is not preset

  return (
    <main className="main-container">
      <div className="btn-container">
        <button onClick={() => history.back()}>
          <i className="fa-solid fa-arrow-left" /> Back
        </button>
      </div>
      {loading ? (
        <LoadingDetail />
      ) : country ? (
        <div className="profile-container">
          <div className="profile-img">
            <img className="image" src={country.image} alt={country.name} />
          </div>
          <div className="profile-info-container">
            <div className="profile-title">
              <h1 className="country-title">{country.name}</h1>
            </div>
            <div className="profile-other">
              <div className="info">
                <p>
                  <b>Native Name: </b>
                  <span className="native-name">{country.nativeName}</span>
                </p>
                <p>
                  <b>Population: </b>
                  <span className="population">{country.population}</span>
                </p>
                <p>
                  <b>Region: </b>
                  <span className="region">{country.region}</span>
                </p>
                <p>
                  <b>Sub Region: </b>
                  <span className="sub-region">{country.subRegion}</span>
                </p>
                <p>
                  <b>Capital: </b>
                  <span className="capital">{country.capital}</span>
                </p>
              </div>
              <div className="info">
                <p>
                  <b>Top Level Domain: </b>
                  <span className="top-level-domain">{country.tld}</span>
                </p>
                <p>
                  <b>Currencies: </b>
                  <span className="currencies">{`${country.symbol} ${country.currency}`}</span>
                </p>
                <p>
                  <b>Languages: </b>
                  <span className="languages">{country.languages}</span>
                </p>
              </div>
            </div>
            <div className="profile-border-country">
              {country.borders ? <b>Border Countries: </b> : ""}
              {borderCountries.map((data, index) => {
                return (
                  <Link
                    key={index}
                    className="border-aHref"
                    to={`/${data.common}`}
                  >
                    {data.common}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <h1>No Country Found</h1>
      )}
    </main>
  );
};

export default CountryDetail;
