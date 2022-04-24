import React from 'react';
import './css/footer.css';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<footer className='footer' >
				<div className='footer__img'> 
					<div className='footer__body containerM'>
						Lorem 
					</div>
				</div>
			</footer>
		)
	}
}

export default Footer;