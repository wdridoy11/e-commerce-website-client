import React, { useEffect, useState } from 'react'
import { getData } from '../api/utils';

const useCategory = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
       getData("products")
        .then((data)=>setProducts(data))
        .catch((err)=>console.log(err.message))
    },[])

    let categoryName =[];
    for(let i = 0 ;i<products.length;i++){
        let category = products[i].category;
        if(categoryName.indexOf(category) == -1){
            categoryName.push(category)
        }
    }
  return [categoryName]
}

export default useCategory