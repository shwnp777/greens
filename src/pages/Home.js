import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBarNav from '../components/navigation/SideBarNav';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import './pages.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	headerH3: {
		color: '#fff',
		textAlign: 'left',
		fontSize: '4.2rem',
	},
	headerH6: {
		color: '#fff',
		textAlign: 'left',
		fontSize: '2.2rem',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<SideBarNav>
			<div className='divBody' style={{ paddingTop: '125px' }}>
				<div className={classes.root}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Paper id='headerImg' className={classes.paper}>
								<h3 className={classes.headerH3}>
									Knowledgeable and Experienced
								</h3>
								<h6 className={classes.headerH6}>Text To Get a Quote Today</h6>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>xs=6</Paper>
						</Grid>
						<Grid item xs={6}>
							<Paper className={classes.paper}>xs=6</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
						<Grid item xs={3}>
							<Paper className={classes.paper}>xs=3</Paper>
						</Grid>
					</Grid>
				</div>
			</div>
		</SideBarNav>
	);
}
