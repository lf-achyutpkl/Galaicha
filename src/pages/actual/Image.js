import React from 'react';
import Rnd from 'react-rnd';

import closeBtn from '../../../assets/images/close-btn.png';

const Image = ({imageUrl}) => (
  <Rnd
    initial={{
      x: 0,
      y: 0,
      width: 150,
      height: 150,
    }}
    maxWidth={300}
    maxHeight={300}
    bounds={'parent'}
    lockAspectRatio
  >
    <div className="close-btn">
      <img src={closeBtn} alt="Click to remove image" style={{width: '30px', height: '30px'}}/>
    </div>
    <img src={imageUrl} style={{width: '100%', height: '100%', 'userSelect': 'none'}} draggable="false"/>
  </Rnd>
);

export default Image;
