import React from 'react';
import SplashScreenContent from './SplashScreenContent';
import './css/splashScreen.css'

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='splashScreen'>
				<div className='splashScreen-img'>
					<SplashScreenContent/>
				</div>
			</div>
		)
	}
}

export default SplashScreen;