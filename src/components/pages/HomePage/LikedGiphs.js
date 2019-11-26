import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Image } from '../../common';

export default ({ data, unLike }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', height: '80vh', overflow:'scroll' }}>
      {
        data.map(a => (
            <div key={a.name} style={{ position: 'relative', marginLeft: 5 }}>
              <FaTrashAlt 
                style={{position:'absolute', margin: 10, color: 'red'}} 
                onClick={() => unLike(a.name)} />
              <Image alt={a.name} url={a.url} />
            </div>
        ))
      }
    </div>
  );
}