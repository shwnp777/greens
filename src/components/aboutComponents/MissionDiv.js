import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import './aboutComponents.css';

const useStyles = makeStyles((theme) => ({
	paddTest: {
		border: '4px solid black',
		textAlign: 'center',
		backgroundColor: '#fff',
		background:
			'linear-gradient(120deg, rgba(0,0,0,0) 24%, rgba(122, 2, 126, 0.4) 51%, rgba(0,0,0,0) 76%)',
		height: '100%',
		padding: '20px',
		display: 'grid',
		alignContent: 'center',
	},
	missGrid1: {
		textAlign: 'center',

		alignContent: 'center',
	},

	missTitle: {
		backgroundColor: '#ffffff',
		border: '4px solid black',
		width: '250px',
		display: 'block',
		margin: '5px auto',
	},
	missBlurb: {
		backgroundColor: '#ffffff',
		height: '100%',
		border: '4px solid black',
		textAlign: 'center',
		padding: '10px',
	},
	missH3: {
		fontSize: '2.3rem',
		marginBottom: '2px',
		marginTop: '10px',
	},
	missP: {
		fontSize: '1.3rem',
		letterSpacing: '1px',
	},
}));

const MissionDiv = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12} md={5} className='mainGrid'>
			<div className={classes.paddTest}>
				<Grid item xs={12} md={12} className={classes.missGrid1}>
					<div className={classes.missTitle}>
						<h3 className={classes.missH3}>Our Mission</h3>
					</div>
					<div className={classes.missBlurb}>
						<p className={classes.missP}>
							Our mission is to give you fast, reliable and fair service all
							while protecting the planet. No job is too small or big. Go
							“Green” with us today!
						</p>
					</div>
				</Grid>
			</div>
		</Grid>
	);
};

export default MissionDiv;
