import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import SideBarNav from '../components/navigation/SideBarNav';

import './pages.css';
import {Container} from '@material-ui/core';
import IconGrid from '../components/homeComponents/IconGrid';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<SideBarNav>
			<Container>
				<div className='divBody'>
					<div className={classes.root}>
						<IconGrid />
					</div>
				</div>
			</Container>
		</SideBarNav>
	);
}
