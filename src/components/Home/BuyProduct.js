
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';

import '../../styles/home/BuyProduct.css';

import { useNavigate } from 'react-router-dom';
import { getTokenFromLocalStorage } from '../../helpers/getTokenFromLocalStorage';

export const BuyProduct = () => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activeProduct } = useSelector( state => state.product);
    const { activeSeller } = useSelector( state => state.owner);

    const { name, address, tarjeta_CUP, tarjeta_USD, img, mobile } = activeSeller;

    if ( !activeProduct.name ) {
        console.log('Not active Product');
        ( getTokenFromLocalStorage() ) ? navigate('/pri/') : navigate('/pub/');
    };
      

  return (
    <div className="div-buyProduct">
        <h3>Propietario</h3>

        <div className="info-propriety">

            {
                (img) && <img id="img" src={img} alt="owner-img" />
            }

            <li>
                <h4>Nombre</h4>
                <h5>{name}</h5>
            </li>

            <li>
                <h4>Celular</h4>
                <h5>{mobile}</h5>
            </li>

            <li>
                {
                    (address) && <h4>Direccion</h4>
                }
                {
                    (address) && <h5>{address}</h5>
                }
            </li>

            <li>
                {
                    (tarjeta_CUP) && <h4>Tarjeta CUP</h4>
                }
                {
                    (tarjeta_CUP) && <h5>{tarjeta_CUP}</h5>
                }
            </li>

            <li>
                {
                    (tarjeta_USD) && <h4>Tarjeta USD</h4>
                }
                {
                    (tarjeta_USD) && <h5>{tarjeta_USD}</h5>
                }
            </li>
            



        </div>
        
    

    </div>
  )
}
