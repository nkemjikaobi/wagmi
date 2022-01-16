import { PlansData } from 'Constants';
import React from 'react';
import styles from './Plans.module.scss';
import { FaBitcoin } from "react-icons/fa";

const Plans = () => {
	return <div className={styles.plansWrapper}>
		{
			PlansData.map(data => (
				<div key={data.id} className={styles.plansItem}>
					<h3>{data.plan_name}</h3>
					<p>{ data.price}</p>
					<p>{ data.duration}</p>
					<p>{data.opt_time}</p>
					<p>{data.maintainance_fee}</p>
				</div>
			))
		}
	</div>;
};

export default Plans;