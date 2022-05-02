import React from 'react';
import './css/steps.css';

class Steps extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
			<section className='steps'>
				<div className='steps__body containerM'>
					<div className='steps__body-column'>
						<div className='steps__body-title titleM'>5 ШАГОВ К СОБСТВЕННОЙ ЭЛЕКТРОСТАНЦИИ</div>
						<div className='steps__body-left'>
							<div className='steps__body-left-info'>
								<div className='steps__body-left-info-block'>
									<span>01</span>
									<h2>Заявка или звонок</h2>
									<p>Оставляете заявку на нашем сайте или связываетесь с нами по телефону или в мессенджерах.</p>
								</div>
								<div className='steps__body-left-info-block'>
									<span>02</span>
									<h2>Консультация и замер на объекте</h2>
									<p>Мы просчитываем более 10- 15 вариантов солнечной станции на Вашем участке, чтобы предложить Вам один наиболее выгодный.</p>
								</div>
								<div className='steps__body-left-info-block'>
									<span>03</span>
									<h2>Заключение договора</h2>
									<p>Заключается договор, благодаря которому, вы будете застрахованы от некачественного оборудования и срыва сроков.</p>
								</div>
								<div className='steps__body-left-info-block'>
									<span>04</span>
									<h2>Монтаж СЭС</h2>
									<p>Наши специалисты производят монтаж солнечных батарей, проводки и инверторов, при необходимости изготавливают опоры.</p>
								</div>
								<div className='steps__body-left-info-block'>
									<span>05</span>
									<h2>Получение дохода от государства</h2>
									<p>После подключения к «Зеленому тарифу», вы получаете доход за каждый киловатт, выработанный на Вашей солнечной электростанции по зафиксированному тарифу на момент подключения.</p>
								</div>
							</div>
						</div>
					</div>
					<div className='steps__body-right'>
						<div className='steps__body-right-img'></div>
					</div>
				</div>
			</section>
		)
	}
}

export default Steps;