import React from 'react';
import './css/greenTariff.css';
import './css/carousel.css';
import './css/carouselExternal.css';
import CarouselExternal from './CarouselExternal';
import CarouselSale from './carouselItems/CarouselSale';
import CarouselConsolidation from './carouselItems/CarouselConsolidation';
import CarouselRestrictions from './carouselItems/CarouselRestrictions';


class GreenTariff extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<section className='greenTariff'>
				<div className='greenTariff__body containerM'>
					<div className='greenTariff__body-title titleM'>ЗЕЛЕНЫЙ ТАРИФ</div>
					<div className='greenTariff__body-row'>
						<div className='greenTariff__body-row-left'>
							<div className='greenTariff__body-row-left-corouselUp'>
								<CarouselExternal>
									<CarouselSale/>
									<CarouselConsolidation/>
									<CarouselRestrictions/>
								</CarouselExternal>
							</div>
						</div>
						
						<div className='greenTariff__body-row-right'>
							<div className='greenTariff__body-row-right-text'>«Зеленый тариф» — это особые тарифные условия, которые позволяют частным домохозяйствам  не только потреблять, но и продавать выработанное домашними солнечными электростанциями электричество в электросеть общего пользования.</div>
							<div className='greenTariff__body-row-right-img'>
								<div className='greenTariff__body-row-right-img-i'></div>
							</div>
							
						</div>
					</div>
					
				</div>
			</section>
				
		)
	}
}

export default GreenTariff;