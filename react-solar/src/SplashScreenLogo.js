import React from 'react';
import logo from './img/header/logo.svg';

class SplashScreenLogo extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div >
				<img width={182} height={51} src={logo} alt="Logo" />
			</div>
		)
	}
}

export default SplashScreenLogo;