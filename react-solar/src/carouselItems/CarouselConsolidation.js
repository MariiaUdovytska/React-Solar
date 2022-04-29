
import React from 'react';
import Carousel from '../Carousel';
import Carousel2 from '../img/greentariff/carousel2.jpg';
import '../css/carouselConsolidation.css';

function CarouselConsolidation(props) {
	return (
		<div className='corouselConsolidation'>
			<div className='corouselConsolidation__img'>
				<img src={Carousel2} alt='Carousel2' width={235} height={200}></img>
			</div>
			<div className='corouselConsolidation__carousel'>
				<Carousel>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					<div>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
					<div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
				</Carousel>
			</div>
		</div>
	);
}
export default CarouselConsolidation;