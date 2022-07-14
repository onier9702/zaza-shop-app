
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { getUserProfileData } from '../../actions/auth';
import { ownerUserProduct } from '../../actions/owner';

export const BuyProduct = () => {

    const { activeProduct } = useSelector( state => state.product);
    const { name, address, tarjeta_CUP, tarjeta_USD } = useSelector( state => state.owner);

    const dispatch = useDispatch();

    useEffect(() => {
      
    
        dispatch( getUserProfileData( activeProduct.user._id ) )
            .then( resp => {
    
                if (resp.ok){
                    dispatch( ownerUserProduct(resp.user) );
                } else {
                    Swal.fire('Info', 'Ha ocurrido un error, reintente de nuevo o contacte Administrador +53 54474824', 'warning');
                }
            })
            .catch( err => console.log(err))
      
    }, [dispatch])
    


  return (
    <div>
        <h3>Info Propietario</h3>
        <h4>{` Nombre: ${name}`}</h4>
        <h4>{` Direccion: ${address}`}</h4>
        <h4>{` Tarjeta CUP: ${tarjeta_CUP}`}</h4>
        <h4>{` Tarjeta USD: ${tarjeta_USD}`}</h4>

    </div>
  )
}
