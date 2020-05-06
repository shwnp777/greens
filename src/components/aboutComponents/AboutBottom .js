import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Bang1 from '../../assets/images/clockBangs.png';
import Bang2 from '../../assets/images/shieldBang.png';
import Bang3 from '../../assets/images/priceBang.png';

import './aboutComponents.css';

const useStyles = makeStyles((theme) => ({
	missGrid: {
		border: '4px solid black',
		textAlign: 'center',
		backgroundColor: 'rgba(0,0,0,0)',
		background:
			'linear-gradient(30deg, rgba(0,0,0,0) 24%, rgba(57,161,28,.4) 51%, rgba(0,0,0,0) 76%)',
	},
	paddTest: {
		border: '4px solid black',
		backgroundColor: 'rgba(0,0,0,0)',
		background:
			'linear-gradient(30deg, rgba(0,0,0,0) 24%, rgba(57,161,28,.4) 51%, rgba(0,0,0,0) 76%)',
		padding: '10px',
	},
}));

const AboutBottom = () => {
	const classes = useStyles();
	return (
		<Grid container className='bottomGridBangs'>
			<Grid item xs={12} md={4} className='bottomGrids'>
				<div className='borders'>
					<div className='imgDiv'>
						<img src={Bang1} alt='' />
					</div>
					<div className={classes.bottomTitle}>
						<h3 className='bottomH3'>ON TIME AND FAST REMOVAL</h3>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} md={4} className='bottomGrids'>
				<div className='borders'>
					<div className='imgDiv'>
						<img src={Bang2} alt='' />
					</div>
					<div className={classes.bottomTitle}>
						<h3 className='bottomH3'>SAFE AND KNOWLEDGEABLE</h3>
					</div>
				</div>
			</Grid>
			<Grid item xs={12} md={4} className='bottomGrids'>
				<div className='borders'>
					<div className='imgDiv'>
						<img src={Bang3} alt='' />
					</div>
					<div className={classes.bottomTitle}>
						<h3 className='bottomH3'>UPFRONT PRICING</h3>
					</div>
				</div>
			</Grid>
		</Grid>
	);
};

export default AboutBottom;
