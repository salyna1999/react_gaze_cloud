import React from 'react';
import './Mystyle.css';
import { Link } from 'react-router-dom';

function Calibration() {
	return (
		<div className="p1c">
			<div className="pc">
				<h1>Click Here To Start Eyes Gaze Point</h1>
				<Link to="/" className="c">
					Start Calibration
				</Link>
			</div>
		</div>
	);
}

export default Calibration;
