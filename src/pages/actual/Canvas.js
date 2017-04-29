import React, {PropTypes} from 'react';

import Image from './Image';

const Canvas = ({images, backgroundImage, designUrl}) => {
  return (
    <div className="canvas" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="valid-area">
        {
          images && images.map((image, index) => <Image imageUrl={image} key={index}/>)
        }
      </div>
      <div className="design-wrp">
        { designUrl &&
        <img src={designUrl} width="510px" height="305px" style={{'userSelect': 'none'}} draggable="false"/>}
      </div>
    </div>
  )
    ;
}

export default Canvas;
