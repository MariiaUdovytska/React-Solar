import React from 'react';
import './css/services.css';

class Services extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='services'>
				<div className='services-body containerM'>
					<div className='services-body-title'>УСЛУГИ</div>
					<div className='services-body-row'>
						<div className='services-body-left'>
							<div className='services-body-left-info'>
								<div className='services-body-left-info-block'>
									<h2>Полный комплект солнечной электростанции</h2>
									<p>74 модели солнечных панелей, 31 модель инверторов, провода с повышенной устойчивостью к атмосферным условиям, качественные соединители, контроллеры зарядов и надежные гелевые аккумуляторы с увеличенным сроком службы.</p>
								</div>
								<div className='services-body-left-info-block'>
									<h2>Подбор оборудования <br/>с максимальной производительностью</h2>
									<p>Подбираем солнечные панели с учетом расположения Вашего дома, количеством прямого и рассеянного излучения, для того, чтобы Ваша электростанция - вырабатывала максимальное количество электроэнергии и окупилась как можно быстрее.</p>
								</div>
								<div className='services-body-left-info-block'>
									<h2>Монтаж оборудования в соответствии с ГОСТом</h2>
									<p>Монтаж производится в точном соответствии с ГОСТом, с учетом закона о «Зеленом тарифе» и требованиями Облэнерго. При этом, мы учитываем, чтобы солнечная станция имела максимально возможную производительность.</p>
								</div>
								<div className='services-body-left-info-block'>
									<h2>Помощь в подключении к «Зеленому тарифу»</h2>
									<p>Всю бюрократическую процедуру по подключению Вашей электростанции к «Зеленому тарифу», мы берем на себя, в том числе по увеличению договорной мощности вашего дома. При заказе солнечной электростанции эта услуга абсолютно бесплатна.</p>
								</div>
							</div>
						</div>
						<div className='services-body-right'>
							<div className='services-body-right-img'></div>
						</div>
					</div>
					
				</div>
			</section>
		)
	}
}

export default Services;