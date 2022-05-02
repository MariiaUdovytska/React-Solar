import './css/page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SplashScreen from "./SplashScreen";
import Services from './Services';
import GreenTariff from './GreenTariff';
import Footer from './Footer';
import Slogan from './Slogan';


function App() {
	return (
		<div className='wrapper'>
			<div className="page">
				<SplashScreen/>
				<Services/>
				<GreenTariff/>
				<Slogan/>
				<main className='containerM'>
					<div className='test'><p>Lorem ipsum proin malesuada fusce: at ipsum leo ultricies sed pharetra duis amet sem, adipiscing cursus pellentesque. At adipiscing et porta, in morbi commodo lorem massa fusce sagittis bibendum leo mauris sagittis odio quisque bibendum. Nulla metus, orci, curabitur quisque ultricies leo sagittis, nec eu leo a cursus rutrum leo morbi urna commodo quam massa in urna, sit. Vivamus duis sit diam gravida commodo arcu quam quisque et&nbsp;&mdash; eget pharetra sagittis.</p><p>Sit congue lorem: ornare nibh at elementum, nibh duis orci elementum lorem, eget eu&nbsp;&mdash; a eros elementum commodo, fusce, duis vivamus commodo sagittis. Massa diam maecenas, cursus&nbsp;&mdash; eget morbi risus, at maecenas in eros enim molestie duis rutrum sagittis. Pellentesque tellus ornare malesuada et curabitur, eu eros nibh commodo leo metus mauris orci sem eros donec quam nulla.</p><p>Vitae curabitur maecenas lectus diam risus commodo massa vivamus rutrum lorem magna molestie mauris ut risus, malesuada sit enim morbi gravida pellentesque mattis. Adipiscing rutrum ut in ligula sodales donec eu lorem leo et tempus eu. Bibendum diam leo eget sem, commodo lorem metus eget, pharetra duis&nbsp;&mdash; eget quam. Enim duis urna mattis integer, pharetra in magna nam sed et tellus eget tellus fusce vivamus molestie urna fusce mauris donec&nbsp;&mdash; in nibh nam maecenas. Elementum donec, a malesuada leo proin cursus et sed, diam maecenas. Rutrum pharetra tellus diam elementum duis elementum et&nbsp;&mdash; vivamus mauris ipsum amet justo sem diam ipsum justo porta nec tellus commodo.</p><p>Amet metus, vitae: non nulla molestie mauris: auctor ligula pellentesque sit nibh. Justo sapien arcu urna: congue risus, porttitor enim magna mauris lorem sem quam sagittis integer sem. Cursus congue ipsum vivamus eu tellus pharetra, sit cursus duis porttitor nec, gravida metus molestie vitae porttitor.</p><p>Curabitur mauris enim lorem non ut rutrum cursus auctor ipsum commodo adipiscing sapien elementum adipiscing: ut porttitor duis massa gravida. Morbi congue magna sed pharetra, porta, sit curabitur sodales nulla malesuada curabitur elementum rutrum tellus nibh eros porta duis integer, nibh.</p> </div>
				</main>
				<Footer/>
			</div>
		</div>
	);
}

export default App;
