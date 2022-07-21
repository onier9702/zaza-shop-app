
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import '../styles/CreateCategory.css';
import { useForm } from '../hooks/useForm';
import { AllCateSelections } from './AllCateSelections';
import { startCreateCategory } from '../actions/createCateOrProduct';
import { removeError, removeMsgGreen, removeMsgRed, setError, setMsgGreen, setMsgRed } from '../actions/ui';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CreateCategory = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories } = useSelector( state => state.category);
  const {msgGreen, msgRed} = useSelector( state => state.ui);

  const [formValue, handleInputChange, reset] = useForm( {
    name: '',
  } );

  const { name } = formValue;

  const createCate = (e) => {
    e.preventDefault();
    
    const formValid = () => {
      
      if ( name.trim().length < 2 ){
        dispatch( setMsgRed('Debe establecer un nombre correctamente '));
        return false;
      } else {
        return true;
      };
    };

    if ( formValid() ) {

      const data = {
        name: name
      }
      dispatch( startCreateCategory(data, categories) )
        .then( resp => {
          if (resp){
            dispatch( setMsgGreen('La Categoria fue Creada'));
            // name = '';
            reset();
            setTimeout(() => {
              dispatch(removeMsgGreen());
            }, 1800);
            navigate(-1);
          }
        })
        .catch( err => console.log(err));

    } else {
      reset();
      setTimeout(() => {
        dispatch( removeMsgRed());
      }, 1900);
    }

  }

  return (

    <div className="div-crearCat"> 
        <h1>Crear Categoria</h1>
        {/* <hr/> */}

        <form  className="content animate__animated animate__fadeIn animate__faster"
                onSubmit={createCate}
                type="submit"
        >
          {
              (msgGreen) && <div style={{color: 'green'}} /*className="alert-danger"*/ > { msgGreen } </div>
          }
          {
              (msgRed) && <div style={{color: 'red'}} /*className="alert-danger"*/ > { msgRed } </div>
          }
          <input
              type="text"
              name="name"
              placeholder="Nombre Categoria"
              autoComplete="off"
              value={name}
              onChange={handleInputChange}
          />

          <button
              type="submit"
              className="btn-createCate"
              onClick={createCate}
              // disabled={loading}
          >Crear Categoria</button>

        </form>

        <div className="allCategories" >
          <label htmlFor="cate">Categorias Existentes</label>
          <select  className="form-select" aria-label="Default select example" name="cate" >
            {/* <option value="CUP">CUP</option> */}
            {
              categories.map( cate => (
                <AllCateSelections key={cate.id} cate={cate} />
              ))
            }
          </select>        
        </div>
        <div className="note" >
          <h3>!! NOTA !!</h3>
          <p> No es necesario que cree una categoria si ya existe, 
            se recomienda que cheque arriba las categorias existentes</p>
        </div>

    </div>
  )
}
