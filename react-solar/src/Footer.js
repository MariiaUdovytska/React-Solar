import React from 'react';
import './css/footer.css';
import SocialMedia from './SocialMedia';
import SplashScreenBtn from './SplashScreenBtn';
import SplashScreenLogo from './SplashScreenLogo';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Form } from 'react-bootstrap';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		
	}
	render(){
		return(
			<footer className='footer' >
				<div className='footer__img'> 
					<div className='footer__body containerM'>
						<div className='footer__body-row'>
							<div className='footer__body-row-left'>
								<div className='footer__body-row-left-title'>ОСТАВИТЬ ЗАЯВКУ</div>
								<Form.Control className="mb-2" id="inlineFormInput" placeholder="Имя"/>
								<PhoneInput placeholder="Телефон" value="" onChange={(value)=>{}}/>
								<SplashScreenBtn btnAction='оставить заявку'/>
							</div>
							<div className='footer__body-row-right'>
								<div className='footer__body-row-right-title'>КОНТАКТЫ</div>
								<div className='footer__body-row-right-contactinfo'>
									<p>Центральный офис:<br/>г. Москва, ул,Гоголя 13, 1й этаж</p>
									<p>Представительство в Киеве:<br/>г. Киев, ул. Є. Коновальця, 103 оф. 410</p>
									<p>Представительства в Харькове, Одессе, Ростове, Сочи, Белгороде</p>
									<p>+7 987 654-54-56<br/>+38 067 504-32-57</p>
									<p>Ежедневно 08:00 - 20:00</p>
								</div>
							</div>
						</div>
						<div className='footer__body-down'>
							<div className='footer__body-down-policy'>Политика конфиденциальности</div>
							<div><SplashScreenLogo/></div>
							<div><SocialMedia/></div>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;