import React from 'react';

import Edit from './buttons/Edit';
import Delete from './buttons/Delete';

function Dropdown() {
  return (
    <>
      <div className='dropdown'>
        <ul>
          <li><Edit/></li>
          <li><Delete/></li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown