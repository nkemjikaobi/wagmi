import React from 'react';
import BasePageLayout from '../../Components/BasePageLayout/BasePageLayout';
import styles from "./HomePage.module.scss";
const HomePage = () => {
	return (
		<BasePageLayout>
			<div className={styles.wrapper}>
				<h1>
					Invest In The Future<span>Of Currency</span>{' '}
				</h1>
				<p>
					We offers users a fully operational long-term rental platform. It
					plans to leverages blockchain<br /> technology to ensure seamless rental
					experience.
				</p>
				<div className={styles.buttonWrapper}>
					<button>Crypto Consultation</button>
					<button>Learn More</button>
				</div>
			</div>
		</BasePageLayout>
	);
};

export default HomePage;
