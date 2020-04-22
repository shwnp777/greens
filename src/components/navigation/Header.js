import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'reactstrap';

import './Header.css';

const Header = (props) => {
	// $(document).ready(function () {
	// 	$('#sidebarCollapse').on('click', function () {
	// 		$('#sidebar').toggleClass('active');
	// 		$(this).toggleClass('active');
	// 	});
	// });

	const sideNavHandler = () => {};

	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='wrapper'>
			<Nav id='sidebar'>
				<div className='sidebar-header'>
					<h3>Collapsible Sidebar</h3>
				</div>

				<ul className='list-unstyled components'>
					<li className='active'>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About Us</Link>
					</li>
					<li>
						<Link to='/services'>Services</Link>
					</li>
					<li>
						<Link to='/contact'>Contact Us</Link>
					</li>
				</ul>
			</Nav>

			<div id='content'>
				<Button
					onClick={sideNavHandler}
					style={{}}
					type='button'
					id='sidebarCollapse'
					className='navbar-btn'
				>
					<span></span>
					<span></span>
					<span></span>
				</Button>
			</div>
		</div>
	);
};

export default Header;
