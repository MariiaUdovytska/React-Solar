import React from 'react';
import instagram from './img/socialmedia/instagram.svg';
import telegram from './img/socialmedia/telegram.svg';
import whatsapp from './img/socialmedia/whatsapp.svg';
import facebook from './img/socialmedia/facebook.svg';

class SocialMedia extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<div className='socialMedia'>
				<img width={30} height={30} src={instagram} alt="Instagram" />
				<img width={30} height={22} src={telegram} alt="Telegram" />
				<img width={30} height={30} src={whatsapp} alt="Whatsapp" />
				<img width={17} height={30} src={facebook} alt="Facebook" />
			</div>
		)
	}
}

export default SocialMedia;