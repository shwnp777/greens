import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import Judge from '../../assets/images/nojudge.png';
import Scene1 from '../../assets/images/scene1.jpg';
import Scene2 from '../../assets/images/scene2.jpg';

import Zelle from '../../assets/images/zelle.png';
import Cash from '../../assets/images/cashapp.png';
import Square from '../../assets/images/square.png';

import './ServiceComponent.css';

const useStyles = makeStyles((theme) => ({
	headerBorder: {
		backgroundColor: '#ffffff',
		border: '4px solid black',
		margin: '10px',
	},
}));

const HeaderGrid = () => {
	const classes = useStyles();
	return (
		<div className={classes.headerBorder}>
			<Grid container className={classes.paddBio}>
				<Grid item xs={12} md={6} lg={3} className={classes.topGrid}>
					<div className='firstServiceBox'>
						<div className='nojudge'>
							<img
								src={Judge}
								alt='No judge zone by Greens Junk Removal Services'
							/>
						</div>
						<div className='textQuote'>
							<a href="sms:+114432213242?&body=Hello%20Green's..%20I%20need%20a%20quote%20for...">
								<Button className='textBTN serviceBTN'>Text for Quote</Button>
							</a>

							<a href='mailto:enricogreen42@gmail.com?&Subject=I%20need%20a%20Quote'>
								<Button className='emailBTN serviceBTN'>Email for Quote</Button>
							</a>
						</div>
					</div>
				</Grid>

				<Grid item xs={12} md={6} lg={3} className='topImgGrid'>
					<img
						className='topGridImg'
						src={Scene1}
						alt='Scene one for Greens Jenk Removal'
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={3} className='topImgGrid'>
					<img
						className='topGridImg'
						src={Scene2}
						alt='Scene two for Greens Jenk Removal'
					/>
				</Grid>
				<Grid item xs={12} md={6} lg={3} className={classes.topGrid}>
					<div className='serviceBox'>
						<div className='boxTitle'>
							<h3>Donation Partners</h3>
						</div>
						<div className='serviceList'>
							<ul>
								<li>
									<p>Goodwill</p>
								</li>
								<li>
									<p>Salvation Army</p>
								</li>
								<li>
									<p>Habitat for Humanity</p>
								</li>
								<li>
									<p>Local Shelters</p>
								</li>
							</ul>
						</div>
					</div>
					<div className='paymentMain'>
						<h3>Payment Methods</h3>
						<div className='paymentMethods'>
							<div className='payment payment1'>
								<img
									src={Zelle}
									alt='Zelle payent method for Greens Junk Removal'
								/>
							</div>

							<div className='payment payment2'>
								<img
									src={Cash}
									alt='Zelle payent method for Greens Junk Removal'
								/>
							</div>

							<div className='payment payment3'>
								<img
									src={Square}
									alt='Zelle payent method for Greens Junk Removal'
								/>
							</div>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default HeaderGrid;
