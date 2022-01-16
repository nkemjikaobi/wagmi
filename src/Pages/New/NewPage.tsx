import * as React from 'react';
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
import { FootersData, TiersData } from 'Constants';
import CopyWright from 'Components/CopyWright/CopyWright';
import styles from "./NewPage.module.scss";


const PricingContent = () => {
	return (
		<React.Fragment>
			<GlobalStyles
				styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
			/>
			<CssBaseline />
			<AppBar
				className={styles.navWrapper}
				position='static'
				color='default'
				elevation={0}
				sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
			>
				<Toolbar sx={{ flexWrap: 'wrap' }}>
					<Typography variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
						Company name
					</Typography>
					<nav>
						<Link
							className={styles.links}
							variant='button'
							color='text.primary'
							href='#'
							sx={{ my: 1, mx: 1.5 }}
						>
							Features
						</Link>
						<Link
							className={styles.links}
							variant='button'
							color='text.primary'
							href='#'
							sx={{ my: 1, mx: 1.5 }}
						>
							Enterprise
						</Link>
						<Link
							className={styles.links}
							variant='button'
							color='text.primary'
							href='#'
							sx={{ my: 1, mx: 1.5 }}
						>
							Support
						</Link>
					</nav>
					<Button href='#' variant='outlined' sx={{ my: 1, mx: 1.5 }} style={{ textTransform: 'capitalize'}}>
						Login
					</Button>
				</Toolbar>
			</AppBar>
			{/* Hero unit */}
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
					Quickly build an effective pricing table for your potential customers
					with this layout. It&apos;s built with default MUI components with
					little customization.
				</Typography>
			</Container>
			{/* End hero unit */}
			<Container maxWidth='md' component='main' style={{background: '#001e3c'}}>
				<Grid container spacing={5} alignItems='flex-end'>
					{TiersData.map(tier => (
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
									action={tier.title === 'Pro' ? <StarIcon /> : null}
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
											${tier.price}
										</Typography>
										<Typography variant='h6' color='text.secondary' style={{color: '#b2bac2'}}>
											/mo
										</Typography>
									</Box>
									<ul>
										{tier.description.map(line => (
											<Typography
												component='li'
												variant='subtitle1'
												align='center'
												key={line}
											>
												{line}
											</Typography>
										))}
									</ul>
								</CardContent>
								<CardActions style={{background: '#0a1929'}}>
									<Button
										fullWidth
										variant={tier.buttonVariant as 'outlined' | 'contained'}
										style={{textTransform: 'capitalize'}}
									>
										{tier.buttonText}
									</Button>
								</CardActions>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>
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
				<Grid container spacing={4} justifyContent='space-evenly'>
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
				</Grid>
				<CopyWright sx={{ mt: 5 }} />
				</Container>
				{/* End footer */}
							</div>

		</React.Fragment>
	);
}

export default function NewPage() {
	return (
		<div>
			<PricingContent />
		</div>
	);
}
