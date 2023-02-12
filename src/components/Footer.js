import React from 'react';
import '../styles/Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';
const Footer = () => {
	return (
		<div className='footer'>
			<div className='socialMedia'>
				<InstagramIcon />
				<FacebookIcon />
				<TwitterIcon />
				<LinkedInIcon />
			</div>
			<div className='copyright'>
				<CopyrightIcon />
				<p>tankspizza.com</p>
			</div>
		</div>
	);
};

export default Footer;
