import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './ContactComponents.css';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
		},
	},
	textField: {
		width: '95%',
	},
	messageField: {
		width: '95%',
	},
}));

const ContactMain = () => {
	const classes = useStyles();

	return (
		<div className='mainContactDiv'>
			<div className='mapBGDiv'>
				<div className='formdiv'>
					<form
						className={classes.root}
						action='https://docs.google.com/forms/u/0/d/e/1FAIpQLSc7ItdBpnZCC8Jv9nCDwSNceTKRnTY8UlHBBtx7V-cPrYxNwg/formResponse'
						method='POST'
					>
						<div>
							<TextField
								className={classes.textField}
								id='outlined-textarea'
								label='Name'
								name='entry.1534058921'
								placeholder='Enter Your Name'
								multiline
								variant='outlined'
							/>
							<TextField
								className={classes.textField}
								id='outlined-textarea'
								label='Phone'
								name='entry.2095721149'
								placeholder='Enter Your Phone Number'
								multiline
								variant='outlined'
							/>
							<TextField
								className={classes.textField}
								id='outlined-textarea'
								label='Email'
								placeholder='Enter Your Email Address'
								multiline
								name='emailAddress'
								variant='outlined'
							/>
							<TextField
								className={classes.textField}
								id='outlined-textarea'
								label='Subject'
								placeholder='Enter a Subject'
								multiline
								variant='outlined'
							/>
							<TextField
								className={classes.messageField}
								id='outlined-multiline-static'
								label='Message'
								multiline
								name='entry.1320436048'
								rows={4}
								placeholder='What can I help you with?...'
								variant='outlined'
							/>
							<Button type='submit' className='contactBTN'>
								Send Message
							</Button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactMain;
