import React from 'react';
import SideBarNav from '../components/navigation/SideBarNav';
import ReviewTitle from '../components/reviewsComponents/ReviewTitle';
import { ReviewTop } from '../components/reviewsComponents/ReviewTop';
import { ReviewCarousel } from '../components/reviewsComponents/ReviewCarousel';
import { ReviewFooter } from '../components/reviewsComponents/ReviewFooter';

const Reviews = () => {
	return (
		<SideBarNav>
			<div className='reviewBG' style={{ paddingTop: '120px' }}>
				<ReviewTitle />
				<ReviewTop />
				<ReviewCarousel />
				<ReviewFooter />
			</div>
		</SideBarNav>
	);
};

export default Reviews;
