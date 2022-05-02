import React from 'react';
import './css/slogan.css'

class Slogan extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){

		return(
			<div className='slogan'>
				<div className='slogan__body containerM'>
					<div className='slogan__body-content'>«Солнечная электростанция <br/>— идеальное вложение средств в свою энергонезависимость и пассивный доход»</div>
				</div>
			</div>
		)
	}
}

export default Slogan;