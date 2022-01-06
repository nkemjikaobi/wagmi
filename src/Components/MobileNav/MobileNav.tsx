import React from 'react';
import { FiMenu } from 'react-icons/fi';
import styles from './MobileNav.module.scss';
import logo from '../../Assets/images/png/logo.png';
import { Link } from 'react-router-dom';

const MobileNav = () => {
	return (
		<div className={styles.navigationWrapper}>
			<div className={styles.logoWrapper}>
				<Link to='/'>
					<img src={logo} alt='logo' height={46} width={172} />
				</Link>
			</div>
			<div className={styles.iconWrapper}>
				<FiMenu />
			</div>
		</div>
	);
};

export default MobileNav;
