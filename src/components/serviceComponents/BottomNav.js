import React from 'react';

import { Grid } from '@material-ui/core';

const BottomNav = () => {
	return (
		<div className='serviceBottom'>
			<Grid container spacing={3} className='bottomService'>
				<Grid xs={12}>
					<h3 className='bottomServiceH3'>The Process</h3>
				</Grid>
				<Grid item xs={12} md={4} className='stepsDiv'>
					<div className='stepNumber'>
						<h3>1</h3>
					</div>
					<div className='stepBlurb'>
						<p>
							Text or call 443-221-3242 for a quote. Provide a brief description
							or picture of what you want removed.
						</p>
					</div>
				</Grid>
				<Grid item xs={12} md={4} className='stepsDiv'>
					<div className='stepNumber'>
						<h3>2</h3>
					</div>
					<div className='stepBlurb'>
						<p>
							Setup a time and date for removal. We provide you with before and
							after photos of your new "Green" space(s) to ensure you're
							satisfied with the service.
						</p>
					</div>
				</Grid>
				<Grid item xs={12} md={4} className='stepsDiv'>
					<div className='stepNumber'>
						<h3>3</h3>
					</div>
					<div className='stepBlurb'>
						<p>Payment using cash, credit card, Zelle, or Cashapp.</p>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default BottomNav;
