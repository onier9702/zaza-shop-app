
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../../styles/auth/MyOwnProds.css';
import { AllOwnProds } from './AllOwnProds';
import { useNavigate } from 'react-router-dom';
import { ProdsToDelete } from './ProdsToDelete';
import { useForm } from '../../hooks/useForm';
import { startDeleteProduct } from '../../actions/userProduct';
import { removeMsgGreen, setMsgGreen } from '../../actions/ui';
import Swal from 'sweetalert2';

export const MyOwnProducts = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userAllproducts} = useSelector(state => state.userProd);
  const {msgGreen} = useSelector(state => state.ui);
  const {products} = useSelector(state => state.product);


  const [formValue, handleInputChange] = useForm({
    id: ''
  });

  const {id} = formValue;
  
  useEffect(() => {

    if ( !userAllproducts[0] ){
      navigate('/pri/user');
    }
  }, [userAllproducts,navigate])
  

  const handleReturn = () => {
    navigate(-1);
  };

  const handleDelete = () => {
    dispatch( startDeleteProduct(id, products) )
      .then( resp => {
        if (resp.ok){
          dispatch( setMsgGreen('Producto Borrado') );
          setTimeout(() => {
            dispatch(removeMsgGreen());
          }, 2000);
          setTimeout(() => {
            navigate('/pri/user');
          }, 500);
        } else {
          Swal.fire( 'Error', resp.msg, 'error' );
        }
      } )
      .catch( err => console.log(err))

  } ; 


  return (
    <>
      <div className="div-MyProducts">

        <div className="cabecera-misProductos">
          <i id="return-i" className="bi bi-arrow-left-short" onClick={handleReturn} ></i>
          <div className="div-delete-select" >
            <select className="form-select" name="id" onChange={handleInputChange} aria-label="Default select example">
              {
                  userAllproducts.map( p => (
                    <ProdsToDelete key={p.id} value={p.id} product={p} />
                  ))
              }
            </select>
            <i className="bi bi-trash3-fill" id="trash" onClick={handleDelete} ></i>
          </div>
        </div>

        <h1>Mis Productos</h1>

        
        {
          (msgGreen) && <h3 style={{color: 'greenyellow', marginLeft: 20}} >{msgGreen}</h3>
        }

        {
            userAllproducts.map( pro => (
                <AllOwnProds key={pro.id} product={pro} />
            ))
        }        

      </div>
    </>
  )
}
