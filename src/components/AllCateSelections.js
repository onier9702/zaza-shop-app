
import React from 'react';

export const AllCateSelections = ({cate}) => {
    
  return (
    <option value={cate.id}>{cate.name}</option>
  )
}
