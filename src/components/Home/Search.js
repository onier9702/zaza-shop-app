
import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/home/DivSearch.css';
import { ProdsBelongCate } from './ProdsBelongCate';

export const Search = () => {

    const { allResults } = useSelector( state => state.search);

  return (
    <div className="divBusqueda">
        <h1>Busqueda</h1>
        <hr />

        <div className="div-prodFounded" >
            {
                allResults.map( res => (
                    <ProdsBelongCate product={res} key={res.id} />
                ) )
            }
        </div>

    </div>
  )
}
