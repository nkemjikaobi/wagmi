import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { FootersData, PlansData, TiersData } from 'Constants';
import CopyWright from 'Components/CopyWright/CopyWright';
import styles from "./HomePage.module.scss";
import Particles from 'react-tsparticles';
import HorizontalLiveTicker from 'Components/HoriziontalLiveTicker/HorizontalLiveTicker';
import CryptoCharts from 'Components/CryptoCharts/CryptoCharts';
import CurrencyConverter from 'Components/CurrencyConverter/CurrencyConverter';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import USDTForm from 'Components/USDTForm/USDTForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import NativeSelect from '@mui/material/NativeSelect';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { useHistory } from "react-router-dom";
import { AiOutlineClose }  from "react-icons/ai"


const PricingContent = () => {
	const [open, setOpen] = useState(false);
	const [showUsdtForm, setShowUsdtForm] = useState(false);
	const [firstName, setFirstname] = useState('');
	const [lastName, setLastName] = useState('');
	const [telegramName, setTelegramName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [isEmpty, setIsEmpty] = useState<boolean>(true);
	const [isSaving, setIsSaving] = useState<boolean>(false);
	const [price, setPrice] = useState('');
	const history = useHistory();

	const handleChange = (event: { target: { value: string } }) => {
    setPrice(event.target.value);
  };

	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};
	
	useEffect(() => checkForEmptyField());


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setIsSaving(true);
		const userData = {
			price, firstName, lastName, telegramName, email, phoneNumber, date: new Date().toString()
		}
		try {
			const res = await fetch("https://sheet.best/api/sheets/bcbcca66-6b28-4050-9df7-e2a11a500adf", {
				method: 'POST',
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(userData)
			})
			if (res.ok) {
				setIsSaving(false)
				toast.info("Your data has been received");
				handleShowUsdtForm()
			}
		}
		catch (error) {
			console.log(error);
		}
	}

	
	const handleUsdtClose = (visibility: boolean) => {
		setShowUsdtForm(visibility);
	}

		const particlesInit = (main: any) => {
			console.log(main);

			// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
		};

		const particlesLoaded = (container: any) => {
			console.log(container);
		};
	
	const checkForEmptyField = () => {
		if (firstName === '' || lastName === '' || email === '' || phoneNumber === '' || telegramName === '' || price === '') {
			return setIsEmpty(true);
		}
		else {
			return setIsEmpty(false);
		}
		
	}

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
		const handleShowUsdtForm = () => {
			setOpen(false);
			setShowUsdtForm(true);
		};
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<ToastContainer />
			<AppBar
				className={styles.navWrapper}
				position='fixed'
				color='default'
				elevation={0}
				sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1, cursor: 'pointer' }} onClick={() => history.push("/")}>
						WAGMI
					</Typography>
					<nav>
					</nav>
					<Button onClick={() => handleShowUsdtForm()} href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }} style={{ textTransform: 'capitalize'}}>
						I have Paid?
					</Button>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}
			{/* Background Image Start */}
			<div className={styles.bg}>
				{/* <Particles
						id='tsparticles'
						init={particlesInit}
						loaded={particlesLoaded}
						options={{
							background: {
								color: {
									value: '#020928',
								},
							},
							fpsLimit: 60,
							interactivity: {
								events: {
									onClick: {
										enable: true,
										mode: 'push',
									},
									onHover: {
										enable: true,
										mode: 'repulse',
									},
									resize: true,
								},
								modes: {
									bubble: {
										distance: 400,
										duration: 1,
										opacity: 0.8,
										size: 40,
									},
									push: {
										quantity: 4,
									},
									repulse: {
										distance: 200,
										duration: 0.4,
									},
								},
							},
							particles: {
								color: {
									value: '#ffffff',
								},
								links: {
									color: '#ffffff',
									distance: 150,
									enable: true,
									opacity: 0.5,
									width: 1,
								},
								collisions: {
									enable: true,
								},
								move: {
									direction: 'none',
									enable: true,
									outMode: 'bounce',
									random: false,
									speed: 6,
									straight: false,
								},
								number: {
									density: {
										enable: true,
										area: 800,
									},
									value: 80,
								},
								opacity: {
									value: 0.5,
								},
								shape: {
									type: 'circle',
								},
								size: {
									random: true,
									value: 5,
								},
							},
							detectRetina: true,
						}}
					/>  */}
				<div className={styles.wrapper}>
					<h1 style={{ margin: '0px' }}>
						WAGMI
					</h1>
					<p>
						We. All. Gonna. Make. It.
					</p>
					<div className={styles.buttonWrapper}>
						<button>Crypto Consultation</button>
						<button>Learn More</button>
					</div>
				</div>
			</div>
			<HorizontalLiveTicker />
			{/* Background Image End */}
			<div style={{background: '#001e3c'}}>

			<Container
				disableGutters
				maxWidth='sm'
				component='main'
				sx={{ pt: 8, pb: 6 }}
				style={{background: '#001e3c'}}
			>
				<Typography
					component='h1'
					variant='h2'
					align='center'
					color='text.primary'
					gutterBottom
					style={{color: 'white'}}
				>
					Pricing
				</Typography>
				<Typography
					variant='h5'
					align='center'
					color='text.secondary'
						component='p'
						style={{color: '#b2bac2'}}
				>
					Our plans and benefits.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main' style={{background: '#001e3c'}}>
				<Grid container spacing={5} alignItems='flex-end'>
					{PlansData.map(tier => (
						// Enterprise card is full width at sm breakpoint
						<Grid
							item
							key={tier.title}
							xs={12}
							sm={tier.title === 'Enterprise' ? 12 : 6}
							md={4}
							
						>
							<Card>
								<CardHeader
									title={tier.title}
									subheader={tier.subheader}
									titleTypographyProps={{ align: 'center' }}
									action={tier.title === 'Futures Trading Package' ? <StarIcon /> : null}
									subheaderTypographyProps={{
										align: 'center',
										color: '#b2bac2',
									}}
									sx={{
										backgroundColor: theme =>
											theme.palette.mode === 'light'
												? theme.palette.grey[200]
												: theme.palette.grey[700],
									}}
									style={{background: '#3e5060', color: '#66b2ff'}}
								/>
								<CardContent style={{background: '#0a1929', color: '#fff'}}>
									<Box
										sx={{
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'baseline',
											mb: 2,
										}}
									>
										<Typography
											component='h2'
											variant='h3'
											color='text.primary'
											style={{color: '#fff'}}
										>
											${tier.price} <hr />
										</Typography>
										<Typography variant='h6' color='text.secondary' style={{color: '#b2bac2'}}>
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map((line: any) => (
											<Typography
												component='li'
												variant='subtitle1'
												align='center'
												key={line}
											>
												{line} <hr />
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions style={{background: '#0a1929'}}>
									<Button
										fullWidth
										variant={tier.buttonVariant as 'outlined' | 'contained'}
										style={{ textTransform: 'capitalize' }}
										onClick={handleOpen}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
								<Modal
									open={open}
									onClose={handleClose}
									aria-labelledby="modal-modal-title"
									aria-describedby="modal-modal-description"
									>
									<Box sx={style}>
										<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
											<Typography id="modal-modal-title"
												variant="h6" component="h2"
												sx={{ textAlign: 'center' }}>
												Almost there!
												

											</Typography>
											<div onClick={handleClose} style={{ cursor: 'pointer' }}>
												<AiOutlineClose />
											</div>
										</div>
										
										<FormControl sx={{ m: 1, width: '100%' }} variant="standard">
											<InputLabel id="demo-customized-select-native" htmlFor="demo-customized-select-native" sx={{ position: 'relative' }}>Price</InputLabel>
											<NativeSelect
												id="demo-customized-select-native"
												value={price}
												onChange={handleChange}
												input={<BootstrapInput />}
												inputProps={{ 'aria-label': 'Price' }}

												>
												<option aria-label="None" value="" />
												<option value='$10'>Free -$0</option>
												<option value='$20'>Pro -$15</option>
												<option value='$30'>Enterprise -$30</option>
											</NativeSelect>
										</FormControl>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											<TextField id="filled-basic" name="firstName" required type="text" value={firstName} onChange={(e: any) => setFirstname(e.target.value)} label="First Name" variant="filled" sx={{ width: '100%' }} />
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											<TextField id="filled-basic" name="lastName" required type="text" label="Last Name" value={lastName} onChange={(e: any) => setLastName(e.target.value)} variant="filled" sx={{ width: '100%' }} />
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											<TextField id="filled-basic" name="telegramName" required type="text" label="Telegram Username" value={telegramName} onChange={(e: any) => setTelegramName(e.target.value)} variant="filled" sx={{ width: '100%' }} />
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											<TextField id="filled-basic" name="email" required label="Email" type="email" value={email} onChange={(e: any) => setEmail(e.target.value)} variant="filled" sx={{ width: '100%' }} />
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											<TextField id="filled-basic" name="phoneNumber" required type="number" label="Phone Number" value={phoneNumber} onChange={(e: any) => setPhoneNumber(e.target.value)} variant="filled" sx={{ width: '100%' }} />
										</Typography>
										<Typography id="modal-modal-description" sx={{ mt: 2 }}>
											{
												isSaving ?
													<LoadingButton
													loading
													loadingPosition="start"
													startIcon={<SaveIcon />}
													variant="outlined"
													>
													Saving...
												</LoadingButton> :
												<Button disabled={isEmpty} variant="outlined" onClick={(e: any) => handleSubmit(e)}>Proceed to Payment</Button>

											}
											
										</Typography>
									</Box>
								</Modal>
								<USDTForm showUsdtForm={showUsdtForm} handleUsdtClose={handleUsdtClose} />
							</Card>
						</Grid>
					))}
				</Grid>
				</Container>
				<div className={styles.charts}>
					<CryptoCharts />
					{/* <CurrencyConverter /> */}
				</div>
			{/* Footer */}
			<Container
				maxWidth='md'
				component='footer'
				sx={{
					borderTop: (theme: any) => `1px solid ${theme.palette.divider}`,
					mt: 8,
					py: [3, 6],
				}}
			>
				{/* <Grid container spacing={4} justifyContent='space-evenly'>
					{FootersData.map(footer => (
						<Grid item xs={6} sm={3} key={footer.title}>
							<Typography variant='h6' color='text.primary' gutterBottom style={{color: 'white'}}>
								{footer.title}
							</Typography>
							<ul>
								{footer.description.map((item: any) => (
									<li key={item} style={{color: '#66b2ff'}}>
										<Link href='#' variant='subtitle1' className={styles.links2} style={{textDecoration: 'none'}}>
											{item}
										</Link>
									</li>
								))}
							</ul>
						</Grid>
					))}
				</Grid> */}
				<CopyWright sx={{ mt: 5 }} />
				</Container>
				{/* End footer */}
			</div>

		</React.Fragment>
	);
}

export default function HomePage() {
	return (
		<div>
			<PricingContent />
		</div>
	);
}
