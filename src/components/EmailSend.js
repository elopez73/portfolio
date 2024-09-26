import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { DialogContent, DialogActions, Button, TextField, DialogContentText } from '@mui/material';

export default function EmailSend({ handleClose, showResult }) {
	const form = useRef();

	const [captchaIsDone, setCaptchaDone] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm(
			'service_is2mvos',
			'template_1ic7i9u',
			form.current,
			'sArWHazh_Lmuo7AP5'
		).then(
			(result) => {
				console.log(result.text);
				showResult(true);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
		handleClose();
		showResult(true);
	};

	const onChange = (value) => {
		console.log('Captcha value:', value);
		setCaptchaDone(true);
	};

	return (
		<form ref={form} onSubmit={sendEmail} >
			<DialogContent className='bg-black ' sx={{
				'& .MuiInputBase-input': { color: 'white' },
				input: { color: 'white' }, // Text color
				'& .MuiInput-underline:before': { borderBottomColor: 'white' }, // Underline color
				'& .MuiInput-underline:hover:before': { borderBottomColor: 'white' },
				'& .MuiInput-underline:after': { borderBottomColor: '#87b4ab' },
				'& label.Mui-focused': {
					color: '#87b4ab',
				},
				label: {
					color: 'white',
				},
			}}>
				<DialogContentText className={'text-white'}>
					To send me a message, please fill in the form below.
				</DialogContentText>
				<TextField
					autoFocus
					required
					margin="dense"
					id="user_name"
					name="user_name"
					label="Name"
					type="text"
					fullWidth
					variant="standard"

				/>
				<TextField
					required
					margin="dense"
					id="user_email"
					name="user_email"
					label="Email Address"
					type="email"
					fullWidth
					variant="standard"
				/>
				<TextField
					required
					margin="dense"
					id="message"
					name="message"
					label="Message"
					type="text"
					multiline
					rows={4}
					fullWidth
					variant="standard"
				/>


				<DialogActions className='bg-black justify-center '>
					<ReCAPTCHA
						sitekey="6Ld5eg4kAAAAAFbDR9b-O3PS8j7bxWKlJkGukPFA"
						onChange={onChange}
						size='compact'
						theme="dark"
					/>
				</DialogActions>
			</DialogContent>
			<DialogActions className='bg-black'>
				<Button className='text-green' onClick={handleClose}>Cancel</Button>
				{captchaIsDone && (
					<Button type="submit" variant="contained">
						Submit
					</Button>
				)}
			</DialogActions>
		</form>
	);
};
