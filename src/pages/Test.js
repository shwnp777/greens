import React, { useState } from 'react';

import './TestPage.css';

const Test = () => {
	const [menuActive, setMenuState] = useState(false);

	return (
		<div class='container'>
			<div class='row cf'>
				<div class='three col'>
					<div
						className={`hamburger ${menuActive ? 'is-active' : ''}`}
						onClick={() => setMenuState(!menuActive)}
						id='hamburger-6'
					>
						<span class='line'></span>
						<span class='line'></span>
						<span class='line'></span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Test;
