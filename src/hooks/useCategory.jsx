import React, { useEffect, useState } from 'react'

const useCategory = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/products`)
        .then((res)=>res.json())
        .then((data)=>{
            setProducts(data)
        })
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