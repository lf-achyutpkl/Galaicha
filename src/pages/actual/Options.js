import React, {Component} from 'react';


class Options extends Component {

  constructor() {
    super();

    this.state = {
      colorSwatches: ['assets/images/red-galaicha.jpg', 'assets/images/green-galaicha.jpg', 'assets/images/navy-galaicha.jpg', 'assets/images/blue-galaicha.jpg'],
      designs: ['assets/images/design1.png', 'assets/images/design2.png', 'assets/images/design3.png', 'assets/images/design4.png', 'assets/images/design5.png'],
      arts: ['assets/images/art1.png', 'assets/images/mario.png']

    }
  }

  render() {
    return (
      <div>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#add-color" aria-controls="add-color" role="tab"
                                                        data-toggle="tab">Color</a>
          </li>
          <li role="presentation"><a href="#add-design" aria-controls="add-design" role="tab"
                                     data-toggle="tab">Design</a></li>
          <li role="presentation"><a href="#add-art" aria-controls="add-art" role="tab"
                                     data-toggle="tab">Art</a></li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="add-color">
            <div style={{padding: 20}}>
              {
                this.state.colorSwatches && this.state.colorSwatches.map((imageUrl, index) => (
                  <img src={imageUrl} width="50px" height="50px" style={{float: 'left'}} key={index}
                       onClick={() => this.props.onBackgroundSelect(imageUrl)}/>
                ))
              }
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="add-design">
            <div style={{padding: 20}}>
              {
                this.state.designs && this.state.designs.map((designUrl, index) => (
                  <img src={designUrl} width="100px" height="100px" style={{float: 'left'}} key={index}
                       onClick={() => this.props.onDesignSelect(designUrl)}/>
                ))
              }
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="add-art">
            <div style={{padding: 20}}>
              {
                this.state.arts && this.state.arts.map((artsUrl, index) => (
                  <img src={artsUrl} width="150px" height="150px" style={{float: 'left'}} key={index}
                       onClick={() => this.props.onArtImageSelect(artsUrl)}/>
                ))
              }
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Options;
