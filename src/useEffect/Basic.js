import React, { useState, useEffect } from 'react';

function Basic() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState('');

	function clickMe() {
		setCount(prevCount => prevCount + 1);
	}

	//use efect runs after every render runs inside the component
	useEffect(() => {
		console.log('useEffect - updating document title');
		document.title = `You clicked ${count} times`;
		//the effect is only run with if the variable changes
	}, [count]);

	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<button onClick={clickMe}>Click Me {count}</button>
		</div>
	);
}

export default Basic;
