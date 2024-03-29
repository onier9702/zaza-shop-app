
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import Swal from 'sweetalert2';
import '../../styles/home/SingleCategory.css';
import { startFetchProdsBelongCate } from '../../actions/homeEvents';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';
// import { BelongCatePaginated } from './BelongCatePaginated';
import { ProdsBelongCate } from './ProdsBelongCate';
import { BelongCatePaginated } from './BelongCatePaginated';
import { useGetProductsPaginatedQuery } from '../../api/prodsBelongCateApi';


export const SingleCategoryHome = () => {
    
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { activeCategory /*prodsBelongCate, total*/ } = useSelector( state => state.category);
  const { name, id } = activeCategory;
  // const { products } = useSelector(state => state.product);

  // const [previewProds, setPreviewProds] = useState(prodsBelongCate);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if ( !name ){
        ( getTokenFromLocalStorage() ) ? navigate('/pri/') : navigate('/pub/');
    }
    
  }, [name, navigate])

  // useEffect(() => {
    
  //   dispatch( startFetchProdsBelongCate(id,/* previewProds,*/ page) );
    
  // }, [setPage, dispatch, page]);

    
  const { data, isLoading } = useGetProductsPaginatedQuery({id, page});
  let products = [];
  let total;
  if (data){
    products = data.products;
    total    = data.total; 
  }
  // console.log(data);

  const handleSeeMore = () => {
    setPage(page + 1);
  };

  const handleSeeLess = () => {

    if (page > 0){
      setPage(page - 1);
    };
  };
  

  const handleReturn = () => {
      navigate(-1);
  };

  return (
    <div className="single-category">
        <i className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
        <div className="info-category">

          <h3 style={{color: '#219ebc', marginBottom: 18}} >{name}</h3>
          {
            (products) && products?.map( p => (
                <ProdsBelongCate key={p.id} product={p} />
            ))
          }
          
          {/* {
            prodsBelongCate.map( prod => (
                <ProdsBelongCate key={prod.id} product={prod} />
            ))
          } */}
        {/* <BelongCatePaginated id={id} page={page} /> */}
        {/* {
          useEffect(() => {
    
            <BelongCatePaginated id={id} page={page} />
            
          }, [id,page])
        } */}
        </div>

        <div className="div-buttons">
            <div className="toCenter">
              <ul>
                <li>
                  <button className="btn btn-info"
                        type="button" 
                        onClick={handleSeeLess}
                        id="btn-SeeLess"
                        disabled={ (page === 0) ? true : false}
                  ><i className="bi bi-arrow-left-circle" style={{fontSize: '1.3rem'}}></i></button>
                </li>

                <li>
                  <button className="btn btn-info"
                          type="button" 
                          onClick={handleSeeMore}
                          id="btn-SeeMore"
                          disabled={ ((page * 2) > (total - 2) ) ? true : false }
                  ><i className="bi bi-arrow-right-circle" style={{fontSize: '1.3rem'}}></i></button>
                </li>
              </ul>
            </div>
        </div>

    </div>
  )
}
