import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

interface IUSDTForm {
	showUsdtForm: boolean;
	handleUsdtClose: Function;
}

const USDTForm = (props: IUSDTForm) => {
	const [showId, setShowId] = useState<boolean>(false);
	const [transactionId, setTransactionId] = useState<string>('');
	const [walletAddress, setWalletAddress] = useState<string>('');
	const [phone, setPhone] = useState<string>('');
	const history = useHistory();

	const style = {
		position: 'absolute' as 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: 400,
		bgcolor: 'background.paper',
		border: '2px solid #000',
		boxShadow: 24,
		p: 4,
	};
	const getData = async () => {
		try {
			const res = await fetch(
				'https://sheet.best/api/sheets/87a7eb5a-3531-4b1d-bf89-c506b4ca790d'
			);
			const data = await res.json();
			setWalletAddress(data[0].walletAddress);
			setPhone(data[0].phone);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		let mounted = true;
		if (walletAddress === '' && phone === '') {
			getData();
			console.log('ran');
		}
		return () => {
			mounted = false;
		};
	}, [walletAddress, phone]);
	const handleClick = () => {
		if (!showId) {
			return setShowId(true);
		}
		if (transactionId === '') {
			return toast.error('Transaction Id is required');
		}
		if (transactionId !== '') {
			toast.info('ID received..Redirecting to whatsapp');
			props.handleUsdtClose(false);
			const win: any = window.open(
				`https://wa.me/${phone}?text=Hello, I just made a payment to your USDT address. My Transaction Id is ${transactionId}`,
				'_blank'
			);
			// const win: any = window.open(
			// 	`https://t.me/${username}/`,
			// 	'_blank'
			// );
			win.focus();
		}
	};
	return (
		<Modal
			open={props.showUsdtForm}
			onClose={() => props.handleUsdtClose(false)}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<Typography
						id='modal-modal-title'
						variant='h6'
						component='h2'
						sx={{ textAlign: 'center' }}
					>
						Pay to the USDT address below
					</Typography>
					<div
						onClick={() => props.handleUsdtClose(false)}
						style={{ cursor: 'pointer' }}
					>
						<AiOutlineClose />
					</div>
				</div>

				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					<TextField
						disabled
						id='filled-basic'
						label='USDT'
						value={walletAddress}
						variant='filled'
						sx={{ width: '100%' }}
					/>
				</Typography>
				{!showId && (
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						Click the button below to paste your wallet transaction ID if you
						have made payment
					</Typography>
				)}

				{showId && (
					<Typography id='modal-modal-description' sx={{ mt: 2 }}>
						<TextField
							id='filled-basic'
							value={transactionId}
							name='transactionId'
							onChange={(e: any) => setTransactionId(e.target.value)}
							label='Paste the transaction ID'
							variant='filled'
							sx={{ width: '100%' }}
						/>
					</Typography>
				)}

				<Typography id='modal-modal-description' sx={{ mt: 2 }}>
					<Button variant='outlined' onClick={handleClick}>
						{showId ? 'Submit' : 'I have paid?'}
					</Button>
				</Typography>
			</Box>
		</Modal>
	);
};

export default USDTForm;
