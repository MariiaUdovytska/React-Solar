import React from 'react';
import SplashScreenContent from './SplashScreenContent';
import './css/splashScreen.css';

class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='splashScreen' >
				<div className='splashScreen-body containerM'>
					<SplashScreenContent/>
					
				</div>
			</section>
		)
	}
}

export default SplashScreen;