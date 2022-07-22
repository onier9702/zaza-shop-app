
import React from 'react';

export const AllUserProds = ({product, value}) => {

    return (
        <option value={value}>{product.name}</option>
      )
}
