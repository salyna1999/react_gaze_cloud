import React, { useState } from 'react';
import './Mystyle.css';
import { Link } from 'react-router-dom';

function Login() {
	const [Name, setName] = useState('');
	const [Password, setPassword] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<div className="all">
				<div className="h">
					<h1>Login</h1>
				</div>
				<div className="form">
					<form onSubmit={submitHandler}>
						<div>
							<label className="primary">Name</label>
							<input
								className="input"
								value={Name}
								onChange={(e) => setName(e.target.value)}
								type="text"
							/>
						</div>

						<div>
							<label className="primary">Password</label>
							<div></div>
							<input
								className="in"
								value={Password}
								onChange={(e) => setPassword(e.target.value)}
								type="password"
							/>
						</div>
						<Link to="/Calibration" className="b">
							Login
						</Link>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;
