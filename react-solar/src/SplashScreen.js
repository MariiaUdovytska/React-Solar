import React from 'react';
import SplashScreenBtn from './SplashScreenBtn';
import './css/splashScreen.css';
import './css/button.css';



class SplashScreen extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='splashScreen' >
				<div className='splashScreen__body containerM'>
					<div className='splashScreen__body-up'>Зеленый тариф для дома и бизнеса</div>
					<h1 className='splashScreen__body-title'>Солнечная электростанция</h1>
					<div className='splashScreen__body-subtitle'>с доходом от 1000 $ в месяц</div>
					<SplashScreenBtn btnAction='записаться на консультацию'/>
				</div>
			</section>
		)
	}
}

export default SplashScreen;