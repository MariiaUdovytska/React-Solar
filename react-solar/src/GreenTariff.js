import React from 'react';
import './css/greenTariff.css';
import './css/carousel.css';
import './css/carouselExternal.css';
import Carousel from './Carousel';
import carousel1 from './img/greentariff/carousel1.jpg';
import CarouselExternal from './CarouselExternal';


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
								<CarouselExternal/>
							</div>
							<div className='greenTariff__body-row-left-corouselDown'>
								<div className='greenTariff__body-row-left-corouselDown-img'>
									<img src={carousel1} alt='Carousel1' width={235} height={200}></img>
								</div>
								<div className='greenTariff__body-row-left-corouselDown-carousel'>
									<Carousel>
										<div>Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</div>
										<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
										<div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
										<div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
									</Carousel>
								</div>
								
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