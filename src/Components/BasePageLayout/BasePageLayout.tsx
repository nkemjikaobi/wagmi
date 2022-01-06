import React from 'react';
import styles from './BasePageLayout.module.scss';
import Navigation from '../Navigation/Navigation';
import Particles from 'react-tsparticles';
interface IBasePageLayout {
	children: any;
	showNavigation?: boolean;
}

const BasePageLayout: React.FunctionComponent<IBasePageLayout> = ({
	children,
	showNavigation,
}) => {
	const particlesInit = (main: any) => {
		console.log(main);

		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	};

	const particlesLoaded = (container: any) => {
		console.log(container);
	};
	return (
		<section className={styles.basePageLayout}>
			{showNavigation && (
				<div className={styles.section}>
					<Particles
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
										duration: 2,
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
					/>
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
