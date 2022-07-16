
import React from 'react';

export const AllCateSelections = ({cate, value}) => {
    
  return (
    <option value={value}>{cate.name}</option>
  )
}
