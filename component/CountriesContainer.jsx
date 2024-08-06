import React, { useEffect, useState } from "react";
import Card from "./Card";
import LoadingCard from "./LoadingCard";
import useFilter from "../hooks/useFilter";

const CountriesContainer = ({ request, region }) => {
  const [AllCountry, setAllCountry] = useState(null);
  const shimmerComponents = Array.from({ length: 10 }, (_, index) => (
    <LoadingCard key={index} />
  ));



  useEffect(() => {
    try{
       fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setAllCountry(data));
    }catch(error){
      console.log("error from fetch",error)
    }
  }, []);

  return (
    <>
      <div className="countries-container">
        {AllCountry == null
          ? [shimmerComponents]
          : useFilter(AllCountry,request,region).map((singleData, index) => {
              return <Card key={index} data={singleData} />;
            })}
      </div>
    </>
  );
};


export default CountriesContainer;
