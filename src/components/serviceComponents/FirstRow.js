import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import './ServiceComponent.css';

const useStyles = makeStyles((theme) => ({
	firstRow: {
		padding: '10px',
	},
}));

const FirstRow = () => {
	const classes = useStyles();
	return (
		<div className={classes.firstRowDiv}>
			<Grid container className={classes.firstRow} spacing={3}>
				<Grid item xs={12} md={4} className='serviceBoxGrid'>
					<div className='serviceBox1'>
						<div className='boxTitle'>
							<h3>Common Removal Items</h3>
						</div>
						<div className='serviceList'>
							<ul className='topUL'>
								<li>
									<p>Electronics</p>
								</li>
								<li>
									<p>Tires</p>
								</li>
								<li>
									<p>Mattresses</p>
								</li>
								<li>
									<p>Carpet</p>
								</li>
							</ul>
							<ul className='bottomUL'>
								<li>
									<p>DIY Debris</p>
								</li>
								<li>
									<p>Appliances</p>
								</li>
								<li>
									<p>Decks</p>
								</li>
								<li>
									<p>Hot Tub</p>
								</li>
							</ul>
						</div>
					</div>
				</Grid>
				<Grid item xs={12} md={4} className='serviceBoxGrid'>
					<div className='serviceBox1'>
						<div className='boxTitle'>
							<h3>Commercial cleanup</h3>
						</div>
						<div className='serviceList'>
							<ul>
								<li>
									<p>Construction Demo</p>
								</li>
								<li>
									<p>Office Furniture</p>
								</li>
								<li>
									<p>Office Equipment</p>
								</li>
								<li>
									<p>Cubicle Removal</p>
								</li>
							</ul>
						</div>
					</div>
				</Grid>

				<Grid item xs={12} md={4} className='serviceBoxGrid'>
					<div className='serviceBox1'>
						<div className='boxTitle'>
							<h3>Basement/Garage Cleanout</h3>
						</div>
						<div className='serviceList'>
							<ul className='topUL'>
								<li>
									<p>Hot Water Heaters</p>
								</li>
								<li>
									<p>Washer and Dryers</p>
								</li>
								<li>
									<p>Exercise Equipment</p>
								</li>
								<li>
									<p>Broken Tools</p>
								</li>
							</ul>
							<ul className='bottomUL'>
								<li>
									<p>Old Trash Cans</p>
								</li>
								<li>
									<p>Pool Tables</p>
								</li>
								<li>
									<p>Furniture</p>
								</li>
								<li>
									<p>Rehab Debris</p>
								</li>
							</ul>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default FirstRow;
