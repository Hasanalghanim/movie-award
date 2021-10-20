import './App.css';
import MainCard from './Components/MainCard';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { MovieContxtProvider } from './Context/movieContext';

function App() {
	return (
		<div className='App'>
			<MovieContxtProvider>
				<MainCard />
			</MovieContxtProvider>
		</div>
	);
}

export default App;
