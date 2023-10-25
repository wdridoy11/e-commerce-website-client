import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../../components/productCard/ProductCard';
import { BiSolidRightArrow } from 'react-icons/bi';
import { getData } from '../../api/utils';
import { AuthContext } from '../../context/AuthProvider';
import useProducts from '../../api/useProducts';
import Sort from '../../components/sort/Sort';


const Shop = () => {

    const [selectedCategories, setSelectedCategories] = useState([]);
    // const [products,setProducts] = useState([]);
    // min price and max price state 
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    // price filter data
    const [products] = useProducts();
    const [filteredProducts, setFilteredProducts] = useState(products);
    const {searchValue,sortByPrice} = useContext(AuthContext)

    useEffect(()=>{
        if(sortByPrice.length>0){
            setFilteredProducts(sortByPrice)
        }else if(sortByPrice.length === 0){
            setFilteredProducts(products)
        }
    },[sortByPrice])


// console.log(sortByPrice);

    // setFilteredProducts(products)
// console.log(searchValue)

    // console.log(searchValue)
    // const handleSearch = () =>{
    //     fetch(`${process.env.REACT_APP_API_URL}/search_product/${searchValue}`)
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setFilteredProducts(data)
    //     })
    //     .catch((err)=>console.log(err.message))
    // }
    useEffect(()=>{
        fetch(`${process.env.REACT_APP_API_URL}/search_product/${searchValue}`)
        .then((res)=>res.json())
        .then((data)=>{
            // setFilteredProducts(data)
            // console.log("res",data)
        })
        .catch((err)=>console.log(err.message))
    },[searchValue])





    // data loading form database
    // useEffect(()=>{
    //     getData("products")
    //     .then((data)=>{
    //         setProducts(data)
    //         setFilteredProducts(data)
    //     })
    //     .catch((err)=>console.log(err.message))
    // },[])

    // handle min price and max price filter
    const handleFilterPrice= (e)=>{
        e.preventDefault();
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        const filteredData = products.filter((product) => {
          const price = parseFloat(product.price);
          const priceMatch = isNaN(min) || isNaN(max) || (price >= min && price <= max);
          const categoryMatch =
            selectedCategories.length === 0 || selectedCategories.includes(product.category);
          return priceMatch && categoryMatch;
        });
        setFilteredProducts(filteredData);
    }
    // const handleFilterPrice= (e)=>{
    //     e.preventDefault();
    //     const min = parseFloat(minPrice);
    //     const max = parseFloat(maxPrice);
    //     const filteredData = products.filter((product)=>{
    //         const price = parseFloat(product.price);
    //         return price >= min || price <= max;
    //     })
    //     setFilteredProducts(filteredData)
    // }

    // product category name find
    let categoryName =[];
    for(let i = 0 ;i<products.length;i++){
        let category = products[i].category;
        if(categoryName.indexOf(category) == -1){
            categoryName.push(category)
        }
    }


    // const uniqueCategories = Array.from(new Set(products.map((product) => product.category)));

    const handleCategoryChange = (e) => {
        const category = e.target.value;
        if (e.target.checked) {
          setSelectedCategories([...selectedCategories, category]);
        } else {
          setSelectedCategories(selectedCategories.filter((c) => c !== category));
        }
      };
// console.log(uniqueCategories)

    // category value selected
    // const handleCategoryChange = (e) => {
    //     const category = e.target.value;
    //     if (e.target.checked) {
    //       setSelectedCategories((prevSelectedCategories) => [
    //         ...prevSelectedCategories, category ]);
    //     } else {
    //       setSelectedCategories((prevSelectedCategories) =>
    //         prevSelectedCategories.filter((c) => c !== category)
    //       );
    //     }
    //   };

    //   category filter system added
 
    // useEffect(()=>{
    //     if(selectedCategories.length === 0){
    //         setFilteredProducts(products)
    //     }else{
    //         if(minPrice == '' && maxPrice == ''){
    //             console.log('yes')
    //             const filtered = products.filter((product)=>selectedCategories.includes(product.category));
    //             setFilteredProducts(filtered);
    //         }else{
    //             const filtered = filteredProducts.filter((product)=>selectedCategories.includes(product.category));
    //             setFilteredProducts(filtered);
    //         }
    //     }
    // },[selectedCategories, products])

  return (
    <div>
        <div className='px-20 py-10'>
            <div className='grid grid-cols-5 gap-5'>
                <div className=' bg-white rounded p-5'>
                    {/* filter by price */}
                    <div className='border-b pb-5'>
                        <h3 className='text-lg font-medium text-black mb-2'>Price</h3>
                        <form onSubmit={handleFilterPrice} className='flex gap-2'>
                            <div className='grid grid-cols-2 gap-3'>
                                <input 
                                    type="number" 
                                    name="startPrice" 
                                    id="startPrice" 
                                    value={minPrice}
                                    onChange={(e)=>setMinPrice(e.target.value)}
                                    className='w-full border px-2 py-1 border-slate-400 focus:outline-none'
                                    placeholder='Min'
                                    required
                                />
                                <input 
                                    type="number" 
                                    name="endPrice" 
                                    id="endPrice" 
                                    value={maxPrice}
                                    onChange={(e)=>setMaxPrice(e.target.value)}
                                    className='w-full border px-2 py-1 border-slate-400 focus:outline-none'
                                    placeholder='Max'
                                />
                            </div>
                            <button type='submit' className='p-2 bg-blue-500 text-white rounded-sm'>
                                <BiSolidRightArrow></BiSolidRightArrow>
                            </button>
                        </form>
                    </div>
                    {/* filter by category Name */}
                    <div className='pt-4 border-b pb-3'>
                        <h3 className='text-lg font-medium text-black mb-2'>Category</h3>
                        <div>
                            {categoryName.map((category,index)=><div key={index} className='flex justify-between'>
                                <div className='flex gap-2 mb-1'>
                                    <input 
                                        type="checkbox" 
                                        className='checkbox checkbox-sm checkbox-[#ddd] rounded-sm' 
                                        name="category" 
                                        id={`category`}
                                        value={category}
                                        onChange={handleCategoryChange}
                                        checked={selectedCategories.includes(category)}
                                    />
                                    <p>{category}</p>
                                </div>
                                <div>
                                    <p>1</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>
                <div className='col-span-4'>
                    {/* <div className='bg-white px-5 py-2 mb-5 grid grid-cols-2'>
                        <div></div>
                        <div className='text-end'>
                            <span className='text-lg font-medium'>Sort By</span>
                            <select className="select select-bordered w-full max-w-xs focus:outline-none ml-2">
                                <option>Default</option>
                                <option value={"LW"}>Low to High (Price)</option>
                                <option value={"HL"}>High to Low (Price)</option>
                            </select>
                        </div>
                    </div> */}
                    <Sort></Sort>
                    <div className='grid grid-cols-5 gap-5'>
                        {filteredProducts.map((product,index)=><ProductCard product={product} key={index}></ProductCard>)}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop