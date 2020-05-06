import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Rico from '../../assets/images/rico.jpg';
import './aboutComponents.css';

const useStyles = makeStyles((theme) => ({
	paddTest: {
		border: '4px solid black',
		backgroundColor: '#fff',
		background:
			'linear-gradient(30deg, rgba(0,0,0,0) 24%, rgba(57,161,28,.4) 51%, rgba(0,0,0,0) 76%)',
		minHeight: '100%',
		display: 'grid',
		alignContent: 'center',
	},
	paddBio: {
		flexGrow: 1,
	},
	bioGrid1: {
		textAlign: 'center',

		alignContent: 'center',
	},

	bioTitle: {
		backgroundColor: '#ffffff',
		border: '4px solid black',
		width: '300px',
		display: 'block',
		margin: '20px auto',
	},
	bioPhoto: {
		width: '200px',
		border: '4px solid black',
		display: 'block',
		margin: '5px auto',
	},
	bioIMG: {
		width: '100%',
	},
	bioGrid2: {
		padding: '20px',
	},
	bioBlurb: {
		backgroundColor: '#ffffff',
		height: '100%',
		border: '4px solid black',
		textAlign: 'center',
		padding: '10px',
	},
	bioh3: {
		fontSize: '2.3rem',
		marginBottom: '2px',
		marginTop: '10px',
	},
	bioh6: {
		fontSize: '1.8rem',
	},
	biop: {
		fontSize: '1.3rem',
		letterSpacing: '1px',
	},
}));

const BioDiv = () => {
	const classes = useStyles();
	return (
		<Grid item xs={12} md={7} className='mainGrid'>
			<div className={classes.paddTest}>
				<Grid container className={classes.paddBio}>
					<Grid item xs={12} md={6} className={classes.bioGrid1}>
						<div className={classes.bioTitle}>
							<h3 className={classes.bioh3}>Founder and CEO</h3>
							<h6 className={classes.bioh6}>Enrico Green</h6>
						</div>
						<div className={classes.bioPhoto}>
							<img
								className={classes.bioIMG}
								src={Rico}
								alt="Enrico Green, CEO of Green's Junk Removal Services"
							/>
						</div>
					</Grid>
					<Grid item xs={12} md={6} className={classes.bioGrid2}>
						<div className={classes.bioBlurb}>
							<p className={classes.biop}>
								Welcome! My name is Enrico Green and I was born and raised in
								Annapolis, MD. My love for nature and the outdoors made starting
								a junk removal service a no brainer, and gives me the
								opportunity to not only take care of my customers, but the
								environment as well. I started Green’s Junk Removal in 2010 with
								a small pickup truck and a dream to save the environment. I
								promise to provide you great service, at an affordable price,
								all while protecting the planet! I look forward to serving all
								in and around the DMV area.
							</p>
						</div>
					</Grid>
				</Grid>
			</div>
		</Grid>
	);
};

export default BioDiv;
