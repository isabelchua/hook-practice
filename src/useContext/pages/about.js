import React, { useContext } from 'react';
import { UserContext, TestContext } from '../UserContext';

function About() {
	//const msg = useContext(UserContext);
	const { user } = useContext(UserContext);
	const { sample } = useContext(TestContext);

	return (
		<div>
			<h2>About</h2>
			{sample}
			{/* <div>{msg}</div> */}
			<div>{JSON.stringify(user, null, 2)}</div>
		</div>
	);
}

export default About;
