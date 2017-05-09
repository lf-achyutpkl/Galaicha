import React, {Component} from 'react';
import html2canvas from 'html2canvas';

import Options from './Options';
import Canvas from './Canvas';

class DesignMain extends Component {

  constructor() {
    super();

    this.state = {
      artImages: [],
      designImage: '',
      isBorderLineVisible: false,
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
              saveDesign={this._saveDesign}
            />
          </div>
          <div className="canvas-container">
            <div className="canvas-wrp">
              <Canvas
                images={this.state.artImages}
                designUrl={this.state.designImage}
                removeArtImage={this._removeArtImage}
                toggleBorderLine={this._toggleBorderLine}
                backgroundImage={this.state.backgroundImage}
                isBorderLineVisible={this.state.isBorderLineVisible}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  _bringFront = () => {
    $(document.body).on('click', '.react-draggable', function () {
      $('.selected .close-btn').css('display', 'none');   // Hide previous remove button
      $('.selected').removeClass('selected');             // Remove previous selected class
      $(this).addClass('selected');                       // Add selected class to current art

      $('.selected .close-btn').css('display', 'block');  // Display remove button to selected art

      $(this).appendTo('.valid-area');                    // Bring selected art to top
    });

    $(document.body).on('click', '.design-wrp', function () {   // Handle when user click on valid area other than art
      $('.selected .close-btn').css('display', 'none');         // Hide remove button
      $('.selected').removeClass('selected');                   // Remove selected class
    });
  };

  _addDesignOnCanvas = (designUrl) => {
    this.setState({designImage: designUrl})
  };

  _changeCanvasBackground = (imageUrl) => {
    this.setState({backgroundImage: imageUrl});
  };

  _addArtImage = (imageUrl) => {
    let listOfArtImages = this.state.artImages.concat(imageUrl);
    this.setState({artImages: listOfArtImages});
  };

  _removeArtImage = (imageUrl) => {
    let updatedArtList = this.state.artImages.filter(artImageUrl => (artImageUrl !== imageUrl));
    this.setState({artImages: updatedArtList});
  };

  _saveDesign = () => {
    $('.selected .close-btn').css('display', 'none');
    $('.selected').removeClass('selected');

    html2canvas($(".canvas"), {
      useCORS: true,
      onrendered: function (canvas) {
        var img = canvas.toDataURL()
        window.open(img);
      }
    });
  };

  _toggleBorderLine = () => {
    this.setState({
      isBorderLineVisible: !this.state.isBorderLineVisible
    });
  }
}

export default DesignMain;
