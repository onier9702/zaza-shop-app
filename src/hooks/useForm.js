
import React, { useState } from 'react';

export const useForm = (initial={}) => {

    const [slots, setSlots] = useState(initial);

    const reset = () => {

        setSlots(initial);
    };

    const handleInputChange = ({target}) => {

        setSlots( {
            ...slots,
            [target.name]: target.value,    // It allows to write
        } );
    };


  return [slots, handleInputChange, reset];

}
