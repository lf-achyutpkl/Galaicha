import React, {PropTypes} from 'react';

import Image from './Image';

const Canvas = ({images, backgroundImage, designUrl, removeArtImage, isBorderLineVisible, toggleBorderLine}) => {
  return (
    <div className="canvas" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="valid-area" style={{borderColor: isBorderLineVisible ? 'white' : 'transparent'}}>
        {
          images && images.map((image, index) => <Image toggleBorderLine={toggleBorderLine} imageUrl={image} key={index}
                                                        removeArtImage={removeArtImage}/>)
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
