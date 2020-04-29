import React from 'react';
import SideBarNav from '../components/navigation/SideBarNav';
import Title from '../components/contactComponents/Title';
import ContactMain from '../components/contactComponents/ContactMain';
import ContactFooter from '../components/contactComponents/ContactFooter';

import './pages.css';

const Contact = () => {
	return (
		<SideBarNav>
			<div className='divBody' style={{ paddingTop: '120px' }}>
				<Title />
				<ContactMain />
				<ContactFooter />
			</div>
		</SideBarNav>
	);
};

export default Contact;
