
// import React from 'react';
// import { useSelector } from 'react-redux';

// import { useGetProductsPaginatedQuery } from '../../api/prodsBelongCateApi';
// import { ProdsBelongCate } from './ProdsBelongCate';

// export const BelongCatePaginated = ({id, page}) => {
    
//     const { data, isLoading } = useGetProductsPaginatedQuery({id, page});
//     console.log(data);

//   return (
//     <div>
//         {
//             ( data.products ) && data.products.map( p => (
//                 <ProdsBelongCate key={p.id} product={p} />
//             ))
//         }
//     </div>
//   )
// }
