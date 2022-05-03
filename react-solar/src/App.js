import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from "./SplashScreen";
import Services from './Services';
import GreenTariff from './GreenTariff';
import Slogan from './Slogan';
import Steps from './Steps';
import Clients from './Clients';
import Footer from './Footer';


function App() {
	return (
		<div className='wrapper'>
			<div className="page">
				<SplashScreen/>
				<Services/>
				<GreenTariff/>
				<Slogan/>
				<Clients/>
				<Steps/>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
