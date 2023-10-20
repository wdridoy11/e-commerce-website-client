// import { useContext } from "react";
// // import { AuthContext } from "../context/AuthProvider";
// import Swal from "sweetalert2";

// export const addData=(user,priviousData, newData, quantity, apiPath,)=>{
//     const {brand, product_name, price, _id, product_image} = newData;
//     // const {user}= useContext(AuthContext)
//     const dataIdMatch = priviousData.find((item)=> item.productId === _id && item.email === user?.email);
//     if(dataIdMatch){
//         Swal.fire({
//             position: 'top-end',
//             icon: 'error',
//             title: 'Your already added',
//             showConfirmButton: false,
//             timer: 1500
//         })
//     }else{
//         if(user && user?.email){
//             const productItem ={productId: _id,email:user?.email, quantity, brand, product_image, product_name, price}
//             fetch(`https://e-commerce-website-server-pdooyqnqc-developersridoy-gmailcom.vercel.app/${apiPath}`,{
//                 method:"POST",
//                 headers:{
//                     "content-type": "application/json"
//                 },
//                 body: JSON.stringify(productItem)
//             })
//             .then((res)=>res.json())
//             .then((data)=>{
//                 if(data.insertedId){
//                     // refetch();
//                     Swal.fire({
//                         position: 'top-end',
//                         icon: 'success',
//                         title: 'New item added success',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 }
//             })
//         }else{
//             // openModal();
//         }            
//     }
// }