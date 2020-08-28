import React, { useContext } from 'react';
import { UserContext, TestContext } from '../UserContext';
import { login } from '../utils/login';

function Index() {
	//const msg = useContext(UserContext);
	const { user, setUser } = useContext(UserContext);
	const { sample, setSample } = useContext(TestContext);
	//const sample = useContext(TestContext);

	function inputSomething(e) {
		return setSample(e.target.value);
	}

	return (
		<div>
			<h2>Home</h2>
			{/* <div>{user}</div>
			<button onClick={() => setUser('hey!')}>change value</button> */}

			<input
				type="text"
				onChange={e => setSample(e.target.value)}
				value={sample}
				onBlur={inputSomething}
			/>
			<pre>{JSON.stringify(user, null, 5)}</pre>

			{user ? (
				<button
					onClick={() => {
						//call logout
						setUser(null);
					}}
				>
					logout
				</button>
			) : (
				<button
					onClick={async () => {
						const new_user = await login();
						setUser(new_user);
					}}
				>
					login
				</button>
			)}
		</div>
	);
}

export default Index;
