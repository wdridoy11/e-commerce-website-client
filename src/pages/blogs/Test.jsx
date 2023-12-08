import React, { useEffect, useState } from 'react'

const Test = () => {
    const [countryDetails,setCountryDetails] = useState();
    const [country, setCountry] = useState("");
    useEffect(()=>{
        fetch(`https://countriesnow.space/api/v0.1/countries/population/cities`)
        .then((res)=>res.json())
        .then((data)=>setCountryDetails(data.data))
        .catch((err)=>console.log(err.message))
    },[])
    const countryFilter = countryDetails?.filter((countries)=>countries?.country === "Bangladesh");

    //    console.log(countryDetails);
    const selectCountry = [];
   countryDetails?.map((countries)=>{
    let country = countries.country;
        if(selectCountry.indexOf(country) == -1){
            selectCountry.push(country)
        }
   })
   console.log(selectCountry);

  return (
    <div>
        {selectCountry?.map((countries)=><p>{countries}</p>)}
    </div>
  )
}

export default Test