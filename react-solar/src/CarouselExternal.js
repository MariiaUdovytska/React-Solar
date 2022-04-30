
import React from 'react';
import CarouselConsolidation from './carouselItems/CarouselConsolidation';
import CarouselRestrictions from './carouselItems/CarouselRestrictions';
import CarouselSale from './carouselItems/CarouselSale';

class CarouselExternal extends React.Component {
	constructor(props) {
		super(props);
		this.state ={move:0};
	}

	clickLabel = (i) =>{
		this.setState(
			{move:i}
		)
	}

	render(){
		let value = `translateX(${-100*this.state.move}%)`;

		return(
			<div className='carouselExternal'>
				<div className='carouselExternal__body'>
					<div className='carouselExternal__body-name'>
						<span className={((this.state.move==0)?' carouselExternal__active':'')} onClick={()=>{this.clickLabel(0)}}>продажа</span>
						<span className={((this.state.move==1)?' carouselExternal__active':'')} onClick={()=>{this.clickLabel(1)}}>закрепление</span>
						<span className={((this.state.move==2)?' carouselExternal__active':'')} onClick={()=>{this.clickLabel(2)}}>ограничения</span>
					</div>
					<div className='carouselExternal__body-content-items'>
						<div className='carouselExternal__body-content-item' style={{transform: value}}><CarouselSale/></div>
						<div className='carouselExternal__body-content-item' style={{transform: value}}><CarouselConsolidation/></div>
						<div className='carouselExternal__body-content-item' style={{transform: value}}><CarouselRestrictions/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default CarouselExternal;
