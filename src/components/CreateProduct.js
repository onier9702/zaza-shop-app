
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';


import '../styles/CreateProduct.css';
import { removeMsgGreen, removeMsgRed, setMsgGreen, setMsgRed } from '../actions/ui';
import { useForm } from '../hooks/useForm';
import { AllCateSelections } from './AllCateSelections';
import { startCreateProduct } from '../actions/createCateOrProduct' 
import { useNavigate } from 'react-router-dom';

export const CreateProduct = () => {

  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { categories } = useSelector( state => state.category);
  const { products } = useSelector( state => state.product);
  const {msgGreen, msgRed, loading} = useSelector( state => state.ui);

  const [formValue, handleInputChange, reset] = useForm( {
    name: '',
    precio: '',
    category: '',
    amount: '',
    description: ''
  } );

  const { name, precio, category, amount, description } = formValue;

  /* This Laptop is new and present a good health battery 
  life, it will give you with cover protection and mica. 
  It also has 1 year of warranty. */

  const createProduct = (e) => {
    e.preventDefault();

    const formValid = () => {
      
      if ( name.trim().length < 2 ){
        dispatch( setMsgRed('Debe establecer un nombre correctamente '));
        return false;

      }else if ( precio.trim().length === 0 ){
          dispatch( setMsgRed('Debe establecer un Precio'));
          return false;

      } else if ( Number(amount) < 1 ) {
        dispatch( setMsgRed('La cantidad que existe del producto es incorrecta '));
        return false;
      
      } else {
        return true;
      };
    };

    if ( formValid() ) {

      let data = {
        name,
        precio,
        category,
        amount
      };
      if (category.length === 0){
        data.category = categories[0].id;
      }
      if (description) {
          data.description = description;
      };

      dispatch( startCreateProduct( data, products) )
        .then( resp => {
          if (resp){
            dispatch( setMsgGreen('El Producto fue Creado'));
            reset();
            setTimeout(() => {
              dispatch(removeMsgGreen());
            }, 1800);
          }
        })
        .catch( err => console.log(err));

    } else {
      setTimeout(() => {
        dispatch( removeMsgRed());
      }, 1900);
    }

  };
  

  return (
    <div className="div-createProduct">
        <h1>Crear Producto</h1>

        <form  className="content animate__animated animate__fadeIn animate__faster"
                onSubmit={createProduct}
                type="submit"
        >
          {
              (msgGreen) && <div style={{color: 'green'}} /*className="alert-danger"*/ > { msgGreen } </div>
          }
          {
              (msgRed) && <div style={{color: 'red'}} /*className="alert-danger"*/ > { msgRed } </div>
          }
          <h6>Nombre</h6>
          <input
              type="text"
              name="name"
              placeholder="Nombre Producto"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
          />

          <h6>Precio</h6>
          <input
              type="text"
              name="precio"
              placeholder="Precio"
              autoComplete="off"
              value={precio}
              onChange={handleInputChange}
          />

          <div className="allCategories" >
            <label htmlFor="cate">Escoja su categoria</label>
            <select onChange={handleInputChange} className="form-select" aria-label="Default select example" name="category" >
              {/* <option value="CUP">CUP</option> */}
              {
                categories.map( cate => (
                  <AllCateSelections value={cate.id} key={cate.id} cate={cate} />
                ))
              }
            </select>        
          </div>
          
          <h6>Cantidad</h6>
          <input
              type="number"
              name="amount"
              placeholder="1"
              autoComplete="off"
              value={amount}
              onChange={handleInputChange}
          />

          <h6>Describir Producto</h6>
          <textarea
              type="text"
              name="description"
              placeholder="Descripcion"
              autoComplete="off"
              value={description}
              onChange={handleInputChange}
          />

          <button
              type="submit"
              className="btn-createCate"
              onClick={createProduct}
              disabled={loading}
          >Crear Producto</button>

        </form>
    </div>
  )
}
