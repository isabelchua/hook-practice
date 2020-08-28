import React, { useContext } from 'react';
import ComponentE from './ComponentE';
import { UserContext, ChannelContext } from '../App';

// get from component E
const ComponentC = () => {
	const x = useContext(UserContext);
	const y = useContext(ChannelContext);

	return (
		<div>
			{x} - {y}
			<ComponentE />
		</div>
	);
};

export default ComponentC;
