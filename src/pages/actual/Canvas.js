import React, {PropTypes} from 'react';

import Image from './Image';

const Canvas = ({images}) => {
  return (
    <div className="canvas">
      <div className="valid-area">
        {
          images && images.map(image => <Image imageUrl={image}/>)
        }
      </div>
    </div>
  )
    ;
}

export default Canvas;
