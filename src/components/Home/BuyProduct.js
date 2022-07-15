
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import '../../styles/home/BuyProduct.css';
import { getUserProfileData } from '../../actions/auth';
import { ownerUserProduct } from '../../actions/owner';
import { useNavigate } from 'react-router-dom';

export const BuyProduct = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { activeProduct } = useSelector( state => state.product);
    const { name, address, tarjeta_CUP, tarjeta_USD, img, mobile } = useSelector( state => state.owner);

    let token = localStorage.getItem('token');

    useEffect(() => {
      
        if (activeProduct.name){

            dispatch( getUserProfileData( activeProduct.user._id ) )
                .then( resp => {  
        
                    if (resp.ok){
                        // console.log('Inside buy Product');
                        // console.log(resp.user);
                        dispatch( ownerUserProduct(resp.user) );
                    } else {
                        console.log(resp);
                        Swal.fire('Info', 'Ha ocurrido un error, reintente de nuevo o contacte Administrador +53 54474824', 'warning');
                    }
                })
                .catch( err => console.log(err))

        } else {
            console.log('Not active Product');
            if (token) {
                navigate('/pri/');
            } else {
                navigate('/pub/');
            };
        }
      
    }, [dispatch, name, activeProduct]);
    


  return (
    <div className="div-buyProduct">
        <h3>Propietario</h3>

        <div className="info-propriety">

            {
                (img) && <li><img id="img" src={img} alt="owner-img" /></li>
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
