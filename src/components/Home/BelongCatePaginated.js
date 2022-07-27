
import React from 'react';
import { useSelector } from 'react-redux';
import { ProdsBelongCate } from './ProdsBelongCate';

export const BelongCatePaginated = () => {

    const {prodsBelongCate} = useSelector( state => state.category);

  return (
    <div>
        {
            prodsBelongCate.map( p => (
                <ProdsBelongCate key={p.id} product={p} />
            ))
        }
    </div>
  )
}
