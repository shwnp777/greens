import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBarNav from '../components/navigation/SideBarNav';

import './pages.css';
import { Container } from '@material-ui/core';
import IconGrid from '../components/homeComponents/IconGrid';
import ComicStrip from '../components/homeComponents/ComicStrip';
import MainHeader from '../components/homeComponents/MainHeader';

const useStyles = makeStyles((theme) => ({
	containDiv: {
		width: '100%',
		maxWidth: '1520px',
	},
	contBG: {
		backgroundColor: '#fff',
		height: '100%',
		minHeight: '100vh',
		paddingTop: '150px',
		maxWidth: '1280px',
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<SideBarNav>
			<div className='homeBody'>
				<Container id='contBG' className={classes.contBG}>
					<MainHeader />
					<IconGrid />
					<ComicStrip />
				</Container>
			</div>
		</SideBarNav>
	);
}
