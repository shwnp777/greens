import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import './ServiceComponent.css';

const useStyles = makeStyles((theme) => ({
	firstRow: {
		padding: '10px',
	},
}));

const SecondRow = () => {
	const classes = useStyles();
	return (
		<div className='secondRowDiv'>
			<div className='secondCenter'>
				<Grid container className={classes.firstRow} spacing={4}>
					<Grid item xs={12} md={3} className='serviceBoxGrid'>
						<div className='serveBox'>
							<div className='serviceBox1'>
								<div className='boxTitle'>
									<h3>Crawl space cleanout</h3>
								</div>
								<div className='serviceList'>
									<p>
										Space size doesn’t matter. Spaces can be Big or Small, we’ll
										get the job done!
									</p>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} md={3} className='serviceBoxGrid'>
						<div className='serveBox'>
							<div className='serviceBox1'>
								<div className='boxTitle'>
									<h3>Estate cleanout</h3>
								</div>
								<div className='serviceList'>
									<p>
										We help families who have lost loved ones sort, remove,
										donate, and recycle unwanted items.
									</p>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} md={3} className='serviceBoxGrid'>
						<div className='serveBox'>
							<div className='serviceBox1'>
								<div className='boxTitle'>
									<h3>Storm debris</h3>
								</div>
								<div className='serviceList'>
									<p>
										Let us do the heavy lifting even after a natural disaster.
									</p>
									<ul className='ulServe'>
										<li>
											<p>Tornadoes</p>
										</li>
										<li>
											<p>Severe Storms</p>
										</li>
										<li>
											<p>Flooding</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</Grid>
					<Grid item xs={12} md={3} className='serviceBoxGrid'>
						<div className='serveBox'>
							<div className='serviceBox1'>
								<div className='boxTitle'>
									<h3>Storage cleanout</h3>
								</div>
								<div className='serviceList'>
									<p>
										Don’t worry hoarders, we will help you go through storage
										units and even your most cluttered rooms.
									</p>
								</div>
							</div>
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default SecondRow;
