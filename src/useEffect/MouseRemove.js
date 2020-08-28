import React, { useState } from 'react';
import MouseMouse from './MouseMove';

function MouseRemove() {
	const [display, setDisplay] = useState(true);
	return (
		<div>
			<button onClick={() => setDisplay(!display)}>Toggle display</button>
			{display && <MouseMouse />}
		</div>
	);
}

export default MouseRemove;
