import React, { useState } from 'react';
import { useHue } from '../providers/hueProvider';
import styles from './chat.module.css';

export default function Answers(): JSX.Element {
	const { answers, colors } = useHue();

	return (
		<div style={{ padding: '10px 0' }} className={styles.gallery}>
			{!!answers &&
				!!answers.length &&
				answers.map((answer, i) => {
					const style = {
						background: `${colors[i]}`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
					};
					return (
						<div style={style} className={styles.photo}>
							<div
								style={{
									opacity: 0.7,
									background: `url('data:image/png;base64, ${answer}')`,
									position: 'absolute',
									width: '100%',
									height: '100%',
								}}
							></div>
							{/* <img src={`data:image/png;base64, ${answer}`} alt="Red dot" /> */}
						</div>
					);
				})}
		</div>
	);
}
