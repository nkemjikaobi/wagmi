import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import React from 'react';

const CopyWright = (props: any) => {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			style={{color: '#b2bac2'}}
			{...props}
		>
			{'Copyright © '}
			<Link color='inherit' href='#' style={{color: '#66b2ff', textDecoration: 'none'}}>
				WAGMI
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
};

export default CopyWright;
