import React, { useEffect, useState } from 'react';

function Timer() {
	const [count, setCount] = useState(0);
	const tick = () => {
		setCount(prevCount => prevCount + 1);
	};
	useEffect(() => {
		//call function within useEffect

		// function doSomething() {
		// 	console.log(someProp);
		// }
		// doSomething();
		const interval = setInterval(tick, 1000);
		return () => {
			clearInterval(interval);
		};
	}, []);
	//},[someProp])
	return <div>{count}</div>;
}

export default Timer;
