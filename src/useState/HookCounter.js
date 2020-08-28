import React, { useState } from 'react';

function HookCounter() {
	const [name, setName] = useState({ firstName: 0, lastName: '' });

	function editThis(e) {
		//-Math.abs(amount)
		setName({ ...name, firstName: -Math.abs(e.target.value) });
	}

	return (
		<div>
			<form>
				<input type='text' value={name.firstName} onChange={editThis} />
				<input
					type='text'
					value={name.lastName}
					onChange={e => setName({ ...name, lastName: e.target.value })}
				/>
			</form>
			<h2>first name is {name.firstName}</h2>
			<h2>last name is {name.lastName}</h2>
		</div>
	);
}

export default HookCounter;
