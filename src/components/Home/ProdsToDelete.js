
import React from 'react';

export const ProdsToDelete = ({product, value}) => {


  return (
    <option value={value} id={product.id} >{product.name}</option>
  )
}
