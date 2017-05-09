import React from 'react';
import Rnd from 'react-rnd';

import closeBtn from '../../../assets/images/close-btn.png';

const Image = ({imageUrl, removeArtImage, toggleBorderLine}) => (
  <Rnd
    initial={{
      x: 0,
      y: 0,
      width: 100,
      height: 100
    }}
    minHeight={30}
    minWidth={30}
    maxWidth={300}
    maxHeight={300}
    bounds={'parent'}
    lockAspectRatio
    onDragStop={() => toggleBorderLine()}
    onDragStart={() => toggleBorderLine()}
    onResizeStop={() => toggleBorderLine()}
    onResizeStart={() => toggleBorderLine()}
  >
    <div className="close-btn" onClick={() => {
      removeArtImage(imageUrl)
    }}>
      <img src={closeBtn} style={{width: '30px', height: '30px'}}/>
    </div>
    <img src={imageUrl} style={{width: '100%', height: '100%', 'userSelect': 'none'}} draggable="false"/>
  </Rnd>
);

export default Image;
