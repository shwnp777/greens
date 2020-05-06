import React from 'react';
import SideBarNav from '../components/navigation/SideBarNav';
import Title from '../components/serviceComponents/ServicesTitle';
import HeaderGrid from '../components/serviceComponents/HeaderGrid';
import FirstRow from '../components/serviceComponents/FirstRow';
import SecondRow from '../components/serviceComponents/SecondRow';
import BottomNav from '../components/serviceComponents/BottomNav';

const Services = () => {
	return (
		<SideBarNav>
			<div className='divBody divBody2' style={{ paddingTop: '120px' }}>
				<Title />
				<div className='marginDiv'></div>
				<HeaderGrid />
				<FirstRow />
				<SecondRow />
				<BottomNav />
			</div>
		</SideBarNav>
	);
};

export default Services;
