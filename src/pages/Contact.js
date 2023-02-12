import React from 'react';
import '../styles/Contact.css';
import left from '../images/left.jpg';

const Contact = () => {
	return (
		<div className='contact'>
			<div
				className='leftSide'
				style={{ backgroundImage: `url(${left})` }}
			></div>
			<div className='rightSide'>
				<h1>Contact Us</h1>

				<form
					id='contact-form'
					onSubmit={() => {}}
				>
					<label htmlFor='name'>Full Name</label>
					<input
						name='fullName'
						placeholder='Enter full name...'
						type='text'
					/>
					<label htmlFor='name'>Email</label>
					<input
						name='email'
						placeholder='Enter email...'
						type='email'
					/>
					<label htmlFor='message'>Message</label>
					<textarea
						rows='6'
						name='message'
						placeholder='Enter message...'
					></textarea>
					<button type='submit'>Send Message</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
