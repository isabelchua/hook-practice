import React, { useState, useEffect } from 'react';

function MouseMove() {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	const logMousePosition = e => {
		console.log('mouse event');
		//clientX provides horizontal postion of mouse
		setX(e.clientX);
		setY(e.clientY);
	};

	useEffect(() => {
		console.log('useEffect called');
		window.addEventListener('mousemove', logMousePosition);

		return () => {
			console.log('component unmount');
			window.removeEventListener('mousemove', logMousePosition);
		};
		//adding blank [] is equivalent to component did mount
	}, []);

	return (
		<div>
			coordinates x ={x} y ={y}
		</div>
	);
}

export default MouseMove;
