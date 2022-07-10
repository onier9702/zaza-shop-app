
import React from 'react';

import '../../styles/HomeAllCateg.css';

export const AllCateg = ({category}) => {


  return (
    <div className="cuadro-categ">
        <span>{category.name}</span>
    </div>
  )
}
