import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SideBarNav from '../components/navigation/SideBarNav';
import Title from '../components/aboutComponents/Title';
import BioDiv from '../components/aboutComponents/BioDiv';
import AboutBottom from '../components/aboutComponents/AboutBottom ';
import MissionDiv from '../components/aboutComponents/MissionDiv';

import './pages.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginBottom: '30px',
		height: '100%',
	},
}));

const About = () => {
	const classes = useStyles();
	return (
		<SideBarNav>
			<div className='divBody divBody2' style={{ paddingTop: '120px' }}>
				<Title />
				<div className='bioPadding'>
					<div className='marginAbout'>
						<Grid className={classes.root} container>
							<BioDiv />
							<MissionDiv />
						</Grid>
					</div>
					<AboutBottom />
				</div>
			</div>
		</SideBarNav>
	);
};

export default About;
