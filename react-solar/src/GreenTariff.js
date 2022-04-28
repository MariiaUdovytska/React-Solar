import React from 'react';
import './css/greenTariff.css';

class GreenTariff extends React.Component {
	constructor(props) {
		super(props);
		this.state = {move:0, postition:0};
		console.log(props.children);
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

	render(){
		let value = `translateX(${this.state.move}%)`;
		let itemsList= [];
		for(let child= 0; child< this.props.children.length; child++)
		{
			itemsList.push(<div key={child} className='test-animation' style={{transform: value}}>{this.props.children[child]}</div>)
		}
		return(
			<section>
				<div className='test-d'>
					{itemsList}
				</div>
				<button type="button" className='test' onClick={this.leftButtonClick}>Left</button>
				<button type="button" className='test' onClick={this.rigthButtonClick}>Right</button>
			</section>
		)
	}
}

export default GreenTariff;