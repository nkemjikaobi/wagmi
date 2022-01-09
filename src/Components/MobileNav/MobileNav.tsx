import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import styles from './MobileNav.module.scss';
import logo from '../../Assets/images/png/logo.png';
import { Link } from 'react-router-dom';
import { composeClasses } from 'Libs/Utils/utils';
import useClickOutside from 'CustomHooks/useClickOutside';

const MobileNav = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	const dropDownNode = useClickOutside(() => {
		setShowDropDown(false);
	});
	return (
		<>
			<div className={styles.navigationWrapper}>
				<div className={styles.logoWrapper}>
					<Link to='/'>
						<img src={logo} alt='logo' height={46} width={172} />
					</Link>
				</div>
				<div
					className={styles.iconWrapper}
					onClick={() => setShowDropDown(!showDropDown)}
				>
					<FiMenu />
				</div>
			</div>
			{showDropDown && (
				<div
					className={composeClasses(
						styles.links,
						styles.mobileOnly,
						showDropDown && styles.bottomMargin
					)}
					ref={dropDownNode}
				>
					<div>USDT</div>
					<div>Plans</div>
					<div>
						<Link to='/paid'>Already Paid?</Link>
					</div>
					<div>
						<button>Register</button>
					</div>
				</div>
			)}
		</>
	);
};

export default MobileNav;
