import React from 'react';
import SplashScreenBtn from './SplashScreenBtn';
import SplashScreenLogo from './SplashScreenLogo';
import SocialMedia from './SocialMedia';
import './css/splashScreen.css';
import './css/button.css';
import './css/socialMedia.css';



class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='splashScreen' >
				<div className='splashScreen__body containerM'>
					<div className='splashScreen__body-position'>
						<div className='splashScreen__body-position-content'>
							<SplashScreenLogo/>
							<div className='splashScreen__body-up'>Зеленый тариф для дома и бизнеса</div>
							<h1 className='splashScreen__body-title'>Солнечная электростанция</h1>
							<div className='splashScreen__body-subtitle'>с доходом от 1000 $ в месяц</div>
							<div className='splashScreen__body-btn'>
								<SplashScreenBtn btnAction='записаться на консультацию'/>
							</div>
						</div>
						<div className='splashScreen__body-position-down'>
							<SocialMedia/>
						</div>
					</div>
					
				</div>
			</section>
		)
	}
}

export default SplashScreen;