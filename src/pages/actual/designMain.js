import React, {Component} from 'react';

import Options from './Options';
import Canvas from './Canvas';

class DesignMain extends Component {

  constructor() {
    super();

    this.state = {
      artImages: [],
      designImage: '',
      backgroundImage: 'assets/images/red-galaicha.jpg'
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
            <Options
              onDesignSelect={this._addDesignOnCanvas}
              onBackgroundSelect={this._changeCanvasBackground}
              onArtImageSelect={this._addArtImage}
            />
          </div>
          <div className="canvas-container">
            <div className="canvas-wrp">
              <Canvas
                images={this.state.artImages}
                designUrl={this.state.designImage}
                backgroundImage={this.state.backgroundImage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _bringFront = () => {
    // $('.react-draggable').on('click', function () {
    //   $('.selected').removeClass('selected');
    //   $('.selected').removeClass('closeBtn');
    //   $(this).addClass('selected');
    //   $(this).addClass('closeBtn');
    //   $(this).appendTo('.valid-area');
    // });
    $(document.body).on('click', '.react-draggable', function () {
      $('.selected').removeClass('selected');
      $('.selected').removeClass('closeBtn');
      $(this).addClass('selected');
      $(this).addClass('closeBtn');
      $(this).appendTo('.valid-area');
    });
  }

  _addDesignOnCanvas = (designUrl) => {
    this.setState({designImage: designUrl})
  }

  _changeCanvasBackground = (imageUrl) => {
    this.setState({backgroundImage: imageUrl});
  }

  _addArtImage = (imageUrl) => {
    let listOfArtImages = this.state.artImages.concat(imageUrl);
    this.setState({artImages: listOfArtImages});
  }
}

export default DesignMain;
