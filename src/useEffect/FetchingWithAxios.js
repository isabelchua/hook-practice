import React, { useState, useEffect } from 'react';
import axios from 'axios';

// sample of getting a post from sample JSON

function FetchingWithAxios() {
	const [post, setPost] = useState({});
	const [id, setId] = useState(1);
	const [idFromButtonClick, setIdFromButtonClick] = useState(1);

	const handleClick = () => {
		setIdFromButtonClick(id);
	};

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
			.then(res => {
				console.log(res);
				console.log(res.data);
				setPost(res.data);
			})
			.catch(err => {
				console.log(err);
			});
	}, [idFromButtonClick]);

	return (
		<div>
			<ul>
				<input
					type='text'
					value={id}
					onChange={e => setId(e.target.value)}
				/>
				<button type='button' onClick={handleClick}>
					fetch post
				</button>
				<div>{post.title}</div>
				{/* {posts.map(post => (
					<li key={post.id}>{post.title}</li>
				))} */}
			</ul>
		</div>
	);
}

export default FetchingWithAxios;
