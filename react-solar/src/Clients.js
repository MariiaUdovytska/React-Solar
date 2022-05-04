import React from 'react';
import './css/clients.css';
import './css/buttonBlack.css';
import Carousel from './Carousel';
import Button from './Button';
import clients1 from './img/clients/firstClients.jpg';
import clients2 from './img/clients/secondClients.jpg';
import clients3 from './img/clients/3Clients.jpg';

class Clients extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='clients'>
				<div className='clients__body containerM'>
					<div className='clients__title titleM'>НАШИ КЛИЕНТЫ</div>
					<div className='clients__body-row'>
						<div className='clients__body-left'>
							<Carousel marginForBtns={{marginLeft:'50%', marginTop:'10px'}}>
								<div className='clients__body-left-img'><img src={clients1} alt="Clients1" /></div>
								<div className='clients__body-left-img'><img src={clients2} alt="Clients2" /></div>
								<div className='clients__body-left-img'><img src={clients3} alt="Clients3" /></div>
							</Carousel>
						</div>
						
						<div className='clients__body-right'>
							<div className='clients__body-right-info'>
								<h2>Солнечная электростанция 30 кВт подключенная по Зеленому&nbsp;Тарифу</h2>
								<div className='clients__body-right-info-p'>
									<p>Расположение: Харьковская обл., г. Харьков</p>
									<p>Чистый доход за вычетом налогов с мая 2017 г. по май 2019 г. 13&nbsp;900&nbsp;$.</p>
									<p>Смонтирована: апрель 2017 г.</p>
									<p>Срок службы: 25-30 лет</p>
								</div>
									<Button btnAction='записаться на консультацию'/>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Clients;