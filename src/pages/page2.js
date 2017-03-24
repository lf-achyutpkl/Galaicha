import React, {Component} from 'react';
import Rnd from 'react-rnd';

export default class Page2 extends Component {

	constructor(props) {
		super(props);

		this.state = {
			item: 'a'
		}


	}

	componentDidMount() {
		this.bringFront();
	}

	render(){
		return(
			<div>
				<div style={{height: 600, width: 800, border: '3px solid black', position: 'relative'}} className="workspace">
					<Rnd
					  ref={c => { this.rnd = c; }}
					  initial={{
					    x: window.innerWidth / 2 - 70,
					    y: window.innerHeight / 2 - 250,
					    width: 250,
					    height: 250,
					  }}
					  minWidth={300}
					  minHeight={160}
					  maxWidth={800}
					  maxHeight={300}
					  bounds={'parent'}
					>
					  <img src="/assets/images/bird1.png" style={{width: '100%', height: '100%'}} draggable="false"/>
					</Rnd>

					<Rnd
					  ref={c => { this.rnd = c; }}
					  initial={{
					    x: window.innerWidth / 2 - 300,
					    y: window.innerHeight / 2 - 10,
					    width: 250,
					    height: 250,
					  }}
					  minWidth={300}
					  minHeight={160}
					  maxWidth={800}
					  maxHeight={300}
					  bounds={'parent'}
					>
					  <img src="/assets/images/mario.png" style={{width: '100%', height: '100%'}} draggable="false"/>
					</Rnd>

					<Rnd
					  ref={c => { this.rnd = c; }}
					  initial={{
					    x: window.innerWidth / 2 - 600,
					    y: window.innerHeight / 2 - 200,
					    width: 250,
					    height: 250,
					  }}
					  minWidth={300}
					  minHeight={160}
					  maxWidth={800}
					  maxHeight={300}
					  bounds={'parent'}
					>
					  <img src="/assets/images/bird2.png" style={{width: '100%', height: '100%'}} draggable="false"/>
					</Rnd>
				</div>
				<button onClick={this._saveImage}>Save</button>
				<button onClick={this._zoomIn}>Zoom + </button>
				<button onClick={this._zoomOut}>Zoom - </button>
			</div>
		);
	}

	bringFront = () => {
	    $('.react-draggable').on('click', function () {
	    	$('.selected').removeClass('selected');
	    	$(this).addClass('selected');
	       	$(this).appendTo('.workspace');
	    });
	}

	 _saveImage = () => {
	 	$('.selected').removeClass('selected');
	    html2canvas($(".workspace"), {
	      useCORS: true,
	      onrendered: function (canvas) {
	        var img = canvas.toDataURL()
	        window.open(img);
	      }
	    });
  	}

  	_zoomIn = () => {
  		$('.workspace').animate({ 'zoom': 1.4 }, 400);
  	}

  	_zoomOut = () => {
  		$('.workspace').animate({ 'zoom': 1 }, 400);
  	}


}

