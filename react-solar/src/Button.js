import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import button from './img/header/button.svg';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='buttonBlack'>
				<button className='buttonBlack__body'>
					<div className='buttonBlack__body-img'>
						<img width={100} height={100} src={button} alt="Button" />
					</div>
					<span className='buttonBlack__body-text'>{this.props.btnAction}</span>
				</button>
			</div>
		)
	}
}

export default Button;