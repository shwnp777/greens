import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Logo from '../../assets/images/greenslogo.png';

import './SideBarNav.css';
import MainLayout from '../layout/MainLayout';
import SideNavList from './SideNavList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	hide: {
		display: 'none',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#181818',
		color: '#39a11c',
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
	navText: {
		color: '#39a11c',
	},
	logo: {
		width: '180px',
		display: 'block',
		margin: '0 auto',
	},
}));

export default function SideBarNav({children}) {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open,
				})}
				id='navBG'
			>
				<Toolbar>
					<IconButton color='inherit' aria-label='open drawer' onClick={handleDrawerOpen} edge='start' className={clsx(classes.menuButton, open && classes.hide)}>
						<MenuIcon className={classes.navText} />
					</IconButton>
					<Typography variant='h6' noWrap className={classes.navText}>
						Green's Junk Removal
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
				</div>
				<Divider />
				<img src={Logo} className={classes.logo} alt='Greens Junk Removal Logo' />
				<Divider />
				<SideNavList />
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<MainLayout>{children}</MainLayout>
			</main>
		</div>
	);
}

// import React, {useState} from 'react';
// import {Link} from 'react-router-dom';
// import {Nav, Button} from 'reactstrap';
// import Vert from '../../assets/images/vert.svg';
// import Close from '../../assets/images/close.svg';

// import Logo from '../../assets/images/greenslogo.png';

// import './SideBarNav.css';

// const Header = (props) => {
// 	const [state, setState] = React.useState({
// 		top: false,
// 		left: false,
// 		bottom: false,
// 		right: false,
// 	});

// 	const toggleDrawer = (anchor, open) => (event) => {
// 		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
// 			return;
// 		}

// 		setState({...state, [anchor]: open});
// 	};

// 	const [isOpen, setIsOpen] = useState(true);

// 	const toggle = () => {
// 		setIsOpen(!isOpen);
// 	};

// 	const SideMenu = (anchor) => (
// 		<div className='wrapper'>
// 			<Nav id='sidebar' className='active'>
// 				<div className='sidebar-header'>
// 					<img src={Logo} alt='Greens Junk Removal Logo' />
// 				</div>

// 				<ul className='list-unstyled components'>
// 					<li className='active'>
// 						<Link to='/'>Home</Link>
// 					</li>
// 					<li>
// 						<Link to='/about'>About Us</Link>
// 					</li>
// 					<li>
// 						<Link to='/services'>Services</Link>
// 					</li>
// 					<li>
// 						<Link to='/contact'>Contact Us</Link>
// 					</li>
// 				</ul>
// 			</Nav>
// 		</div>
// 	);

// 	return (
// 		<div id='content'>
// 			<Button onClick={toggle} type='button' id='sidebarCollapse' className='navbar-btn'>
// 				Click
// 			</Button>
// 			{['left', 'right', 'top', 'bottom'].map((anchor) => (
// 				<React.Fragment key={anchor}>
// 					<Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
// 					<div anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
// 						{SideMenu(anchor)}
// 					</div>
// 				</React.Fragment>
// 			))}
// 		</div>
// 	);
// };

// export default Header;
