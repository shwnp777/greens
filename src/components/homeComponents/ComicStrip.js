import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import Comic1 from '../../assets/images/comic1.JPG';
import Comic2 from '../../assets/images/comic2.JPG';
import Comic3 from '../../assets/images/comic3.JPG';
import Comic4 from '../../assets/images/comic4.JPG';
import Comic5 from '../../assets/images/comic5.JPG';

import './ComicStrip.css';

const ComicStrip = () => {
	return (
		<Container>
			<Grid container>
				<Grid item xs={12}>
					<img
						className='imgWidth'
						src={Comic1}
						alt='Comic Strip for Greens Junk Removal in Maryland'
					/>
				</Grid>

				<Grid item xs={6} sm={3}>
					<img
						className='imgWidth'
						src={Comic2}
						alt='Comic Strip for Greens Junk Removal in Maryland'
					/>
				</Grid>
				<Grid item xs={6} sm={3}>
					<img
						className='imgWidth'
						src={Comic3}
						alt='Comic Strip for Greens Junk Removal in Maryland'
					/>
				</Grid>
				<Grid item xs={6} sm={3}>
					<img
						className='imgWidth'
						src={Comic4}
						alt='Comic Strip for Greens Junk Removal in Maryland'
					/>
				</Grid>
				<Grid item xs={6} sm={3}>
					<img
						className='imgWidth'
						src={Comic5}
						alt='Comic Strip for Greens Junk Removal in Maryland'
					/>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ComicStrip;
