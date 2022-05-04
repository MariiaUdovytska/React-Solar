import React from 'react';
import Carousel from '../Carousel';
import carousel1 from '../img/greentariff/carousel1.jpg';
import '../css/carouselSale.css';

function CarouselSale(props) {
	return (
		<div className='corouselSale'>
			<div className='corouselSale__img'>
				<img src={carousel1} alt='Carousel1'></img>
			</div>
			<div className='corouselSale__carousel'>
				<Carousel>
					<div>Цена, по которой домохозяйства могут продать электроэнергию, более чем в 10 раз превышает цену, по которой они ее покупают для своих нужд — 0,16 Евро/кВт (продажа).</div>
					<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
					<div>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</div>
					<div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</div>
				</Carousel>
			</div>
		</div>
	);
}
export default CarouselSale;