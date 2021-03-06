import { hover } from '@testing-library/user-event/dist/hover';
import React from 'react';
import button from './img/header/button.svg';


class SplashScreenBtn extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='button'>
				<button className='button__body'>
					<div className='button__body-img'>
						<img width={100} height={100} src={button} alt="Button" />
					</div>
					<span className='button__body-text'>{this.props.btnAction}</span>
				</button>
			</div>
		)
	}
}

export default SplashScreenBtn;