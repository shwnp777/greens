import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import greenGuy from '../../assets/images/greenGuy.png';

import './MainHeader.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	gridOver: {},
	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		overflow: 'hidden',
	},
	headerH3: {
		color: '#fff',
		textAlign: 'left',
		fontSize: '4.2rem',
		paddingLeft: '40px',
	},
	headerH6: {
		color: '#fff',
		textAlign: 'left',
		fontSize: '2.2rem',
		paddingLeft: '40px',
		marginTop: '-50px',
	},
	headerBTN: {
		backgroundColor: '#39a11c',
		color: '#fff',
		fontSize: '1.2rem',
		marginLeft: '40px',
		marginTop: '-30px',
		padding: '10px 30px',
		'&:hover': {
			backgroundColor: '#45b127',
		},
	},
	greenGuy: {
		width: 'auto',
		height: '500px',
		postion: 'absolute',
		marginTop: '-100px',
	},
	greenGuyImg: {
		width: '400px',
		position: 'relative',
		left: '30%',
		bottom: '10px',
	},
}));

const MainHeader = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12}>
			<div className={classes.gridOver}>
				<Paper id='headerImg' className={classes.paper}>
					<h3 id='headerH3' className={classes.headerH3}>
						Knowledgeable and Experienced
					</h3>
					<h6 id='headerH6' className={classes.headerH6}>
						Best Junk Removal Service in the DMV
					</h6>
					<Button variant='contained' className={classes.headerBTN}>
						Text to Quote
					</Button>
					<div id='greenGuy' className={classes.greenGuy}>
						<img id='greenGuyIMG' className={classes.greenGuyImg} src={greenGuy} alt='Greens Junk Removal Guy' />
					</div>
				</Paper>
			</div>
		</Grid>
	);
};

export default MainHeader;
