import React from 'react';
import logo from '../../Assets/images/png/logo.png';
import Icon from '../Icons';

const Navigation = () => {
	return (
		<div>
			<div>
				<img src={logo} alt='logo' height={46} width={172} />
			</div>
			<div>
				<ul>
					<li>
						<div>
							<span>USDT</span>
							<Icon name='arrowDown' />
						</div>
					</li>
					<li>Plans</li>
					<li>
						<a href='#'>Already Paid?</a>
					</li>
					<li>
						<button>Register</button>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
