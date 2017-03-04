import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {ResizableBox} from 'react-resizable';

class App extends Component {

  constructor() {
    super();

    this.state = {
      width: '200px',
      height: '200px',
      template: [<img src="http://lorempixel.com/50/50" classID="0" draggable='false'/>,
        <img src="http://lorempixel.com/50/50" classID="0" draggable='false'/>],
    };
  }


  render() {
    return (
      <div style={{background: 'red', width: 961, margin: '0 auto'}}>
        <div className="container">

          <ResizableBox width={200} height={200} lockAspectRatio
                        minConstraints={[100, 100]} maxConstraints={[300, 300]}
                        onResizeStop={(ev) => this._handleResize(ev)}
          >
            <img src="http://lorempixel.com/200/200" style={{width: this.state.width, height: this.state.height}}/>
          </ResizableBox>

          <div >
            <img src="http://lorempixel.com/50/50"/>
          </div>
        </div>

        <div className="container" id="widget">
          <div className="main-image-wrp">

            <div className="editable-zone">

              <div className="draggable-zone">
                {
                  this.state.template.map((image, index) => (
                    <Draggable key={index} bounds="parent">
                      <div className='box'>
                        {image}
                      </div>
                    </Draggable>
                  ))
                }
              </div>

            </div>
            <img src="http://lorempixel.com/400/400" className="main-image"/>
          </div>
          <button onClick={this._saveImage}>Save</button>
        </div>


        <div classID="khatra">

        </div>
      </div>

    )
  };

  _handleResize = (event) => {
    let parentNodeStyle = event.target.parentNode.style;
    let width = parentNodeStyle.width;
    let height = parentNodeStyle.height;

    console.log(height, ' , ', width)
    if (height === '' || width === '') return;

    console.log(height, ' , ', width)

    this.setState({width, height})

  }

  _saveImage = () => {
    html2canvas($("#widget"), {
      useCORS: true,
      onrendered: function (canvas) {
        console.log(canvas);
        // document.body.appendChild(canvas);

        // Convert and download as image
        // Canvas2Image.saveAsPNG(canvas);
        // Clean up
        //document.body.removeChild(canvas);

        var img = canvas.toDataURL()
        window.open(img);
      }
    });
  }
}

export default App;