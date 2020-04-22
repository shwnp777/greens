import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	marginDiv: {
		marginTop: '-64px',
	},
}));

const MainLayout = ({children}) => {
	const classes = useStyles();

	return <div className={classes.marginDiv}>{children}</div>;
};

export default MainLayout;
