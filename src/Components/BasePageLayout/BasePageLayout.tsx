import React from 'react';
import styles from './BasePageLayout.module.scss';
import Navigation from '../Navigation/Navigation';

interface IBasePageLayout {
	children: any;
	showNavigation?: boolean;
}

const BasePageLayout: React.FunctionComponent<IBasePageLayout> = ({
	children,
	showNavigation,
}) => {
	return (
		<section className={styles.basePageLayout}>
			{showNavigation && (
				<div className={styles.section}>
					<Navigation />
				</div>
			)}
			<main className={styles.children}>{children}</main>
		</section>
	);
};

BasePageLayout.defaultProps = {
	showNavigation: true,
};

export default BasePageLayout;
