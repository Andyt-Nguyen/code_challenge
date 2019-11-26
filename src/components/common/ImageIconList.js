import React from 'react';
import ImageIcon from './ImageIcon';

const styles = {
  flexWrap: {
    display: 'flex', 
    flexWrap: 'wrap'
  }
};

export default ({ data, onClick, style, Icon, imageStyles }) => {
  return (
    <div style={{ ...styles.flexWrap, ...style }}>
      {
        data.map(a => (
          <ImageIcon
            imageStyles={imageStyles}
            key={a.name}
            onClick={() => onClick(a.name)} 
            title={a.name}
            url={a.url}
            Icon={Icon}
          />
        ))
      }
    </div>
  );
}
