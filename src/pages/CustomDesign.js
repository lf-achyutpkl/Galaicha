import React, {Component} from 'react';
import Draggable from 'react-draggable';
import {ResizableBox} from 'react-resizable';

class App extends Component {

  constructor() {
    super();

    this._initializeData();

    this.state = {
      width: '200px',
      height: '200px',
      template: [<img src="http://lorempixel.com/50/50"/>],
    };
  }

  componentDidMount() {
    $(".resizable").resizable();
  }

  render() {
    return (
      <div style={{background: 'red', width: 961, margin: '0 auto'}}>
        <div className="container">
          <div >
            <img src="http://lorempixel.com/50/50" onClick={() => this._addImage("http://lorempixel.com/50/50")}/>
            <img src="http://lorempixel.com/60/60" onClick={() => this._addImage("http://lorempixel.com/50/50")}/>
          </div>

          <div className="resizable">
            <img src="http://lorempixel.com/50/50"/>
          </div>
        </div>

        {/*start new container*/}
        <div className="container" id="widget">
          <div className="main-image-wrp">

            <div className="editable-zone">

              <div className="draggable-zone">
                {
                  this.state.template.map((image, index) => (
                    <div className="resizable" key={index} style={{backgroundColor: 'blue'}}>
                      {image}
                    </div>
                  ))
                }
              </div>

            </div>
            <img src="http://lorempixel.com/400/400"/>
          </div>
          <button onClick={this._saveImage}>Save</button>
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
    this.setState({width, height})
  }

  _saveImage = () => {
    html2canvas($("#widget"), {
      useCORS: true,
      onrendered: function (canvas) {
        var img = canvas.toDataURL()
        window.open(img);
      }
    });
  }

  _addImage = (imgSrc) => {
    console.log(imgSrc)
    this.state.template.push(<img src={imgSrc} className="resizable"/>);
    this.setState({template: this.state.template}, () => {
      $(".resizable").resizable();
    });

  }

  _initializeData = () => {
    // $(function () {
    //   $("#resizable").resizable({
    //     animate: true,
    //     containment: "#resizable1"
    //   });
    // });
  }
}

export default App;