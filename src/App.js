import logo from './logo.svg';
import './App.css';
import Login from './container/Login';
import Calibration from './container/Calibration';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/Calibration" component={Calibration} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
