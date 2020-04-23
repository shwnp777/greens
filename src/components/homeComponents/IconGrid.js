import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MainHeader from '../homeComponents/MainHeader';

import './MainHeader.css';

import Fair from '../../assets/images/Fair.png';
import Fast from '../../assets/images/fast.png';
import Reliable from '../../assets/images/Reliable.png';

const useStyles = makeStyles((theme) => ({
	iconDiv: {
		width: '100%',
	},
	icon: {
		width: '95%',
		maxWidth: '200px',
	},
	icon2: {
		width: '95%',
		maxWidth: '300px',
	},
}));

const IconGrid = () => {
	const classes = useStyles();
	return (
		<Grid container spacing={3}>
			<MainHeader />
			<Grid item xs={12} md={4}>
				<div className={classes.iconDiv}>
					<img className={classes.icon} src={Fast} alt='Fast Icon for Greens Junk Removal' />
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.iconDiv}>
					<img className={classes.icon2} src={Reliable} alt='Reliable Icon for Greens Junk Removal' />
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.iconDiv}>
					<img className={classes.icon} src={Fair} alt='Fair Icon for Greens Junk Removal' />
				</div>
			</Grid>
		</Grid>
	);
};

export default IconGrid;
