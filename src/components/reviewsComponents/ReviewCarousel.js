import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Grid } from '@material-ui/core';
import FiveStar from '../../assets/images/5star.png';
import YelpIcon from '../../assets/images/yelp-icon.png';
import Thumb from '../../assets/images/thumbtack.png';

export const ReviewCarousel = (props) => {
	const items1 = [
		{
			id: '01',
			name: 'Dr. Richard j.',
			review:
				'These guys are great!!! I just called them this morning and they were able to come out within the hour… They were quick, kind and very courteous. The price they charged was more than reasonable. I highly recommend them to anyone looking to have junk removed. They’re bookmarked in my Yelp app and will be my #1 junk hauling company going forward.',
			platform: 'yelp-icon.png',
		},
		{
			id: '02',
			name: 'Jina S.',
			review:
				'Rico and his ream are great. Fair prices, flexible, professional and hardworking. We have used Greens twice now and will call when we need junk removal again.',
			platform: 'yelp-icon.png',
		},
		{
			id: '03',
			name: 'A N.',
			review:
				'Excellent service! Got back to me within minutes with a quote, had the best price by far, and were extremely prompt, thorough, and wonderful to work with. Highly, highly, highly recommend Green’s Junk Removal –I will always go back to them with any future needs.',
			platform: 'yelp-icon.png',
		},
	];
	const items2 = [
		{
			id: '04',
			name: 'Stacie T.',
			review:
				"Entire experience was great! I reached out for a junk removal pick up (mainly boxes) and received a response within 3 minutes! After we worked out pricing, Mr. Green was at my home in less than an hour and completed everything in less than 15 minutes. More than fair pricing, excellent communication, and responsiveness was great! I will definitely use their service again and we'll be recommending them to everyone.  ",
			platform: 'yelp-icon.png',
		},
		{
			id: '05',
			name: 'Allison W.',
			review:
				'Green’s Junk Removal was very responsive and professional. They came 15 mins early and finished in 5 mins!!! I’ll definitely use them again.',
			platform: 'yelp-icon.png',
		},
		{
			id: '06',
			name: 'Sandy P.',
			review:
				'Green’s junk removal removed trash from my rental property that tenants left behind. They responded right away and came to property the next morning and removed all the trash promptly and professionally. They did a great job and were reasonably priced. I will use them again.',
			platform: 'yelp-icon.png',
		},
	];

	return (
		<Carousel className='carouselBG' interval='10000'>
			<Grid container spacing={4}>
				{items1.map((i) => (
					<Grid item xs={12} md={4} key={i.id} className='reviewGrid'>
						<div className='reviewsPaper'>
							<div className='starRating'>
								<div className='platformName'>
									<img
										className='reviewPlateformIcon'
										src={YelpIcon}
										alt='Five Star rating for Greens Junk Removal Servive in Maryland'
									/>
									<img
										className='reviewPlateformFiveStar'
										src={FiveStar}
										alt='Five Star rating for Greens Junk Removal Servive in Maryland'
									/>
								</div>
							</div>
							<p className='reviewBlurb'>"{i.review}"</p>
							<div className='bottomOfReview'>
								<div className='reviewerName'>
									<h2>{i.name}</h2>
								</div>
							</div>
						</div>
					</Grid>
				))}
			</Grid>
			<Grid container spacing={4}>
				{items2.map((i) => (
					<Grid item xs={12} md={4} key={i.id} className='reviewGrid'>
						<div className='reviewsPaper'>
							<div className='starRating'>
								<div className='platformName'>
									<img
										className='reviewPlateformIcon'
										src={Thumb}
										alt='Five Star rating for Greens Junk Removal Servive in Maryland'
									/>
									<img
										className='reviewPlateformFiveStar'
										src={FiveStar}
										alt='Five Star rating for Greens Junk Removal Servive in Maryland'
									/>
								</div>
							</div>
							<p className='reviewBlurb'>"{i.review}"</p>
							<div className='bottomOfReview'>
								<div className='reviewerName'>
									<h2>{i.name}</h2>
								</div>
							</div>
						</div>
					</Grid>
				))}
			</Grid>
		</Carousel>
	);
};

export default ReviewCarousel;
