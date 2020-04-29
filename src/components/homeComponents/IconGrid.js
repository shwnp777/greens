import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import './IconGrid.css';

import Fair from '../../assets/images/Fair.png';
import Fast from '../../assets/images/fast.png';
import Reliable from '../../assets/images/Reliable.png';

const useStyles = makeStyles((theme) => ({
	iconDiv: {
		width: '100%',
	},
	icon: {
		width: '100px',
	},
	icon2: {
		width: '150px',
	},
	gridIconDivT: {
		width: '100%',
		marginTop: '30px',
	},
	gridIconDivB: {
		width: '100%',
		marginBottom: '30px',
	},
	centerGrid: {
		textAlign: 'center',
	},
}));

const IconGrid = () => {
	const classes = useStyles();
	return (
		<Grid className={classes.centerGrid} container spacing={3}>
			<div className={classes.gridIconDivT}></div>
			<Grid id='icons' item xs={4} md={4}>
				<div className={classes.iconDiv}>
					<img
						id='icon1'
						className={classes.icon}
						src={Fast}
						alt='Fast Icon for Greens Junk Removal'
					/>
				</div>
			</Grid>
			<Grid id='icons' item xs={4} md={4}>
				<div className={classes.iconDiv}>
					<img
						id='icon2'
						className={classes.icon2}
						src={Reliable}
						alt='Reliable Icon for Greens Junk Removal'
					/>
				</div>
			</Grid>
			<Grid id='icons' item xs={4} md={4}>
				<div className={classes.iconDiv}>
					<img
						id='icon3'
						className={classes.icon}
						src={Fair}
						alt='Fair Icon for Greens Junk Removal'
					/>
				</div>
			</Grid>
			<div className={classes.gridIconDivB}></div>
		</Grid>
	);
};

export default IconGrid;
