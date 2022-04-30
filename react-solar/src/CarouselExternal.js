
import React from 'react';
import CarouselConsolidation from './carouselItems/CarouselConsolidation';
import CarouselRestrictions from './carouselItems/CarouselRestrictions';
import CarouselSale from './carouselItems/CarouselSale';

class CarouselExternal extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		
		return(
			<div className='carouselExternal'>
				<div className='carouselExternal__body'>
					<div className='carouselExternal__body-name'>
						<span  className='carouselExternal__body-name-sp'>продажа</span>
						<span  className='carouselExternal__body-name-sp'>закрепление</span>
						<span  className='carouselExternal__body-name-sp'>ограничения</span>
					</div>
					<div className='carouselExternal__body-content-items'>
						<div className='carouselExternal__body-content-item'><CarouselSale/></div>
						<div className='carouselExternal__body-content-item'><CarouselConsolidation/></div>
						<div className='carouselExternal__body-content-item'><CarouselRestrictions/></div>
					</div>
				</div>
			</div>
		)
	}
}

export default CarouselExternal;
