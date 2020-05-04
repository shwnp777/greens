import React from 'react';

import { Grid } from '@material-ui/core';

import Word from '../../assets/images/word.png';
import FaceBook from '../../assets/images/facebook.png';
import Yelp from '../../assets/images/yelp-icon.png';
import Thumb from '../../assets/images/thumbtack.png';

export const ReviewTop = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12} md={4}></Grid>
			<Grid item xs={12} md={4} className='wordIMGDiv'>
				<img src={Word} alt='' />
			</Grid>
			<Grid item xs={12} md={4}>
				<div className='rightReviewSide'>
					<div className='share'>
						<h3>Share Your Experience</h3>
					</div>
					<ul>
						<a href='https://www.yelp.com/biz/greens-junk-removal-laurel'>
							<li className='socialPlatformIcons'>
								<img src={Yelp} alt='Social Media for Greens Junk Removal' />
							</li>
						</a>
						<a href='https://www.thumbtack.com/md/glen-burnie/junk-removal/greens-junk-removal-landscape-demo-services/service/214708252673213556'>
							<li className='socialPlatformIcons'>
								<img src={Thumb} alt='Social Media for Greens Junk Removal' />
							</li>
						</a>
						<a href='https://www.facebook.com/Greens-Junk-Removal-358833570953862/'>
							<li className='socialPlatformIcons'>
								<img
									src={FaceBook}
									alt='Social Media for Greens Junk Removal'
								/>
							</li>
						</a>
					</ul>
				</div>
			</Grid>
		</Grid>
	);
};
