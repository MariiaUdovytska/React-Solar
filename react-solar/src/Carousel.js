import React from 'react';
import arrowLeft from './img/arrow/arrowLeft.svg';
import arrowRight from './img/arrow/arrowRight.svg';

class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {move:0, postition:0, touchPosition: null};
	}

	leftButtonClick = () =>{
		if(this.state.postition >= this.props.children.length - 1)
			return;
		let lastMove = this.state.move;
		let lastPos = this.state.postition;
		this.setState({move:lastMove - 100, postition: lastPos + 1});
	}

	rigthButtonClick = () =>{
		if(this.state.postition < 1)
			return;
		let lastMove = this.state.move;
		let lastPos = this.state.postition;
		this.setState({move:lastMove + 100, postition: lastPos - 1});
	}

	handleTouchStart = (e) => {
		const touchDown = e.touches[0].clientX
		this.setState({touchPosition: touchDown});
	}

	handleTouchMove = (e) => {
		const touchDown = this.state.touchPosition

		if(touchDown === null) {
			return
		}

		const currentTouch = e.touches[0].clientX
		const diff = touchDown - currentTouch

		if (diff > 5) {
			this.leftButtonClick();
		}

		if (diff < -5) {
			this.rigthButtonClick();
		}

		this.setState({touchPosition: null});
	}

	render(){
		let value = `translateX(${this.state.move}%)`;
		let itemsList= [];
		for(let child= 0; child< this.props.children.length; child++){
			itemsList.push(<div key={child} className='carousel__content-item' style={{transform: value}}>{this.props.children[child]}</div>)
		}
		return(
			<div className='carousel' onTouchStart={this.handleTouchStart} onTouchMove={this.handleTouchMove}>
				<div className='carousel__content'>
					<div className='carousel__content-items'>
						{itemsList}
					</div>
				</div>
				<div className='carousel__btns' style={this.props.marginForBtns}>
					<button type="button" className='carousel__btns-left' onClick={this.rigthButtonClick}>
						<img src={arrowLeft} alt="Arrow left" width={40}></img>
					</button>
					<button type="button" className='carousel__btns-right' onClick={this.leftButtonClick}>
						<img src={arrowRight} alt="Arrow right" width={40}></img>
					</button>
				</div>
			</div>
		)
	}
}

export default Carousel;