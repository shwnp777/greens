import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Bang1 from '../../assets/images/pinBang.png';
import Bang2 from '../../assets/images/clockBang.png';
import Bang3 from '../../assets/images/mailBang.png';
import Bang4 from '../../assets/images/phoneBang.png';

import './ContactComponents.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},

	icon: {
		width: '110px',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<div className='purpleBG'>
			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={3}>
					<div className='bangerDiv'>
						<div className='bangImg'>
							<img
								className={classes.icon}
								src={Bang1}
								alt='Icon for Greens Junk Removal'
							/>
						</div>
						<div className='infoText'>
							<h6>Location:</h6>
							<p>Laurel, MD 20707</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<div className='bangerDiv'>
						<div className='bangImg'>
							<img
								className={classes.icon}
								src={Bang2}
								alt='Icon for Greens Junk Removal'
							/>
						</div>
						<div className='infoText'>
							<h6>Open Hours:</h6>
							<p>By Appointment</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<div className='bangerDiv'>
						<div className='bangImg'>
							<img
								className={classes.icon}
								src={Bang3}
								alt='Icon for Greens Junk Removal'
							/>
						</div>
						<div className='infoText'>
							<h6>Email:</h6>
							<p>enricogreen42@gmail.com</p>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={6} md={3}>
					<div className='bangerDiv'>
						<div className='bangImg'>
							<img
								className={classes.icon}
								src={Bang4}
								alt='Icon for Greens Junk Removal'
							/>
						</div>
						<div className='infoText'>
							<h6>Phone:</h6>
							<p>(443) 221-3242</p>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Footer;
