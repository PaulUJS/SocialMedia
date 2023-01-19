import React, { useState } from 'react';

import Edit from '../buttons/Edit';
import Delete from '../buttons/Delete';

function Dropdown({ posts }) {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
      <button onClick={() => setIsShown(!isShown)}>Options</button>
      {isShown &&
        <div className='dropdown'>
          <ul>
            <li><Edit posts={posts}/></li>
            <li><Delete posts={posts}/></li>
          </ul>
        </div>
      }
    </>
  )
}

export default Dropdown