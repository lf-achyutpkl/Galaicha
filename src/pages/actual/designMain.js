import React, {Component} from 'react';

import Options from './Options';
import Canvas from './Canvas';

class DesignMain extends Component {

  constructor() {
    super();

    this.state = {
      images: ['assets/images/mario.png', 'assets/images/bird1.png']
    }
  }

  componentDidMount() {
    this._bringFront();
  }

  render() {
    return (
      <div className="container">
        <div className="workspace-wrp">
          <div className="option-container">
            <Options/>
          </div>
          <div className="canvas-container">
            <div className="canvas-wrp">
              <Canvas images={this.state.images}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _bringFront = () => {
    $('.react-draggable').on('click', function () {
      $('.selected').removeClass('selected');
      $('.selected').removeClass('closeBtn');
      $(this).addClass('selected');
      $(this).addClass('closeBtn');
      $(this).appendTo('.valid-area');
    });
  }
}

export default DesignMain;
