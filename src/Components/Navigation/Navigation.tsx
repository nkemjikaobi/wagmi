import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/images/png/logo.png';
import Icon from '../Icons';
import styles from './Navigation.module.scss';

const Navigation = () => {
	return (
		<div className={styles.navigationWrapper}>
			<div className={styles.logoWrapper}>
				<Link to='/'>
					<img src={logo} alt='logo' height={46} width={172} />
				</Link>
			</div>
			<div className={styles.listWrapper}>
				<div className={styles.usdt}>
					<span>USDT</span>
					<Icon name='arrowDown' />
				</div>
				<div>Plans</div>
				<div>
					<a href='#'>Already Paid?</a>
				</div>
				<div>
					<button>Register</button>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
