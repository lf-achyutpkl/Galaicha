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
                removeArtImage={this._removeArtImage}
                backgroundImage={this.state.backgroundImage}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _bringFront = () => {
    $(document.body).on('click', '.react-draggable', function () {
      $('.selected').removeClass('selected');
      $(this).addClass('selected');
      $(this).appendTo('.valid-area');
    });

    $(document.body).on('click', '.design-wrp', function () {
      $('.selected').removeClass('selected');
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

  _removeArtImage = (imageUrl) => {
    let updatedArtList = this.state.artImages.filter(artImageUrl => (artImageUrl !== imageUrl));
    this.setState({artImages: updatedArtList});
  }
}

export default DesignMain;
